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
        $.not_found_car.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/not_found_car";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.not_found_car = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        navBarHidden: true,
        id: "not_found_car"
    });
    $.__views.not_found_car && $.addTopLevelView($.__views.not_found_car);
    $.__views.__alloyId129 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId129"
    });
    $.__views.not_found_car.add($.__views.__alloyId129);
    $.__views.error_label = Ti.UI.createLabel({
        text: "Sorry!We are unable to locate your ride at this time.",
        id: "error_label",
        left: "20",
        right: "20",
        height: Ti.UI.SIZE,
        color: "#fff"
    });
    $.__views.__alloyId129.add($.__views.error_label);
    $.__views.__alloyId130 = Ti.UI.createView({
        left: "20",
        right: "20",
        height: Ti.UI.SIZE,
        top: "20",
        borderRadius: "4",
        backgroundColor: "#fff",
        id: "__alloyId130"
    });
    $.__views.__alloyId129.add($.__views.__alloyId130);
    onOk ? $.__views.__alloyId130.addEventListener("click", onOk) : __defers["$.__views.__alloyId130!click!onOk"] = true;
    $.__views.__alloyId131 = Ti.UI.createLabel({
        text: "OK!",
        color: "#ffa633",
        top: "20",
        bottom: "20",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId131"
    });
    $.__views.__alloyId130.add($.__views.__alloyId131);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _e = args._e || "";
    $.error_label.setText(_e);
    $.not_found_car.open();
    __defers["$.__views.__alloyId130!click!onOk"] && $.__views.__alloyId130.addEventListener("click", onOk);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;