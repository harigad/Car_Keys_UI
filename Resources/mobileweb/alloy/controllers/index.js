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
    $.__views.iphone_bg = Ti.UI.createView({
        backgroundImage: "iphone_bg.png",
        width: 375,
        height: 600,
        id: "iphone_bg"
    });
    $.__views.index.add($.__views.iphone_bg);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    login.url();
    $.index.open();
    login.init(function() {
        var home = Alloy.createController("home/home");
        home.getView().open();
    });
    Ti.App.addEventListener("openWindow", function(window) {
        window.open();
    });
    Ti.App.addEventListener("closeWindow", function(window) {
        window.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;