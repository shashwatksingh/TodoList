const TodoLists = require('../models/TodoLists');
module.exports.home = function(req,res){
    TodoLists.find({}, function(err,logs){
        if(err){
            console.log("Error in fetching contacts from the user");
            return;
        }
        return res.render('listview',{
            title: "Landing Page",
            message: "Succesfully set up the Home page via MVC",
            Logs : logs
        });
    });
    
}
module.exports.createLog = async function(req,res){
    const post = new TodoLists({
        name: req.body.description,
        worktype: req.body.category,
        date: req.body.duedate
    });
    await post.save();
    return res.redirect('back');
}
module.exports.deletelogs = function(req,res){
    
    return res.redirect('back');    
}
