"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const PORT = 4200;
app.get('/', (req, res) => {
    res.send('Welcome to Buganda Yiyo, Buganda Yange server!');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
