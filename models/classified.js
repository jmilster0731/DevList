const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classifiedSchema = new Schema({
    title: {
        type: String
    },
    language: {
        type: String
    },
    contentSum: {
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
}, {
    timestamps: true
})

module.exports = mongoose.model('Classified', classifiedSchema)