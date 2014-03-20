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
    function onFocus() {
        $.plate.focus();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/radio/radio_add_edit";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.radio_add_edit = Ti.UI.createWindow({
        backgroundColor: "#eee",
        id: "radio_add_edit"
    });
    $.__views.radio_add_edit && $.addTopLevelView($.__views.radio_add_edit);
    onFocus ? $.__views.radio_add_edit.addEventListener("focus", onFocus) : __defers["$.__views.radio_add_edit!focus!onFocus"] = true;
    $.__views.__alloyId12 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: "320",
        top: "0",
        id: "__alloyId12"
    });
    $.__views.radio_add_edit.add($.__views.__alloyId12);
    $.__views.plate = Ti.UI.createTextField({
        id: "plate"
    });
    $.__views.__alloyId12.add($.__views.plate);
    onEdit ? $.__views.plate.addEventListener("return", onEdit) : __defers["$.__views.plate!return!onEdit"] = true;
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;