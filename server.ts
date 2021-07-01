require('dotenv').config();

const express = require('express');
const http = require('http');
const nodeFetch = require("node-fetch");

const app = express();
const server = http.createServer(app);
const PORT: Number = Number(process.env.PORT || 5000);
const REQUEST_URL = "https://www.nbrb.by/api/exrates/rates?periodicity=0";

app.use(express.static('public'));


app.get("/rates", (req: Express.Request, res: any) => {
    nodeFetch(process.env.REQUEST_URL || REQUEST_URL, {
        method: 'GET',
    })
        .then((res: any) => res.text())
        .then((body: any) => {
            res.send(JSON.parse(body));
        });
})

app.get("/", (req: Express.Request, res: any) => {
    res.sendFile!(__dirname + "./public/index.html");
})

server.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/`)
})