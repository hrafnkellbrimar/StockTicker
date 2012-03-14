$(document).ready ->
  now.name = prompt("What's your name?", "")
  drug = (type) ->
    type: ko.observable(type)
  drugViewModel = ->
    @nafn = now.name
    @drugs = ko.observableArray([ new drug("hass"), new drug("LSD") ])
    return

  now.receiveMessage = (name, message) ->
    $("#messages").append "<br>" + name + ": " + message

  $("#send-button").click ->
    now.distributeMessage $("#text-input").val()
    $("#text-input").val ""
  $(".change").click ->
    now.changeRoom $(this).text()

    now.changeRoom $(this).text()
    ko.applyBindings new drugViewModel()
