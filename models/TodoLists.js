const mongoose = require('mongoose');
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