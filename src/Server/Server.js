const express = require("express");
const cors = require("cors");
const mysql2 = require("mysql2");

const app = express(); //create express framework
app.use(cors()); //use cors to link front-end
app.use(express.json());

const database = mysql2.createConnection({ //create connection to database
    host: "localhost",
    user: "root",
    password: "password",
    database: "tw0tter"
});



app.use('/api/users', require("./routes/users.js"));
app.use('/api/communities', require("./routes/communities.js"));
app.use('/api/posts', require('./routes/posts.js'));
app.use('/api/replies', require('./routes/replies.js'));

module.exports = { database, app }; //export database and app

app.listen(3000, () => {
    console.log("Server runnning on http://localhost:3000");
});

