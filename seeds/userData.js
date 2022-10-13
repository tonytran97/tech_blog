const { User } = require('../models');

// sample user data for testing
const userData = [
    {username: 'UserOne', password: 'password1'},
    {username: 'UserTwo', password: 'password2'},
    {username: 'UserThree', password: 'password3'},
];

// this allows for the hashing of our seeded passwords to allow us to login later
const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUsers;