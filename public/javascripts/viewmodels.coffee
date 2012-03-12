$(document).ready ->
  drugViewModel = ->
    @nafn = now.name
    @drugTypes = ko.observableArray([ birtahassverd, "LSD" ])
    return
  drugPrices = []
  drugPrices["hass"] = hassverd
  drugPrices["LSD"] = lsdverd
  
  now.receiveMessage = (name, message) ->
    $("#messages").append "<br>" + name + ": " + message

  $("#send-button").click ->
    now.distributeMessage $("#text-input").val()
    $("#text-input").val ""

  $(".change").click ->
    now.changeRoom $(this).text()
  
  hassverd = 4
  lsdverd = 6
  
  birtahassverd = "hass: kr. " + hassverd
    
  now.changeRoom $(this).text()

  now.name = prompt("What's your name?", "")
  ko.applyBindings new drugViewModel()
