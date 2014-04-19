function Controller() {
    function onOk() {
        $.not_found_car.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/not_found_car";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.not_found_car = Ti.UI.createWindow({
        backgroundColor: "#333",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "not_found_car"
    });
    $.__views.not_found_car && $.addTopLevelView($.__views.not_found_car);
    $.__views.__alloyId81 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId81"
    });
    $.__views.not_found_car.add($.__views.__alloyId81);
    $.__views.error_label = Ti.UI.createLabel({
        text: "Sorry!We are unable to locate your ride at this time.",
        id: "error_label",
        left: "20",
        right: "20",
        height: Ti.UI.SIZE,
        color: "#fff"
    });
    $.__views.__alloyId81.add($.__views.error_label);
    $.__views.__alloyId82 = Ti.UI.createView({
        left: "20",
        right: "20",
        height: Ti.UI.SIZE,
        top: "20",
        borderRadius: "4",
        backgroundColor: "#eee",
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    onOk ? $.__views.__alloyId82.addEventListener("click", onOk) : __defers["$.__views.__alloyId82!click!onOk"] = true;
    $.__views.__alloyId83 = Ti.UI.createLabel({
        text: "OK!",
        color: "#666",
        top: "20",
        bottom: "20",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _e = args._e || "";
    $.error_label.setText(_e);
    $.not_found_car.open();
    __defers["$.__views.__alloyId82!click!onOk"] && $.__views.__alloyId82.addEventListener("click", onOk);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;