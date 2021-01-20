module.exports.home = function(req,res){
    return res.render('listview',{
        title: "Landing Page",
        message: "Succesfully set up the Home page via MVC"
    });
}