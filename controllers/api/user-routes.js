const router = require('express').Router();
const { User } = require('../../models');

// login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
          where: {
            username: req.body.username,
          },
        });
console.log(dbUserData);
        if (!dbUserData) {
            res
              .status(400)
              .json({ message: 'Incorrect username or password. Please try again!' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    req.session.save(() => {
        req.session.loggedIn = true;
        console.log(
          '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
          req.session.cookie
        );
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }  
});

module.exports = router;
