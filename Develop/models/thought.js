const mongoose = require('mongoose')
const dayjs = require('dayjs')

const reactionSchema = mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
     },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (dateValue) => {
              return dayjs(dateValue).format('MMM D, YYYY, h:mm a')
          }
     }
})

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
        username: 
            {
                type: String,
                required: true
            },
        reactions: [reactionSchema]
    }

)

thoughtSchema.virtual('reactionCount').get(() => {
    return this.reactions.length
})

    
const Thought = mongoose.model('Thought', thoughtSchema) 

module.exports = Thought;