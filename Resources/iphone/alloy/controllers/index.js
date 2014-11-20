function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "home"
    });
    $.__views.nav = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.home,
        id: "nav"
    });
    $.__views.nav && $.addTopLevelView($.__views.nav);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    login.init(function() {
        var home = Alloy.createController("home/home_squares");
        $.home.add(home.getView());
        $.nav.open();
    }, function(win) {
        $.nav.openWindow(win);
    }, function(win) {
        $.nav.closeWindow(win);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;