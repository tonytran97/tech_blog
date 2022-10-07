const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedBlogs(); 

    process.exit(0);
  };
  
  seedAll();