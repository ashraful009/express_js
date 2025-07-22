const express = require("express")
const app = express();

const path = require("path");

const port = 8080;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/roledice", (req, res) => {
    let dicevalue = Math.floor(Math.random() * 6) + 1;
    // res.render("roleDice.ejs", {num: dicevalue});
     res.render("roleDice.ejs", {dicevalue});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    
})