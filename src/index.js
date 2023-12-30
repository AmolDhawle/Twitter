const express = require("express");

const app = express();
const  connect = require("./config/database");
const TweetRepository = require("./repository/tweetRepository");
const Comment = require("./models/comment");

const {PORT} = require("./config/serverConfig");

app.listen(PORT, async () => {
    console.log(`Server started at PORT ${PORT}`);
    await connect();
    console.log("MongoDB connected");
    // const tweet = await Tweet.create({
    //     content: "Hi this is my first tweet",
    //     userEmail: "admin@gmail.com"
    // });
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({content: "tweet with hooks"});
    console.log(tweet);
}) 