var mongoose = require('mongoose');

// Set mongoose to use built in Promise rather than any other Promise library
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.export = {
    mongoose
}