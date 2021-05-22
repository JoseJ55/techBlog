const router = require('express').Router();
const Post = require('../../models/Posts');
const Comments = require('../../models/Comments');

router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll();
        const posts = postData.map((post) => post.get({plain: true}))

        // const commentData = await Comments.findAll({where: {}})
        // res.send(posts)
        // res.send('Hello')
        res.render('home', {posts});
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
    try{
        console.log(req.body)
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router; 