function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#ccc",
        navBarHidden: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    login.url();
    var nav;
    login.init(function() {
        var home = Alloy.createController("home/home");
        nav = Titanium.UI.MobileWeb.createNavigationGroup({
            window: home.getView()
        });
        $.index.add(nav);
        $.index.open();
    });
    Ti.App.addEventListener("openWindow", function(window) {
        nav.open(window, {
            animate: true,
            navBarHidden: true
        });
    });
    Ti.App.addEventListener("closeWindow", function(window) {
        nav.close(window);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;