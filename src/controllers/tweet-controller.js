const TweetService = require("../services/tweet-service");

import upload from '../config/file-upload-s3-config.js';

const singleUploader = upload.single('image');

const tweetService = new TweetService();

const createTweet = async (req, res) => {
    try {
        singleUploader(req, res, async function (err, data) {
            if(err) {
                return res.status(500).json({error: err});
            }
            console.log('Image url is', req.file);
            const payload = {...req.body};
            payload.image = req.file.location;
            const response = await tweetService.create(payload);
            return res.status(201).json({
                success: true,
                message: 'Successfully created a new tweet',
                data: response,
                err: {}
            });
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
