//here we load the modules that we reated on the server.js page
var Task = require('./controllers/task.js');

module.exports = function (app) {
    //GET '/' will serve up the full collection of tasks
    app.get('/', function(req, res){
        Task.get_tasks(req,res);
    });

    //GET '/new/:name/' will add a new objective to the database.
    app.get('/new/:objective', function(req, res){
       Task.add_task(req,res);
    });

    //GET '/remove/:name/' will delete a name from the database.
    app.get('/remove/:objective', function(req,res){
        Task.remove_task(req,res);
    });

    //GET '/:objective' will bring up the document of that particular task.
    app.get('/:objective', function(req, res){
        Task.get_one_task(req, res);
    });
}
