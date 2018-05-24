const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b06c035a6ec756f0ea3dc6e1';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// }).catch((e) => {
//     console.log(e);
// });

User.findById('5b068fb94cd1afda0b2e7bf9').then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log('User', user);
}).catch((e) => {
    console.log(e);
});