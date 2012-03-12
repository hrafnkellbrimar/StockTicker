(function() {

  $(document).ready(function() {
    var birtahassverd, drugPrices, drugViewModel, hassverd, lsdverd;
    drugViewModel = function() {
      this.nafn = now.name;
      this.drugTypes = ko.observableArray([birtahassverd, "LSD"]);
    };
    drugPrices = [];
    drugPrices["hass"] = hassverd;
    drugPrices["LSD"] = lsdverd;
    now.receiveMessage = function(name, message) {
      return $("#messages").append("<br>" + name + ": " + message);
    };
    $("#send-button").click(function() {
      now.distributeMessage($("#text-input").val());
      return $("#text-input").val("");
    });
    $(".change").click(function() {
      return now.changeRoom($(this).text());
    });
    hassverd = 4;
    lsdverd = 6;
    birtahassverd = "hass: kr. " + hassverd;
    now.changeRoom($(this).text());
    now.name = prompt("What's your name?", "");
    return ko.applyBindings(new drugViewModel());
  });

}).call(this);
