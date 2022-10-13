const router = require('express').Router();
const { Blog, User } = require('../models');

router.get('/', async (req, res) => {
    try {
    const blogPosts = await Blog.findAll({
        include: [
            {
                model: User, 
                attributes: ['username'],
            },
        ],
    }).catch((err) => {
        res.json(err);
    });
    // console.log(blogPosts);
    const blogs = blogPosts.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    res.render('homepage', { blogs });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;