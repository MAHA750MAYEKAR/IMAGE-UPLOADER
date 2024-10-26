import express from "express";
import DBconnect from "./config/DBconfig.js";
const PORT = 8000;
const APP = express();

APP.get("/", (req, res) => {
    res.send("ITS HOME PAGE");
});

APP.get("/ping", (req, res) => {
    res.json({ "message": "its ping" });
});

APP.listen(PORT, () => {
    console.log('LISTENING ON PORT', PORT);
    DBconnect()
});
