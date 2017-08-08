var express = require('express');
var router = express.Router();
var Post = require('../../models/posts');

router.get('/', function(req, res, next) {
  Post.findAsync({}, null, {sort: {"_id":1}})
  .then(function(posts) {
    res.json({'posts': posts});
  })
  .catch(next)
  .error(console.error);
});
module.exports = router;