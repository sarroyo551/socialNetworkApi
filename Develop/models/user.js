class User extends Model {}

User.init(
    {
        userName: {
            type: DataTypes.string,
            //unique
            //required
            //trimmed
        },
        email: {
            type: DataTypes.string,
            //required
            //unique
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