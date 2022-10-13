const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new post
router.post('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Blog.create({
      title: req.body.title,
      snippet: req.body.content,
      user_id: req.session.user_id,
    });
console.log(dbPostData);
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbPostData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;