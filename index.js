//Here we are setting various node modules into variables.

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

//Here I am connecting to the mongodb database.
mongoose.connect('mongodb://localhost:3000/tarnation');

let db = mongoose.connection;

//I am checking the connection to the MongoDB database.
db.once('open', function () {

    console.log('connected to the MongoDB database.')

});

//Here, I am checking for any database errors.
db.on('error', function (err) {
    console.log(err);
});


//This initializes the application with Express.
const app = express();

//This brings in the "Article" model.
let Article = require('./model/article');


//This sets the templating engine to Pug.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//This is the route for the homepage.
app.get('/', function (req, res) {
    Article.find({}, function (err, articleResponse) {
        if (err) {
            console.log(err);
        } else {
            res.render('index', {
                title: 'tarnation',
                articles: articleResponse
            });
        }

    })


})
//This is the route for the contact page.
app.get('/contact', function (req, res) {
    ;
    res.render('contact', {
        title: 'contact'
    })

})

//This sets the server to port 3000.
const PORT = 3000;

app.listen(PORT, function () {

    console.log('server started on port ' + PORT);

})