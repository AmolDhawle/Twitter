const express = require("express");

const {createTweet, getTweet} = require("../../controllers/tweet-controller");
const {toggleLike} = require("../../controllers/like-controller");
const {createComment} = require("../../controllers/comment-controller");
const { signup } = require("../../controllers/auth-controller");

const router = express.Router();

router.post('/tweets', createTweet);

router.get('/tweets/:id', getTweet);

router.post('/comments', createComment);

router.post("/likes/toggle", toggleLike);

router.post("/signup", signup);

module.exports = router; 