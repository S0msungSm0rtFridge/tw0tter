const express = require("express");
const cors = require("cors");
const mysql2 = require("mysql2");

const database = mysql2.createConnection({ //create connection to database
    host: "localhost",
    user: "root",
    password: "password",
    database: "tw0tter"
});

module.exports = database;