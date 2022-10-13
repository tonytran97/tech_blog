const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    console.log(req.session);
    try {
    const blogPosts = await Blog.findAll({
        where: {
            user_id: req.session.user_id,
        },
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

  // newPost route
  router.get('/newpost', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('addPost');
  });

module.exports = router;