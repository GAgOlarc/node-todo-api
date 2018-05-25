const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const localDb = 'mongodb://localhost:27017/TodoApp';
const cloudDb = 'mongodb://andrew:password@ds135290.mlab.com:35290/todoapp';
const dbPort = process.env.NODE_ENV === 'development' ? localDb : cloudDb;
mongoose.connect(dbPort);

module.exports = {mongoose};