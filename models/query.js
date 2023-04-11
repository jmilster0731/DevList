const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String,
    contentImg: {
        type: String
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


const querySchema = new Schema({
    title: {
        type: String
    },
    language: {
        type: String
    },
    contentImg: {
        type: String
    },
    content: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String,
    responses: [responseSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Query', querySchema)