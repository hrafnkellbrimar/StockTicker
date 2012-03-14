(function() {

  $(document).ready(function() {
    var drug, drugViewModel;
    now.name = prompt("What's your name?", "");
    drug = function(type) {
      this.type = ko.observable(type);
    };
    drugViewModel = function() {
      this.nafn = ko.observable(now.name);
      this.drugs = ko.observableArray([new drug("hass"), new drug("LSD")]);
    };
    now.receiveMessage = function(name, message) {
      $("#messages").append("<br>" + name + ": " + message);
    };
    $("#send-button").click(function() {
      now.distributeMessage($("#text-input").val());
      $("#text-input").val("");
    });
    $(".change").click(function() {
      now.changeRoom($(this).text());
      now.changeRoom($(this).text());
    });
    
    ko.applyBindings(new drugViewModel());
  });

}).call(this);
