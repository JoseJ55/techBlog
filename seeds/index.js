const seedPost = require("./posts-seeds");
const seedComments = require('./comments-seeds');
const seedUser = require('./users-seeds');
const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({force: true});
    
    await seedPost();

    await seedComments();

    await seedUser();

    process.exit(0);
}

seedAll();