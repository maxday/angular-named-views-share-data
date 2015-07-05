demoApp.controller('HeaderController', function(menu) {
  var self = this;

  self.changeMenu = function() {
    menu.change();
  }

});
