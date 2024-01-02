const express = require("express");
const bodyParser = require("body-parser");

const  connect = require("./config/database");
const {PORT} = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
const { UserRepository, TweetRepository } = require("./repository/index");
const LikeService = require("./services/like-service")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(PORT, async () => {
    console.log(`Server started at PORT ${PORT}`);
    await connect();
    console.log("MongoDB connected");

        const userRepo = new UserRepository();
        const tweetRepo = new TweetRepository();
        const users = await userRepo.getAll();

});
