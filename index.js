const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug' );

//This is the route for the homepage.
app.get('/', function(req, res){

    res.render('index', {
        title: 'tarnation' 
    });
    
})

app.get('/contact', function(req, res){

    res.render('contact', {
        title: 'contact'
    })

})

const PORT = 3000;

app.listen(PORT, function(){

console.log('server started on port ' + PORT);

})