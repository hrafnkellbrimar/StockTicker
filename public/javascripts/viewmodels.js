(function() {

  $(document).ready(function() {
    var drug, drugViewModel;
    now.name = prompt("What's your name?", "");
    
    drug = function(type, price, status) {
      this.type = ko.observable(type);
      this.price = ko.observable(price);
      this.status = ko.observable(status);
    };
    
    drugViewModel = function() {
      this.nafn = ko.observable(now.name);
      this.drugs = ko.observableArray([new drug("hass", 10, "same"), new drug("LSD", 20, "same")]);
    };
    now.receiveMessage = function(name, message) {
      return $("#messages").append("<br>" + name + ": " + message);
    };
    
    
    
    $("#send-button").click(function() {
      now.distributeMessage($("#text-input").val());
      return $("#text-input").val("");
    });
    $(".change").click(function() {
      now.changeRoom($(this).text());
      now.changeRoom($(this).text());
    });
    
    ko.applyBindings(new drugViewModel());
  });

}).call(this);
