var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
    name: String,
}, {timestamps: true});

var Person = mongoose.model("Person", personSchema);