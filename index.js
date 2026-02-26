const express = require('express');


const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/buyerHome.html');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

app.get('/testHTML', (req, res) => {
    res.sendFile(__dirname + '/test.html');
});