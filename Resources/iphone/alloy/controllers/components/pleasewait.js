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
    this.__controllerPath = "components/pleasewait";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.pleasewait = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        navBarHidden: true,
        id: "pleasewait"
    });
    $.__views.pleasewait && $.addTopLevelView($.__views.pleasewait);
    $.__views.__alloyId45 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId45"
    });
    $.__views.pleasewait.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        text: "please wait..",
        height: Ti.UI.SIZE,
        color: "#fff",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.open = function() {
        $.pleasewait.open();
    };
    exports.close = function() {
        $.pleasewait.close();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;