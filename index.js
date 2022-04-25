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
    res.send(tweets)
});

app.post("/tweets", (req, res) => {
    const {avatar} = user;
    const {tweet} = req.body;
    const username = req.headers.user;
    if(username && tweet){
        tweets.push({username, avatar,tweet})
        if(tweets.length > 10){
            tweets.shift()
        }
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