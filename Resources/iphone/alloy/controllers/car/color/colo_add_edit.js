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
    this.__controllerPath = "car/color/colo_add_edit";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.colo_add_edit = Ti.UI.createWindow({
        backgroundColor: "#eee",
        id: "colo_add_edit"
    });
    $.__views.colo_add_edit && $.addTopLevelView($.__views.colo_add_edit);
    onFocus ? $.__views.colo_add_edit.addEventListener("focus", onFocus) : __defers["$.__views.colo_add_edit!focus!onFocus"] = true;
    $.__views.__alloyId9 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: "10",
        layout: "vertical",
        id: "__alloyId9"
    });
    $.__views.colo_add_edit.add($.__views.__alloyId9);
    $.__views.cells = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: "300",
        id: "cells"
    });
    $.__views.__alloyId9.add($.__views.cells);
    $.__views.__alloyId10 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: "20",
        right: "20",
        top: "30",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#2179ca",
        height: Ti.UI.SIZE,
        bottom: "5",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    onEdit ? $.__views.__alloyId11.addEventListener("click", onEdit) : __defers["$.__views.__alloyId11!click!onEdit"] = true;
    $.__views.__alloyId12 = Ti.UI.createLabel({
        text: "ADD RADIO",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#999",
        height: Ti.UI.SIZE,
        top: "5",
        id: "__alloyId13"
    });
    $.__views.__alloyId10.add($.__views.__alloyId13);
    onCancel ? $.__views.__alloyId13.addEventListener("click", onCancel) : __defers["$.__views.__alloyId13!click!onCancel"] = true;
    $.__views.__alloyId14 = Ti.UI.createLabel({
        text: "CANCEL",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.colo_add_edit!focus!onFocus"] && $.__views.colo_add_edit.addEventListener("focus", onFocus);
    __defers["$.__views.__alloyId11!click!onEdit"] && $.__views.__alloyId11.addEventListener("click", onEdit);
    __defers["$.__views.__alloyId13!click!onCancel"] && $.__views.__alloyId13.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;