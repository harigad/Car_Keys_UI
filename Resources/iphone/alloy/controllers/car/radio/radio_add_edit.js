function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onEdit() {
        var radio_name = $.plate.getValue();
        Alloy.createController("car/radio/radio_send_to_server", {
            _cid: _cid,
            _radio_name: radio_name,
            _callBack: function() {
                _callBack();
                $.radio_add_edit.close();
            }
        });
    }
    function onCancel() {
        $.radio_add_edit.close();
    }
    function onFocus() {
        $.plate.focus();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/radio/radio_add_edit";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.radio_add_edit = Ti.UI.createWindow({
        backgroundColor: "#eee",
        navBarHidden: true,
        id: "radio_add_edit"
    });
    $.__views.radio_add_edit && $.addTopLevelView($.__views.radio_add_edit);
    onFocus ? $.__views.radio_add_edit.addEventListener("focus", onFocus) : __defers["$.__views.radio_add_edit!focus!onFocus"] = true;
    $.__views.__alloyId9 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: "10",
        layout: "vertical",
        id: "__alloyId9"
    });
    $.__views.radio_add_edit.add($.__views.__alloyId9);
    $.__views.plate = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        id: "plate",
        width: "280",
        height: "60"
    });
    $.__views.__alloyId9.add($.__views.plate);
    onEdit ? $.__views.plate.addEventListener("return", onEdit) : __defers["$.__views.plate!return!onEdit"] = true;
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
        backgroundColor: "#40a3ff",
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
    require("Login");
    var args = arguments[0] || {};
    var _cid = args._cid || {};
    args._data || {};
    var _callBack = args._callBack;
    $.radio_add_edit.open();
    __defers["$.__views.radio_add_edit!focus!onFocus"] && $.__views.radio_add_edit.addEventListener("focus", onFocus);
    __defers["$.__views.plate!return!onEdit"] && $.__views.plate.addEventListener("return", onEdit);
    __defers["$.__views.__alloyId11!click!onEdit"] && $.__views.__alloyId11.addEventListener("click", onEdit);
    __defers["$.__views.__alloyId13!click!onCancel"] && $.__views.__alloyId13.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;