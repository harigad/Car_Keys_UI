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
        backgroundColor: "#333",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "add_car_failed"
    });
    $.__views.add_car_failed && $.addTopLevelView($.__views.add_car_failed);
    $.__views.__alloyId76 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId76"
    });
    $.__views.add_car_failed.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        text: "Sorry! the name and address you have provided did not match our records.",
        left: "20",
        right: "20",
        height: Ti.UI.SIZE,
        color: "#fff",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createView({
        left: "20",
        right: "20",
        height: Ti.UI.SIZE,
        top: "20",
        borderRadius: "4",
        backgroundColor: "#eee",
        id: "__alloyId78"
    });
    $.__views.__alloyId76.add($.__views.__alloyId78);
    onOk ? $.__views.__alloyId78.addEventListener("click", onOk) : __defers["$.__views.__alloyId78!click!onOk"] = true;
    $.__views.__alloyId79 = Ti.UI.createLabel({
        text: "OK!",
        color: "#666",
        top: "20",
        bottom: "20",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _callBack = args._callBack;
    $.add_car_failed.open();
    __defers["$.__views.__alloyId78!click!onOk"] && $.__views.__alloyId78.addEventListener("click", onOk);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;