const { TweetRepository, HashtagRepository } = require("../repository/index");

class TweetService{
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9]+/g)
                        .map((tag) => tag.substring(1))
                        .map((tag) => tag.toLowerCase());
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresentTags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]};
        });
        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id)
        })
        await tweet.save();
        return tweet;
    }
}

module.exports = TweetService;