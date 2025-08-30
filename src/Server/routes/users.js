const express = require("express");
const router = express.Router();
const database = require("../Server.js");

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

module.exports = router;