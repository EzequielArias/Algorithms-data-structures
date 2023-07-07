"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const PORT = 8080;
app.get('/', (req, res) => {
    res.json('Hola mundo');
});
app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
});
//# sourceMappingURL=main.js.map