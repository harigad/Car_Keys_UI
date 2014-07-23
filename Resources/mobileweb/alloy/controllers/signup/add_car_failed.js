function Controller() {
    function onOk() {
        _callBack();
        $.add_car_failed.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/add_car_failed";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.add_car_failed = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "add_car_failed"
    });
    $.__views.add_car_failed && $.addTopLevelView($.__views.add_car_failed);
    $.__views.__alloyId120 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId120"
    });
    $.__views.add_car_failed.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createLabel({
        text: "Sorry! the name and address you have provided did not match our records.",
        left: "20",
        right: "20",
        height: Ti.UI.SIZE,
        color: "#fff",
        id: "__alloyId121"
    });
    $.__views.__alloyId120.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createView({
        left: "20",
        right: "20",
        height: Ti.UI.SIZE,
        top: "20",
        borderRadius: "4",
        backgroundColor: "#fff",
        id: "__alloyId122"
    });
    $.__views.__alloyId120.add($.__views.__alloyId122);
    onOk ? $.__views.__alloyId122.addEventListener("click", onOk) : __defers["$.__views.__alloyId122!click!onOk"] = true;
    $.__views.__alloyId123 = Ti.UI.createLabel({
        text: "OK!",
        color: "#ffa633",
        top: "20",
        bottom: "20",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId123"
    });
    $.__views.__alloyId122.add($.__views.__alloyId123);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _callBack = args._callBack;
    $.add_car_failed.open();
    __defers["$.__views.__alloyId122!click!onOk"] && $.__views.__alloyId122.addEventListener("click", onOk);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;