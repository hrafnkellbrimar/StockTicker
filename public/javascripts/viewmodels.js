(function() {

  $(document).ready(function() {
	now.name = prompt("What's your name?", "");
	
	function drug(type) {
		return {
			type : ko.observable(type)
		};
	}
	
    drugViewModel = function() {
      this.nafn = now.name;
      this.drugTypes = ko.observableArray([new drug("hass"), new drug("LSD")]);
    };

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

    now.changeRoom($(this).text());

    return ko.applyBindings(new drugViewModel());
  });

}).call(this);
