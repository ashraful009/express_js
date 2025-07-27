const express = require ("express")
const app = express();
const port = 8080;


app.get("/register", (res, req) => {
    res.send("Standard GET");
})

app.post("/register", (res, req) => {
    res.send("Standard POST");
})

app.listen(() => {
    console.log(`Listening to port ${port}`);
    
})