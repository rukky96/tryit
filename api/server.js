const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, '../public')));


app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'home.html'));
})

app.listen(port, () => {
    console.log("Server is running");
})

module.exports = app;


