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
    let dicevalue = Math.floor(Math.random() * 10) + 1;
    // res.render("roleDice.ejs", {num: dicevalue});
     res.render("roleDice.ejs", {dicevalue});
})

// app.get("/ig/:username", (req, res) => {
//     const followers = ["adam", "bob", "steve", "abc"];
//     let {username} = req.params;
//     res.render("instragram.ejs", {username, followers});
// })

app.get("/ig/:username", (req, res) => {
    const {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    
    res.render("instragram.ejs", {data});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    
})