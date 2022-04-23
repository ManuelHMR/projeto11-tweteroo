import express from "express";
import cors from "cors";

const app =  express();
app.use(cors());
app.use(express.json())
app.listen(5000);

let user = {};
let users = [];
let tweets = [];

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    users.push({username, avatar})
    user = {username, avatar};
    res.send("ok")
});

app.get("/tweets", (req, res) => {
    res.send(tweets)
});

app.post("/tweets", (req, res) => {
    const {avatar} = user;
    const {username, tweet} = req.body;
    tweets.push({username, avatar,tweet})
    res.send("ok")
});