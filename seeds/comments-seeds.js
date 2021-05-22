const Comments = require('../models/Comments');

const commentData = [
    {
        userPostID: 1,
        commentUserID: 2,
        commentText: "test comment to see if things work"
    }
]

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;