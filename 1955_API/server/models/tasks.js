var mongoose = require("mongoose")

var tasksSchema = new mongoose.Schema({
    objective: String,
}, {timestamps: true});

var Task = mongoose.model("Task", tasksSchema)