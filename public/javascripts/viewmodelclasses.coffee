$(document).ready ->
  class drugViewModel
    @nafn = now.name
    @drugTypes = ko.observableArray([ "hass", "LSD" ])
  now.receiveMessage = (name, message) ->
    $("#messages").append "<br>" + name + ": " + message

  $("#send-button").click ->
    now.distributeMessage $("#text-input").val()
    $("#text-input").val ""

  $(".change").click ->
    now.changeRoom $(this).text()

  now.name = prompt("What's your name?", "")
  ko.applyBindings new drugViewModel()
