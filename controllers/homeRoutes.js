const router = require('express').Router();

router.get('/', (req, res) => {
    try {
    console.log('request received');
    res.render('homepage');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;