const mongoose = require('mongoose'); //require the library
mongoose.connect('mongodb://localhost/to_do_list_db'); //connectinf mongoose to the database
const db =mongoose.connection;
//Event driven if the mongo connection gets error
db.on('error', console.error.bind(console,"connection error to DB"));
db.once('open',()=> {
    console.log("Setup the Mongo Database");
});