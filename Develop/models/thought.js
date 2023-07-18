const mongoose = require('mongoose')
const dayjs = require('dayjs')

const thoughtSchema = mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (dateValue) => {
               return dayjs(dateValue).format('MMM D, YYYY, h:mm a')
            }
        },
        username: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        reactions: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            }
        ]
    }

)

thoughtSchema.virtual('friendCount').get(() => {
    return this.friends.length
})

    
const User = mongoose.model('User', thoughtSchema) 

module.exports = User;