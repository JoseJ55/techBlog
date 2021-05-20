const seedPost = require("./posts-seeds");

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({force: true});
    
    await seedPost();

    process.exit(0);
}

seedAll();