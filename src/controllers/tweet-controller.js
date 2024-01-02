const TweetService = require("../services/tweet-service");

const tweetService = new TweetService();

const createTweet = async (req, res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Successfully created a new tweet",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            message: "Something went wrong",
            err: error
        });
    }
};

const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Successfully fetched a new comment",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            message: "Something went wrong",
            err: error.message
        });
    }
};

module.exports = { createTweet, getTweet };
