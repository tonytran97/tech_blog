const sequelize = require('../config/connection');

const seedUsers = require('./userData');
const seedBlogs = require('./blogsData');
const seedComments = require('./commentsData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();
    await seedBlogs(); 
    await seedComments();

    process.exit(0);
  };
  
  seedAll();