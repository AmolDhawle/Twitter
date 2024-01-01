const { TweetRepository, LikeRepository } = require("../repository/index");

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId) {
        console.log(modelId)
        if (modelType === 'Tweet') {
            var likeable = await this.tweetRepository.find(modelId);
            console.log(likeable);
        } else if (modelType === 'Comment') {
            throw new Error("Not implemented");
        } else {
            throw new Error("Unknown model type");
        }
    
        if (!likeable) {
            console.error(`No ${modelType} found with id ${modelId}`);
            return false;
        }
    
        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
    
        if (exists) {
            likeable.likes.pull(exists  .id);
            await likeable.save();
            await exists.deleteOne();
            console.log("Like removed");
            return false; 
        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            console.log("Like added");  
            return true; // Like added
        }
    }
}    

module.exports = LikeService;
