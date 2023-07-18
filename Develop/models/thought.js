class Thought extends Model {}

Thought.init(
    {
        thoughtText: {
            type: dataType.string,
            //required
            //must be between 1 and 280 chars
        },
        createdAt: {
            //date
            //set default value to the current timestamnp
            //use a getter method to format the time stamp on query
        },
        username: {
            //(the user that created this thought)
            type: dataType.string,
            //required
        },
        reactions: {
            //(these are like replies)
            //array of nested documents created with the 'reactionSchema' -- do i need 2 schemas?
        }
    }
)