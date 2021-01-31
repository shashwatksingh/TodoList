const mongoose = require('mongoose'); //require the library
mongoose.connect('mongodb+srv://todolist-cluster:ELbA8auwOUPWMK07@mongodb-tasky.xmyr2.mongodb.net/todolists?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology: true}); //connectinf mongoose to the database
const db =mongoose.connection;
//Event driven if the mongo connection gets error
db.on('error', console.error.bind(console,"connection error to DB"));
db.once('open',()=> {
    console.log("Setup the Mongo Database");
});