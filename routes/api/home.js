const router = require('express').Router();
const bcrypt = require('bcrypt');
const Post = require('../../models/Posts');
const Comments = require('../../models/Comments');
const User = require('../../models/User');

router.get('/', async (req, res) => {
    try{
        if(req.session.loggedIn){
        const postData = await Post.findAll();
        const posts = postData.map((post) => post.get({plain: true}))

        // const commentData = await Comments.findAll({where: {}})
        // res.send(posts)
        // res.send('Hello')
        res.render('home', {posts, loggedIn: req.session.loggedIn,});
        } else {
            res.redirect('/login');
        }
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

router.get('/signup', (req, res) => {
    try{
        if(req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        res.render('signup')
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

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({where: {userName: req.body.userName,}});

        if(!userData) {
            res.status(400).json({message: "Incorrect username or password"})
            return;
        }
        // need to find out why keep getting false even wtih correct password.
        // after this most of everything else should work
        const validPassword = await userData.checkPassword(req.body.password)
        // console.log(validPassword)

        if(!validPassword) {
            res.status(400).json({message: "Incorrect username or password"})
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json({user: userData, message: "You are logged in"})
            
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.post('/signup', async (req, res) => {
    try {
        // console.log(req.body.userName, await bcrypt.hash(req.body.password, 10))
        const bpass = await bcrypt.hash(req.body.password, 10)

        const newUserData = await User.create({
            userName: req.body.userName,
            password: bpass,
        })

        // req.session.save(() => {
        //     req.session.loggedIn = true;
        //     res.status(200).json(newUserData)
        // })
        res.redirect('/login')
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router; 