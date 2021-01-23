const TodoLists = require('../models/TodoLists');
module.exports.home = function(req,res){
    return res.render('listview',{
        title: "Landing Page",
        message: "Succesfully set up the Home page via MVC"
    });
}
module.exports.createLog = async function(req,res){
    const post = new TodoLists({
        name: req.body.description,
        worktype: req.body.category,
        date: req.body.duedate
    });
    const savelog = await post.save();
    return res.redirect('back');
}