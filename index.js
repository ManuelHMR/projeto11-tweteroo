import express from "express";
import cors from "cors";

const app =  express();
app.use(cors());
app.use(express.json())
app.listen(5000);

let user = {};
let users = [];
let tweets = [];
const LIMIT = 10;

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    if(username && avatar){
        users.push({username, avatar})
        user = {avatar};
        res.status(201).send("ok")
    }
    else{
        res.status(400).send("Todos os campos são obrigatórios!")
    }
});

app.get("/tweets", (req, res) => {
    const page = req.query.page;
    const startIndex = (page - 1) * LIMIT;
    const endIndex = (page) * LIMIT;
    const resultTweets = tweets.slice(startIndex, endIndex);
    res.send(resultTweets);
});

app.post("/tweets", (req, res) => {
    const {avatar} = user;
    const {tweet} = req.body;
    const username = req.headers.user;
    if(username && tweet){
        tweets.push({username, avatar,tweet})
        res.status(201).send("ok")
    }
    else{
        res.status(400).send("Todos os campos são obrigatórios!")
    } 
});

app.get("/tweets/:userID", (req, res) => {
    let id = req.params.userID;
    res.send(tweets.filter(tweet => tweet.username === id))
});