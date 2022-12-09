import express from 'express';
import path from 'path';
import cors from 'cors';    
console.log("hello World");
// const express = require('express')
const app = express()
const port = process.env.PORT || 5001


app.use(cors());
app.get('/abc', (req, res) => {
    res.send('Hello World! abc')
})

app.get('/time', (req, res) => {
    res.send(new Date().toString());
})

app.get('/weather/:cityName', (req, res) => {
    res.send({
        cityName: req.params.cityName,
        temp: 30,
        wind: 18 +"km/h",
        humidity: 30+"%"
    });
})

const __dirname = path.resolve();

app.use('/', express.static(path.join(__dirname, './my-weather/build')))
app.use('*', express.static(path.join(__dirname, './my-weather/build')))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})