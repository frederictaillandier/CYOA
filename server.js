'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello les pds\n');
});

app.listen(PORT, HOST);
console.log(`Running on ta mere en slip http://${HOST}:${PORT}`);