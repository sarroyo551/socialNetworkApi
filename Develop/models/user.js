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
        thoughts: {
            // Array of _id values referencing the Thought model
        },
        friends: {
            //array of id values referencing the User model (self reference)
        }
    }

)

    
