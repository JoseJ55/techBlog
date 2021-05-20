const router = require('express').Router();
const Post = require('../../models/Posts');

router.get('/', async (req, res) => {
    try{
        // const postData = await Post.findAll();
        // const posts = postData.map((post) => post.get({plain: true}))
        // res.send(posts)
        // res.send('Hello')
        res.render('home');
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router; 