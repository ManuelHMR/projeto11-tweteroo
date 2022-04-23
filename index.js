import express from "express";
import cors from "cors";

const app =  express();
app.use(cors());
app.use(express.json())
app.listen(5000);

let users = [];

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    users.push({username, avatar})
    res.send("ok")
});