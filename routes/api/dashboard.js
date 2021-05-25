const router = require('express').Router();

router.get('/', async (req, res) => {
    try{
        if(!req.session.loggedIn) {
            res.redirect('/login');
            return;
        }else {
            res.render('dashboard');  
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;