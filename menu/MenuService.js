demoApp.factory('menu', function() {
  var menu = {}
  menu.closed = true;

  menu.change = function() {
    menu.closed = !menu.closed;
  }

  menu.isClosed = function() {
    return menu.closed;
  }

  return menu;
});
