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
    this.__controllerPath = "ridealong/send_request/cannot_find_carkey_for_ridealong";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.cannot_find_carkey_for_ridealong = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        id: "cannot_find_carkey_for_ridealong"
    });
    $.__views.cannot_find_carkey_for_ridealong && $.addTopLevelView($.__views.cannot_find_carkey_for_ridealong);
    $.__views.main = Ti.UI.createView({
        id: "main",
        height: Ti.UI.SIZE,
        left: "20",
        right: "20",
        layout: "vertical"
    });
    $.__views.cannot_find_carkey_for_ridealong.add($.__views.main);
    $.__views.__alloyId119 = Ti.UI.createLabel({
        text: "searching..please wait..",
        color: "#fff",
        id: "__alloyId119"
    });
    $.__views.main.add($.__views.__alloyId119);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;