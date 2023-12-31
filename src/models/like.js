const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    onModel: {
        type: String,
        required: true,
        enum: ['tweet', 'comment']
    },

    likeable: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'onModel'
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;