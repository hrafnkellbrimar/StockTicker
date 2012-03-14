$(document).ready ->
  now.name = prompt("What's your name?", "")
  drugViewModel ->  
    class Drug
      constructor: (@name) ->
      price: (dollars) ->
        alert @name + " costs #{dollars}"
      status: (status) ->
        alert @name + " has status #{status}"
    class Cocaine extends Drug
      price: ->
        alert "Cocaine price"
        super 5
      status: ->
        alert "Cocaine status"
        super "up"
    class Lsd extends Drug
      price: ->
        alert "LSD price"
        super 4
      status: ->
        alert "LSD status"
        super "up"
    class Crack extends Drug
      price: ->
        alert "Crack price"
        super 1
      status: ->
        alert "Crack status"
        super "down"
    coke = new Cocaine "Cocaine"
    lsd = new Lsd "LSD"
    crack = new Crack "Crack"   
  ko.applyBindings new drugViewModel()    
    
  now.receiveMessage = (name, message) ->
    $("#messages").append "<br>" + name + ": " + message

  $("#send-button").click ->
    now.distributeMessage $("#text-input").val()
    $("#text-input").val ""

  $(".change").click ->
    now.changeRoom $(this).text()
