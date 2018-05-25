const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const localDb = 'mongodb://localhost:27017/TodoApp';
const cloudDb = 'mongodb://andrew:0!OE%us8H2@i@ds135290.mlab.com:35290/todoapp';
const dbPort = process.env.PORT ? cloudDb : localDb;
mongoose.connect(dbPort);

module.exports = {mongoose};