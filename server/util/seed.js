var User = require('../api/user/userModel');
var Post = require('../api/post/postModel');
var Category = require('../api/category/categoryModel');
var _ = require('lodash');
var logger = require('./logger');

logger.log('Seeding the Database');

var users = [
  {username: 'Jimmylo', password: 'test'},
  {username: 'Xoko', password: 'test'},
  {username: 'katamon', password: 'test'}
];

var categories = [
  {name: 'intros'},
  {name: 'angular'},
  {name: 'UI/UX'}
];

var posts = [
  {title: 'Learn angular 2 today', text: 'Angular to is so dope'},
  {title: '10 reasons you should love IE7', text: 'IE7 is so amazing'},
  {title: 'Why we switched to Go', text: 'go is dope'}
];

var createDoc = function(model, doc) {
  return new Promise(function(resolve, reject) {
    new model(doc).save(function(err, saved) {
      return err ? reject(err) : resolve(saved);
    });
  });
};

var cleanDB = function() {
  logger.log('... cleaning the DB');
  var cleanPromises = [User, Category, Post]
    .map(function(model) {
      return model.remove().exec();
    });
  return Promise.all(cleanPromises);
}

var createUsers = function(data) {

  var promises = users.map(function(user) {
    return createDoc(User, user);
  });

  return Promise.all(promises)
    .then(function(users) {
      return _.merge({users: users}, data || {});
    });
};

var createCategories = function(data) {
  var promises = categories.map(function(category) {
    return createDoc(Category, category);
  });

  return Promise.all(promises)
    .then(function(categories) {
      return _.merge({categories: categories}, data || {});
    });
};

var createPosts = function(data) {
  var addCategory = function(post, category) {
    post.categories.push(category);

    return new Promise(function(resolve, reject) {
      post.save(function(err, saved) {
        return err ? reject(err) : resolve(saved)
      });
    });
  };

  var newPosts = posts.map(function(post, i) {
    post.author = data.users[i]._id;
    return createDoc(Post, post);
  });

  return Promise.all(newPosts)
    .then(function(savedPosts) {
      return Promise.all(savedPosts.map(function(post, i){
        return addCategory(post, data.categories[i])
      }));
    })
    .then(function() {
      return 'Seeded DB with 3 Posts, 3 Users, 3 Categories';
    });
};

cleanDB()
  .then(createUsers)
  .then(createCategories)
  .then(createPosts)
  .then(logger.log.bind(logger))
  .catch(logger.log.bind(logger));
