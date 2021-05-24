  
const express = require('express');
const path = require('path');

// Initializes application
const app = express();

//Sets the view engine to use pug.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')


//The static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
   res.render('index', {
      title: 'TARNATION'
   });
});

const PORT = process.env.PORT || 5000

app.listen(PORT, function(){
   console.log("\nSERVER RUNNING ON PORT " + PORT); 
});