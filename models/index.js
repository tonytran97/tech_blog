const User = require('./user');
const Blog = require('./blog');
const Comments = require('./comment');

// creating associations
// the user has many blogs
User.hasMany(Blog, {
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
});

// a blog belongs to a single user
Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// a blog has many comments
Blog.hasMany(Comments, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

// a comment belongs to a single blog
Comments.belongsTo(Blog, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

// linking the user to the comment, to see who posts what
User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// a comment belongs to a single user
Comments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Blog, Comments };