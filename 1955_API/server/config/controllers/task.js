var mongoose = require('mongoose');
var Task = mongoose.model('Task');
var moment = require('moment');

module.exports = {
    get_tasks: function(req, res){
        Task.find({}, function(err, tasks){
            if (err){
                console.log(err);
            } else {
                console.log("successfully retrieved tasks");
                res.json(tasks);
            }
        });
    },
    add_task: function(req, res){
        new_task = new Task();
        new_task.objective = req.params.objective;
        new_task.save(function(err){
            if (err){
               console.log("couldn't save new task to db"); 
            } else {
                console.log("sucessfully saved task to db!");
                res.redirect(303,"/")
            }
        });
    },
    remove_task:  function(req,res){
        Task.remove({objective: req.params.objective}, function(err){
            if (err){
                console.log(err);
            } else {
                console.log("sucessfully removed task db");
                res.redirect('/');
            }
        });
    },
    get_one_task:  function(req, res){
        Task.findOne({name: req.params.objective}, function(err, task){
            if (err){
                console.log(err);
            } else {
                res.json(task);
            }
        })
    },
}