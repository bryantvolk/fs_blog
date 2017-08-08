var express = require('express');
var router = express.Router();

var Post = require('../../models/posts');

// get all posts
router.route('/')
  .get(function(req, res, next) {
    Post.findAsync({}, null, {sort: {"_id":1}})
    .then(function(posts) {
      res.json(posts);
    })
    .catch(next)
    .error(console.error);
  })
  .post(function(req, res, next) {
    var post = new Post();
    post.author = req.body.author;
    post.title = req.body.title;
    post.text = req.body.text;
    post.date = new Date();
    post.saveAsync()
    .then(function(post) {
      console.log('success');
      res.json({'status': 'success', 'post':post});
    })
    .catch(function(e){
      console.log('failure');
      res.json({'status': 'error', 'error':e});
    })
    .error(console.error);
  });
router.route('/:id')
  .get(function(req, res, next) {
    Post.findOneAsync({_id: req.params.id})
    .then(function(post) {
      res.json(post);
    })
    .catch(next)
    .error(console.error)
  })
  .put(function(req, res, next) {
    var post = {};
    var prop;
    for (prop in req.body) {
      post[prop] = req.body[prop];
    }
    Post.updateAsync({_id: req.params.id}, post)
    .then(function(updatedPost) {
      return res.json({'status':'success', 'post':updatedPost});
    })
    .catch(function(e) {
      return res.status(400).json({'status':'fail', 'error':e});
    });
  })
  .delete(function(req, res, next) {
    Post.findByIdAndRemoveAsync(req.params.id)
    .then(function(deletedPost) {
      res.json({'status': 'success', 'post': deletedPost});
    })
    .catch(function(e) {
      res.status(400).json({'status':'fail', 'error':e});
    });
  });
  
  module.exports = router;