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
        _callBack();
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
        backgroundColor: "#f1f1f1",
        navBarHidden: true,
        id: "not_found_car"
    });
    $.__views.not_found_car && $.addTopLevelView($.__views.not_found_car);
    $.__views.__alloyId144 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId144"
    });
    $.__views.not_found_car.add($.__views.__alloyId144);
    $.__views.error_label = Ti.UI.createLabel({
        color: "#ccc",
        shadowColor: "#fff",
        shadowOffset: {
            x: 1,
            y: 1
        },
        shadowRadius: 3,
        font: {
            fontSize: 26
        },
        text: "Sorry!We are unable to locate your ride at this time.",
        id: "error_label",
        left: "20",
        right: "20",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId144.add($.__views.error_label);
    $.__views.__alloyId145 = Ti.UI.createView({
        left: "20",
        right: "20",
        height: Ti.UI.SIZE,
        top: "20",
        borderRadius: "4",
        backgroundColor: "#666",
        id: "__alloyId145"
    });
    $.__views.__alloyId144.add($.__views.__alloyId145);
    onOk ? $.__views.__alloyId145.addEventListener("click", onOk) : __defers["$.__views.__alloyId145!click!onOk"] = true;
    $.__views.__alloyId146 = Ti.UI.createLabel({
        text: "OK!",
        color: "#fff",
        top: "20",
        bottom: "20",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId146"
    });
    $.__views.__alloyId145.add($.__views.__alloyId146);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _e = args._e || "";
    var _callBack = args._callBack;
    $.error_label.setText(_e);
    $.not_found_car.open();
    __defers["$.__views.__alloyId145!click!onOk"] && $.__views.__alloyId145.addEventListener("click", onOk);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;