const express = require("express");
const router = express.Router();
const database = require("../Server.js");

router.get('/', (req, resp) => {
    database.query('SELECT * FROM replies', (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

router.get('/getLikes/:replyID', (req, resp) => {
    const replyID = req.params.replyID;
    database.query('SELECT userID FROM reply_likes WHERE replyID = ?', [replyID],(err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

module.exports = router;