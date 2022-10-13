const { Blog } = require('../models');

// sample blog posts for testing
const blogPosts = [
    {title: 'Blog Test 1', snippet: "This is blog test 1", post_date: 'October 10, 2021', user_id: 1},
    {title: 'Blog Test 2', snippet: "This is blog test 2", post_date: 'October 11, 2021', user_id: 2},
    {title: 'Blog Test 3', snippet: "This is blog test 3", post_date: 'October 12, 2021', user_id: 3},
];

const seedBlogs = () => Blog.bulkCreate(blogPosts);

module.exports = seedBlogs;