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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#999",
        navBarHidden: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createView({
        width: "320",
        height: "480",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.home = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "home"
    });
    $.__views.nav = Ti.UI.MobileWeb.createNavigationGroup({
        window: $.__views.home,
        id: "nav",
        width: "320",
        height: "480",
        top: "-50"
    });
    $.__views.__alloyId0.add($.__views.nav);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    login.init(function() {
        debugger;
        var home = Alloy.createController("home/home_squares");
        $.home.add(home.getView());
        debugger;
        $.index.open();
    }, function(win) {
        $.nav.open(win);
    }, function(win) {
        $.nav.close(win);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;