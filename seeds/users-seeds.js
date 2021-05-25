const User = require('../models/User');

const userData = [
    {
        userName: "testuser",
        password: "1234567"
    }
]

const seeduser = () => User.bulkCreate(userData);

module.exports = seeduser;