import express from "express";

const app =  express();
app.listen(5000)

app.post("/sign-up", (req, res) => {
    
    res.send("OK")
});