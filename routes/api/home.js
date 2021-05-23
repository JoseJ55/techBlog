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
        res.render('home', {posts, loggedIn: req.session.loggedIn,});
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', (req,res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
})

router.post('/', async (req, res) => {
    try{
        console.log(req.body)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                userName: req.body.userName,
            },
        });

        if(!userData) {
            res.status(400).json({message: "Incorrect username or password"})
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password)

        if(!validPassword) {
            res.status(400).json({message: "Incorrect username or password"})
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json({user: userData, message: "You are logged in"})
            
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router; 