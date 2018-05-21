const {ObjectID} = require('mongodb'); 

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// const id = '5b02dc0307eb14242c49138f11';

// Todo.find({
//     _id: id
// }).then(todos => {
//     if (todos.length === 0) {
//         return console.log('Id not found');
//     }
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then(todo => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo:', todo);
// });

// Todo.findById(id).then(todo => {
//     if (!todo) {
//         return console.log('Id not found');
//     }

//     console.log('Todo By Id:', todo);
// }).catch(err => {
//     if (!ObjectID.isValid(id)) {
//         return console.log('Invalid Object Id');
//     }
// });

const id = '5b02e8012b06e0089c8f03f5';

User.findById(id).then(user => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User:', user);
}).catch(err => console.log(err));