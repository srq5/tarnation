
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

//Using the mongoose ODM. Here we connect to the database created with mongoDB.
mongoose.connect('mongodb://localhost/poetry');
let db = mongoose.connection;

//To ensure we are connected to mongoDB database.
db.once('open', function () {
   console.log('Connected to mongoDB')
})

db.on('error', function (err) {
   console.log(err);
})

// Initializes application
const app = express();

//Model
let Poem = require('./model/poem')

//Sets the view engine to use pug.
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'pug')


//The static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
   Poem.find({}, function (err, poems) {
      res.render('index', {
         title: 'TARNATION',
         poems: poems
      });
   });

});

app.get('/contact', function (req, res) {
   res.render('index', {
      title: 'CONTACT'
   });
});

const PORT = process.env.PORT || 5000

app.listen(PORT, function () {
   console.log("\nSERVER RUNNING ON PORT " + PORT);
});