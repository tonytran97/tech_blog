const { User } = require('../models');

// sample user data for testing
const userData = [
    {username: 'UserOne', password: 'password1'},
    {username: 'UserTwo', password: 'password2'},
    {username: 'UserThree', password: 'password3'},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;