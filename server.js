const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portfolio_db"
});

db.connect(err => {
    if (err) console.log(err);
    else console.log("MySQL Connected");
});

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    const sql =
        "INSERT INTO messages (name,email,message) VALUES (?,?,?)";

    db.query(sql, [name, email, message], (err) => {
        if (err) res.status(500).send(err);
        else res.send("Message saved!");
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});