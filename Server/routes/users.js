const express = require("express");
const router = express.Router();
const database = require("../db.js");
const { hashPassword, verifyPassword } = require("../utils/passwordUtils");

router.get('/', (req, resp) => { //grab all users
    database.query('SELECT * FROM users', (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.get('/getFollowers/:userID', (req, resp) => { //grab all followers of a userID
    const userID = req.params.userID;
    database.query('SELECT followerID FROM follows WHERE followingID = ? ', [userID], (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.get('/getFollowing/:userID', (req, resp) => { //grab all the ids a user follows
    const userID = req.params.userID;
    database.query('SELECT followingID FROM follows WHERE followerID = ? ', [userID], (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.get('/getUser/:userID', (req, resp) => { //get a user by its userID
    const userID = req.params.userID;
    // console.log(userID);
    database.query('SELECT * FROM users WHERE userID = ?', [userID], (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message});
        }
        // console.log("After query");
        // console.log(res);
        resp.json(res[0]);
    });
});
//follow a user
router.post('/follow', (req, res) => {
    const { followerID, followingID } = req.body;

    const sql = "INSERT INTO follows (followerID, followingID) VALUES (?, ?)"

    database.query(sql, [followerID, followingID], (err) => {
        if(err){
            return res.status(500).json({err: err.message});
        }
        res.json({message: "followed successfully"});
    })
});

//unfollow a user
router.post('/unfollow', (req, res) => {

    const { followerID, followingID } = req.body;

    const sql = "DELETE FROM follows WHERE followerID = ? AND followingID = ?"

    database.query(sql, [followerID, followingID], (err) => {
        if(err){
            return res.status(500).json({err: err.message});
        }
        res.json({message: "unfollowed successfully"});
    })
})

// get user with searched keywords
router.get("/search", (req, res) => {
    const search = req.query.search;

    if (!search) {
        return res.status(400).json({ error: "Search query is required" });
    }

    const words = search.trim().split(/\s+/);    
    const conditions = [];
    const values = [];

    words.forEach(word => {
        conditions.push("(displayName LIKE ?)");
        values.push(`%${word}%`);
    });

    const sql = `SELECT * FROM users WHERE ${conditions.join(" OR ")}`;

    database.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});
// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { username, displayName, password, bio, joinedDate, birthDate } = req.body;
        console.log(username, displayName, password, bio, joinedDate, birthDate);
        // Validate required fields
        if (!username || !displayName || !password || !joinedDate || !birthDate) {
            return res.status(400).json({ error: "Username, display name, and password are required" });
        }
        // Check if username already exists                                               
        const existingUser = await new Promise((resolve, reject) => {
            database.query('SELECT userID FROM users WHERE username = ?', [username], (err, result) => {
                if (err){
                    reject(err);
                } 
                else{
                    resolve(result);
                } 
            });
        });

        if (existingUser.length > 0) {
            return res.status(409).json({ error: "Username already exists" });
        }
        // Hash the password
        const hashedPassword = await hashPassword(password);
        
        // Insert new user
        const sql = 'INSERT INTO users (objectTag, username, displayName, pass, bio) VALUES (?, ?, ?, ?, ?)';
        const values = ['u', username, displayName, hashedPassword, bio || 'No Biography', joinedDate, birthDate];
       
        database.query(sql, values, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }
            
            // Return user info (without password)
            res.status(201).json({
                message: "User created successfully",
                user: {
                    userID: result.insertId,
                    username,
                    displayName,
                    bio: bio || '',
                    joinedDate,
                    birthDate
                }
            });
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Login user
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate required fields
        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }

        const userResult = await new Promise((resolve, reject) => { //promise to query for the matching username
            database.query('SELECT * FROM users WHERE username = ?', [username], (err, res) => {
                if (err){
                    reject(err);
                }
                else{
                    resolve(res);
                }
            });
        });

        console.log(userResult);

        if (userResult.length === 0){
            return res.status(401).json({ error: "Invalid username or password"});
        }

        const user = userResult[0]; // Get the first (and only) user from the array
        const passcheck = await verifyPassword(password, user.pass); // Fix parameter order
        if (!passcheck){ //check if the password to login is correct
            return res.status(401).json({ error: "Invalid username or password" });
        }

        return res.status(200).json({ //return the user without the password
            message: 'Login Successful',
            user: {
                userID: user.userID,
                username: user.username,
                displayName: user.displayName,
                bio: user.bio || '',
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;