// importing required packages
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// setting up connections to sequelize
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

require('dotenv').config();

// setting up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// creating the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({ helpers });

// setting up sessions w/ cookies
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// informs Express.js which template engine to use (Handlebars)
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turns on routes accessed through controllers
app.use(routes);

// turns on the connection to our blog_db and the server
// force false so then our table doesn't get dropped and recreated w/ every sync
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening, running on port ${PORT}`));
});
