var mongoose = require('mongoose');

// Set mongoose to use built in Promise rather than any other Promise library
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.export = {
    mongoose
}