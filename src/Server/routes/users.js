const express = require("express");
const router = express.Router();
const database = require("../Server.js");

router.get('/', (req, resp) => {
    database.query('SELECT * FROM USERS', (err, res) => {
        if (err){
            return resp.serverStatus(500);
        }
        resp.json(res);
    });
});

module.exports = router;