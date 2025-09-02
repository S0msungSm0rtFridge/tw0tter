const express = require("express");
const router = express.Router();
const database = require("../Server.js");

router.get('/', (req, resp) => {
    database.query('SELECT * FROM posts', (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.get('/getRetweets/:postID', (req, resp) => {
    const postID = req.params.postID;
    database.query('SELECT userID FROM retweets WHERE postID = ? ', [postID],(err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.get('/getLikes/:postID', (req, resp) => {
    const postID = req.params.postID;
    database.query('SELECT userID FROM post_likes WHERE postID = ? ', [postID],(err, res) => {
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