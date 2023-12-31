const express = require("express");

const app = express();
const  connect = require("./config/database");
const {TweetRepository} = require("./repository/index");
const TweetService = require("./services/tweet-service");
const {PORT} = require("./config/serverConfig");

app.listen(PORT, async () => {
    console.log(`Server started at PORT ${PORT}`);
    await connect();
    console.log("MongoDB connected");
    let service = new TweetService();
    const tweet = await service.create({content: "my #working twitter"});
    console.log(tweet);
}) 