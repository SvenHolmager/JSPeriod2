const mongoose = require('mongoose');
const dbURI = "mongodb://Admin:1234@ds111390.mlab.com:11390/miniproject";

function setDbUri(uri){
    dbURI = uri;
}

function connect() {
    return mongoose.connect(dbUri);
}

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
}); 

mongoose.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
});

module.exports = {
    setDbUri: setDbUri,
    connect: connect
}