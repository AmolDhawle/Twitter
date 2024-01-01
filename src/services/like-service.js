const { TweetRepository, LikeRepository } = require("../repository/index");

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository
    }

    async toggleLike(modelId, modelType, userId) {
        if(modelType == 'Tweet') {
            var likeable = await this.tweetRepository.get(modelId).populate('likes');
        } else if(modelType == 'Comment') {

        } else {
            throw new Error("Unknown model type");
        }

        const exists =  await this.likeRepository.create({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
        if(exists) {
            likeable.this.pull(exists.id);
            await likeable.save();
            await likeable.remove();
            var isAdded = false;
        }
        else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = true;
        }
        return true;
    }
}

export default LikeService;