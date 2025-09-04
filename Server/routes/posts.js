const express = require("express");
const router = express.Router();
const database = require("../db.js");

router.get('/', (req, resp) => { //grab all posts
    // console.log("hello");
    database.query('SELECT * FROM posts', (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.get('/getWhoRetweet/:postID', (req, resp) => { //get all userids who retweeted a post
    const postID = req.params.postID;
    database.query('SELECT userID FROM retweets WHERE postID = ? ', [postID],(err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.get('/getWhoLike/:postID', (req, resp) => { //get all userids that liked a post
    const postID = req.params.postID;
    database.query('SELECT userID FROM post_likes WHERE postID = ? ', [postID],(err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.get('/getPost/:postID', (req, resp) => { //get a post by its ID
    const postID = req.params.postID;
    // console.log("confirm something happening");
    // console.log(postID);
    database.query(`SELECT * FROM posts WHERE postID = ?`, [postID], (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        // console.log("here now");  
        // console.log(res);
        resp.json(res[0]);
    });
});

router.get('/getNumLike/:postID', (req, resp) => { //get number of likes of a post
    const postID = req.params.postID;
    database.query('SELECT numLikes FROM posts WHERE postID = ? ', [postID], (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.get('/getNumRetweet/:postID', (req, resp) => { //get number of retweets of a post
    const postID = req.params.postID;
    database.query('SELECT numRetweet FROM posts WHERE postID = ? ', [postID], (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});


// get post with searched keywords
router.get("/search", (req, res) => {
    const search = req.query.search;

    if (!search) {
        return res.status(400).json({ error: "Search query is required" });
    }

    const words = search.trim().split(/\s+/);    
    const conditions = [];
    const values = [];

    words.forEach(word => {
        conditions.push("(content LIKE ?)");
        values.push(`%${word}%`);
    });


    const sql = `SELECT * FROM posts WHERE ${conditions.join(" OR ")}`;

    database.query(sql, values, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});
module.exports = router;