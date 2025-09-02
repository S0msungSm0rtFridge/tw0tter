const express = require("express");
const cors = require("cors");
const mysql2 = require("mysql2");
const database = require("../../Server/db.js");

const app = express(); //create express framework
app.use(cors()); //use cors to link front-end
app.use(express.json());

app.use('/api/users', require("./routes/users.js"));
app.use('/api/communities', require("./routes/communities.js"));
app.use('/api/posts', require('./routes/posts.js'));
app.use('/api/replies', require('./routes/replies.js'));

app.listen(3000, () => {
    console.log("Server runnning on http://localhost:3000");
});

