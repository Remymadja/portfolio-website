const express = require("express");
const path = require("path");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portfolio_db"
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MySQL Connected");
    }
});

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/work", (req, res) => {
    res.sendFile(path.join(__dirname, "work.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "contact.html"));
});

// SAVE CONTACT FORM TO DATABASE
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    const sql =
        "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";

    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error saving message");
        } else {
            res.send("Message sent successfully!");
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});