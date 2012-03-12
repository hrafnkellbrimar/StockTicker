(function() {

  $(document).ready(function() {
    var drugViewModel;
    drugViewModel = (function() {

      function drugViewModel() {}

      drugViewModel.nafn = now.name;

      drugViewModel.drugTypes = ko.observableArray(["hass", "LSD"]);


    })();
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
    now.name = prompt("What's your name?", "");
    return ko.applyBindings(new drugViewModel());
  });

}).call(this);
