const TodoLists = require('../models/TodoLists');
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
module.exports.createLog = async function(req,res){
    try{
        const post = new TodoLists({
            name: req.body.description,
            worktype: req.body.category,
            date: req.body.duedate
        });
        await post.save();
    } catch{
        res.send("Some error!");
    }
    
    return res.redirect('back');
}
module.exports.deletelogs = function(req,res){
    let arrid  = req.query.id;
    if(!Array.isArray(arrid)){
        deleteById(arrid);
    } else{
        for (i of arrid){
            deleteById(i);  
        }
    }
    function deleteById(i){
        TodoLists.findByIdAndDelete(i, (err) => {
            if(err){
                console.log("Error in deleting an object in the database");
                return;
            }
        });
    }  
    return res.redirect('back');    
}
