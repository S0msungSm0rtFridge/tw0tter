const express = require("express");
const router = express.Router();
const database = require("../db.js");

router.get('/', (req, resp) => { //grab all posts
    // console.log("hello");
    database.query('SELECT * FROM posts WHERE parentPost IS NULL', (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.get('/getChild/:postID', (req, resp) => { //returns all posts that are a reply to another post
    const postID = req.params.postID;
    console.log(postID);
    database.query('SELECT * FROM posts WHERE parentPost = ?', [postID], (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        console.log(res);
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

router.get('/getNumLike/:postID', (req, resp) => { //get number of likes of a post (might be useless)
    const postID = req.params.postID;
    database.query('SELECT numLikes FROM posts WHERE postID = ? ', [postID], (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.get('/getNumRetweet/:postID', (req, resp) => { //get number of retweets of a post (might be useless)
    const postID = req.params.postID;
    database.query('SELECT numRetweet FROM posts WHERE postID = ? ', [postID], (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.post('/updateView/:postID', (req, resp) => { //update views in the database
    const postID = req.params.postID;
    database.query('UPDATE posts SET views = views + 1 WHERE postID = ?', [postID], (err, res) => {
        if (err){
            return resp.status(500).json( {error: err.message});
        }
        
        if (res.affectedRows == 0){
            return resp.status(404).json({error: 'Post not found'});
        }

        return resp.status(200).json({ success: true });
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