//requiring todolist model
const TodoLists = require('../models/TodoLists');
//home controller to render home page with form and list on it 
module.exports.home = function(req,res){
    TodoLists.find({}, function(err,logs){
        if(err){
            console.log("Error in fetching contacts from the user");
            return;
        }
        return res.render('listview',{
            title: "Landing Page",
            message: "Personal To-do List",
            Logs : logs
        });
    });
    
}
//createLog controller for creating and saving a new entry to the database
module.exports.createLog = async function(req,res){
    try{
        const post = new TodoLists({
            name: req.body.description,
            worktype: req.body.category,
            date: req.body.duedate
        });
        await post.save();
    } catch{
        return res.redirect("/");
    }
    
    return res.redirect('back');
}
//deleteLog controller for deleting a new entry from the database
module.exports.deletelogs = function(req,res){
    let arrid  = req.query.id;
    if(!Array.isArray(arrid)){
        deleteById(arrid);
    } else{
        for (i of arrid){
            deleteById(i);  
        }
    }
    return res.redirect('back');
}
function deleteById(i){
    TodoLists.findByIdAndDelete(i, (err) => {
        if(err){
            console.log("Error in deleting an object in the database");
            return;
        }
    });
}  
       

