const express = require("express");
const router = express.Router();
const database = require("../db.js");

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

    document.query(sql, [followerID, followingID], (err) => {
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

    document.query(sql, [followerID, followingID], (err) => {
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
module.exports = router;