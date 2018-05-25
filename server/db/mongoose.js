const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://andrew:0!OE%us8H2@i@ds135290.mlab.com:35290/todoapp' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};