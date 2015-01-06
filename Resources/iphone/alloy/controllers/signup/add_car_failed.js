function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onOk() {
        _callBack();
        $.add_car_failed.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/add_car_failed";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.add_car_failed = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        navBarHidden: true,
        id: "add_car_failed"
    });
    $.__views.add_car_failed && $.addTopLevelView($.__views.add_car_failed);
    $.__views.__alloyId135 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId135"
    });
    $.__views.add_car_failed.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createLabel({
        text: "Sorry! the name and address you have provided did not match our records.",
        left: "20",
        right: "20",
        height: Ti.UI.SIZE,
        color: "#fff",
        id: "__alloyId136"
    });
    $.__views.__alloyId135.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createView({
        left: "20",
        right: "20",
        height: Ti.UI.SIZE,
        top: "20",
        borderRadius: "4",
        backgroundColor: "#fff",
        id: "__alloyId137"
    });
    $.__views.__alloyId135.add($.__views.__alloyId137);
    onOk ? $.__views.__alloyId137.addEventListener("click", onOk) : __defers["$.__views.__alloyId137!click!onOk"] = true;
    $.__views.__alloyId138 = Ti.UI.createLabel({
        text: "OK!",
        color: "#ffa633",
        top: "20",
        bottom: "20",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId138"
    });
    $.__views.__alloyId137.add($.__views.__alloyId138);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _callBack = args._callBack;
    $.add_car_failed.open();
    __defers["$.__views.__alloyId137!click!onOk"] && $.__views.__alloyId137.addEventListener("click", onOk);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;