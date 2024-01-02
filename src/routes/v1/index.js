const express = require("express");

const {createTweet, getTweet} = require("../../controllers/tweet-controller");
const {toggleLike} = require("../../controllers/like-controller");
const {createComment} = require("../../controllers/comment-controller");

const router = express.Router();

router.post('/tweets', createTweet);

router.get('/tweets/:id', getTweet);

router.post('/comments', createComment);

router.post("/likes/toggle", toggleLike);

module.exports = router; 