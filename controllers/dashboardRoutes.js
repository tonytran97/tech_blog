const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
    const blogPosts = await Blog.findAll({
        // how do i get posts by the user id
            include: [
                {
                    model: User, 
                    attributes: ['username'],
                },
            ],
    }).catch((err) => {
        res.json(err);
    });
    const blogs = blogPosts.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    res.render('dashboard', { blogs });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;