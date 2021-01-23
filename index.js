const express = require('express');
const port = 880;
const app =express();
//firing up mongoose and mongodb
const db = require ('./config/mongoose');
const TodoLists = require('./models/TodoLists');

/*app.get('/',function (req,res){
    res.send('To-do list server up and running');
});*/
app.use(express.static('assets'));
app.set('view engine' , 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended : true}));
app.use('/', require('./routes'));
app.listen(port, (err) => {
    if(err){
        console.log(`Error in creating a server ${err}`);
    }
    else{
        console.log(`Server up and running on port: ${port}`);
    }    
});