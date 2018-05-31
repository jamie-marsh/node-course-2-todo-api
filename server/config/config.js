var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    // When requiring a json file, it is automatically parsed to a JS object
    var config = require('./config.json');
    var envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
}