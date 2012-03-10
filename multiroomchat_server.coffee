fs = require("fs")
server = require("http").createServer((req, response) ->
    fs.readFile __dirname + "/multiroomchat.html", (err, data) ->
        response.writeHead 200,
            "Content-Type": "text/html"	      

        response.write data
        response.end()
)
server.listen 8080
nowjs = require("now")
everyone = nowjs.initialize(server)
nowjs.on "connect", ->
    @now.room = "room 1"
    nowjs.getGroup(@now.room).addUser @user.clientId
    console.log "Joined: " + @now.name

nowjs.on "disconnect", ->
    console.log "Left: " + @now.name

everyone.now.changeRoom = (newRoom) ->
    nowjs.getGroup(@now.room).removeUser @user.clientId
    nowjs.getGroup(newRoom).addUser @user.clientId
    @now.room = newRoom
    @now.receiveMessage "SERVER", "You're now in " + @now.room

everyone.now.distributeMessage = (message) ->
    nowjs.getGroup(@now.room).now.receiveMessage @now.name, message