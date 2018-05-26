const {ObjectID} = require('mongodb'); 

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then(result => console.log(result));

Todo.findOneAndRemove({_id: '5b0931912e3f4829b0a8f51c'}).then(todo => console.log(todo));

// Todo.findByIdAndRemove('5b0931912e3f4829b0a8f51b').then(todo => console.log(todo));