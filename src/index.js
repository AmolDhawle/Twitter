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
        const tweets = await tweetRepo.getAll(0, 10);
        // const user = await userRepo.create({
        //     email: 'Achal@gmail.com',
        //     password: 'ACHAL0407',
        //     name: 'Achal'
        // });
        const users = await userRepo.getAll();

        // if (tweets.length === 0) {
        //     console.error("No tweets found in the database.");
        //     return;
        // }

        // if (users.length === 0) {
        //     console.error("No users found in the database.");
        //     return;
        // }

        const likeService = new LikeService();
        await likeService.toggleLike(tweets[0].id, 'Tweet', users[0].id);
});
