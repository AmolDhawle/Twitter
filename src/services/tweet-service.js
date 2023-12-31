const { TweetRepository, HashtagRepository } = require("../repository/index");

class TweetService{
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9]+/g).map((tag) => tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresentTags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet._id]};
        });
        const createdTags = await this.hashtagRepository.bulkCreate(newTags);
        const hashtagIds = [...alreadyPresentTags, ...createdTags].map(tag => tag._id);
        tweet.hashtags = hashtagIds;
        await tweet.save();
        return tweet;
    }
}

module.exports = TweetService;