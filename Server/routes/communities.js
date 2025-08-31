const express = require("express");
const router = express.Router();
const database = require("../Server.js");

router.get('/', (req, resp) => { //grab all communities
    database.query('SELECT * FROM communities', (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    }); 
});

router.get('/getMembers/:communityID', (req, resp) => { //grab all members of a community
    const communityID = req.params.communityID;
    database.query('SELECT memberID FROM members WHERE communityID = ?', [communityID], (err, res) => {
        if (err){
            return resp.status(500).json({ error: err.message });
        }
        resp.json(res);
    });
});

module.exports = router;