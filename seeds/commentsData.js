const { Comments } = require('../models');

// sample comment posts for testing
const commentPosts = [
    {content: 'Comment 1', user_id: 1, blog_id: 1},
    {content: 'Comment 2', user_id: 2, blog_id: 2},
    {content: 'Comment 3', user_id: 3, blog_id: 3},
];

const seedComments = () => Comments.bulkCreate(commentPosts);

module.exports = seedComments;