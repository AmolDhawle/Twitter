const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
}, {timestamps: true});

tweetSchema.virtual('contentWithEmail').get(function process(){
    return `${this.content} \nCreated by: ${this.userEmail}`;
});

tweetSchema.post('save', function( next) {
    console.log("Using pre hook");
    this.content = this.content + "...";
    next()
})

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;