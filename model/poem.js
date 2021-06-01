let mongoose = require('mongoose');

//Creates a Schema.

let poemSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    body: {
        type: String, 
        required: true
    }
});

let Poem = module.exports = mongoose.model('Poem', poemSchema);