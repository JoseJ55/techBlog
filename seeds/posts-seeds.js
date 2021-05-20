const Post = require('../models/Posts');

const postData = [
    {
        userName: "testuser",
        title: "New robots",
        content: "New robots that can help everyone.",
        dateMade: "04-21-2021",
    },
    {
        userName: "user2",
        title: "new drones",
        content: "New dronek are out",
        dateMade: "04-23-2021",
    }
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;