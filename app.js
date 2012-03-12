/**
 * Module dependencies.
 */

var express = require('express')
var routes = require('./routes');
var app = module.exports = express.createServer();
var nowjs = require("now");
var everyone = nowjs.initialize(app);

nowjs.on('connect', function(){
    this.now.room = "room 1";
    nowjs.getGroup(this.now.room).addUser(this.user.clientId);
    console.log("Joined: " + this.now.name);
});


nowjs.on('disconnect', function(){
    console.log("Left: " + this.now.name);
});

everyone.now.changeRoom = function(newRoom){
    nowjs.getGroup(this.now.room).removeUser(this.user.clientId);
    nowjs.getGroup(newRoom).addUser(this.user.clientId);
    this.now.room = newRoom;
    //this.now.receiveMessage("SERVER", "You're now in " + this.now.room);
}

everyone.now.distributeMessage = function(message){
    nowjs.getGroup(this.now.room).now.receiveMessage(this.now.name, message);
};


/*
everyone.now.distribute = function(message){
    // this.now exposes caller's scope
    everyone.now.receive(this.now.name, message);
};
*/


// Configuration

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
