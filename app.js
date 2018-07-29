const express = require('express');
const cron = require('./schedule');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to cron Jobs');
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started");
});
