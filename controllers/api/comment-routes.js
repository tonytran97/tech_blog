const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE comment
router.post('/', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comments.create({
      content: req.body.content,
      user_id: req.session.user_id,
      blog_id: req.body.blog_id,
    });
console.log(dbCommentData);
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbCommentData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;