const express = require("express");
const router = express.Router();
const database = require("../../../Server/db.js");

router.get('/', (req, resp) => { //grab all posts
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

router.post('/addPost/:postBy/:communityID/:content', (req, resp) => {
    const postBy = req.params.postBy;
    const communityID = req.params.communityID;
    const content = req.params.content;

    database.query('INSERT into posts ()')
});

module.exports = router;