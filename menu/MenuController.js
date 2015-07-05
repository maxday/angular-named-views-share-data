demoApp.controller('MenuController', function(menu) {
  var self = this;

  self.getMenu = function() {
    return menu.isClosed();
  }
});
