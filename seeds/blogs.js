const { Blogs } = require('../models');

// sample blog posts for testing
const blogPosts = [
    {title: 'Blog Test 1', snippet: "This is blog test 1"},
    {title: 'Blog Test 2', snippet: "This is blog test 2"},
    {title: 'Blog Test 3', snippet: "This is blog test 3"},
];

const seedBlogs = () => Blogs.bulkCreate(blogPosts);

module.exports = seedBlogs;