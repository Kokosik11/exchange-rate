require('dotenv').config();

const express = require('express');
const http = require('http');
const nodeFetch = require("node-fetch");

const app = express();
const server = http.createServer(app);
const PORT: Number = Number(process.env.PORT || 3000);

app.use(express.static('public'));

app.get("/rate", (req: any, res: any) => {
    nodeFetch(process.env.REQUEST_URL, {
        method: 'GET',
    })
        .then((res: any) => res.text())
        .then((body: any) => {
            res.send(JSON.parse(body));
        });
})

app.get("/", (req: any, res: any) => {
    res.sendFile(__dirname + "./public/index.html");
})

server.listen(PORT, () => {
    console.log(`Server started on http://localhost:${process.env.PORT || PORT}/`)
})