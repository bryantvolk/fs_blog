'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);
var PostsSchema = new Schema({
  author: {type: 'String', required: true},
  title: {type: 'String', required: true},
  text: {type: 'String', required: true},
  date: Date
});

module.exports = mongoose.model('Post', PostsSchema);