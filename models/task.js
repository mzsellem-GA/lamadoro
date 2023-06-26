const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Task', taskSchema)