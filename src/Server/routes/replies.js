const express = require("express");
const router = express.Router();
const database = require("../db.js");

router.get('/', (req, resp) => { //get all replies
    database.query('SELECT * FROM replies', (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.get('/getWhoLike/:replyID', (req, resp) => { //get all users who liked a reply
    const replyID = req.params.replyID;
    database.query('SELECT userID FROM reply_likes WHERE replyID = ?', [replyID],(err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.get('/getNumLike/:replyID', (req, resp) => { //get number of likes of a reply
    const replyID = req.params.postID;
    database.query('SELECT numLikes FROM replies WHERE replyID = ? ', [replyID], (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.get('/getParentPost/:replyID/', (req, resp) => { //get the post a reply is for
    const replyID = req.params.replyID;
    database.query('SELECT postID FROM reply_post WHERE replyID = ? ', [replyID], (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res)
    });
});

router.get('/getParentReply/:replyID/', (req, resp) => { //get the reply a reply is for
    const replyID = req.params.replyID;
    database.query('SELECT parentReplyID FROM reply_comment WHERE replyID = ? ', [replyID], (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res)
    });
});

module.exports = router;