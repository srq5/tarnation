let mongoose = require('mongoose');

//Here, I create the "article" schema.
let articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

let Article = module.exports = mongoose.model('Article', articleSchema);