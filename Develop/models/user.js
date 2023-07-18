const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: (string) => {
                    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(string)
                }
            }
            //must match a valid email address (look into mongoose matching validation)
        },
        thoughts: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            }
        ]
    }

)

userSchema.virtual('friendCount').get(() => {
    return this.friends.length
})

    
const User = mongoose.model('User', userSchema) 

module.exports = User;