//requiring express for obvious reasons
const express = require('express');
const port = process.env.PORT || 3000; // port is 880 for now
const app =express(); //creating app
//firing up mongoose and mongodb
const db = require ('./config/mongoose');
//requiring models
const TodoLists = require('./models/TodoLists');

/*app.get('/',function (req,res){
    res.send('To-do list server up and running');
});*/
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//requiring static files from the assets through middleware
app.use(express.static('assets'));
//setting up ejs view engine
app.set('view engine' , 'ejs');
//now setting up views
app.set('views', './views');
//router middleware
app.use(express.urlencoded({extended : true}));
//now requiring routes folder to access the controllers
app.use('/', require('./routes'));
//listening and checking the port
app.listen(port, (err) => {
    if(err){
        console.log(`Error in creating a server ${err}`);
    }
    else{
        console.log(`Server up and running on port: ${port}`);
    }    
});
