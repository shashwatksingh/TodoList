//model for the database of Personal todolist
//requiring mongoose
const mongoose = require('mongoose');
//declaring schema for the database 
//every field is required for the list to function normally
const todolistsSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    worktype:{
        type : String,
        required : true
    } ,
    date:{
        type : Date,
        required : true
    }
});
const TodoLists = mongoose.model('TodoLists',todolistsSchema);
module.exports = TodoLists;