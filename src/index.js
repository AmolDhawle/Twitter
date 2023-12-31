const express = require("express");

const app = express();
const  connect = require("./config/database");
const {PORT} = require("./config/serverConfig");
const service = require("./services/tweet-service");

app.listen(PORT, async () => {
    console.log(`Server started at PORT ${PORT}`);
    await connect();
    console.log("MongoDB connected");

    let ser = new service();
    await ser.create({content: "This is a #NEW #tweet"});

}) 