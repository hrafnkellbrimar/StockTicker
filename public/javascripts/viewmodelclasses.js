(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  $(document).ready(function() {
    now.name = prompt("What's your name?", "");
    drugViewModel(function() {
      var Cocaine, Crack, Drug, Lsd, coke, crack, lsd;
      Drug = (function() {

        function Drug(name) {
          this.name = name;
        }

        Drug.prototype.price = function(dollars) {
          return alert(this.name + (" costs " + dollars));
        };

        Drug.prototype.status = function(status) {
          return alert(this.name + (" has status " + status));
        };

        return Drug;

      })();
      Cocaine = (function(_super) {

        __extends(Cocaine, _super);

        function Cocaine() {
          Cocaine.__super__.constructor.apply(this, arguments);
        }

        Cocaine.prototype.price = function() {
          alert("Cocaine price");
          return Cocaine.__super__.price.call(this, 5);
        };

        Cocaine.prototype.status = function() {
          alert("Cocaine status");
          return Cocaine.__super__.status.call(this, "up");
        };

        return Cocaine;

      })(Drug);
      Lsd = (function(_super) {

        __extends(Lsd, _super);

        function Lsd() {
          Lsd.__super__.constructor.apply(this, arguments);
        }

        Lsd.prototype.price = function() {
          alert("LSD price");
          return Lsd.__super__.price.call(this, 4);
        };

        Lsd.prototype.status = function() {
          alert("LSD status");
          return Lsd.__super__.status.call(this, "up");
        };

        return Lsd;

      })(Drug);
      Crack = (function(_super) {

        __extends(Crack, _super);

        function Crack() {
          Crack.__super__.constructor.apply(this, arguments);
        }

        Crack.prototype.price = function() {
          alert("Crack price");
          return Crack.__super__.price.call(this, 1);
        };

        Crack.prototype.status = function() {
          alert("Crack status");
          return Crack.__super__.status.call(this, "down");
        };

        return Crack;

      })(Drug);
      coke = new Cocaine("Cocaine");
      lsd = new Lsd("LSD");
      return crack = new Crack("Crack");
    });
    ko.applyBindings(new drugViewModel());
    now.receiveMessage = function(name, message) {
      return $("#messages").append("<br>" + name + ": " + message);
    };
    $("#send-button").click(function() {
      now.distributeMessage($("#text-input").val());
      return $("#text-input").val("");
    });
    return $(".change").click(function() {
      return now.changeRoom($(this).text());
    });
  });

}).call(this);
