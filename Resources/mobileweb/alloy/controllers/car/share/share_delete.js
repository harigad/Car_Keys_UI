function Controller() {
    function onDelete() {
        Alloy.createController("car/share/share_send_to_server", {
            _delete: true,
            _cid: _cid,
            _data: _data,
            _callBack: function() {
                _callBack();
                $.share_delete.close();
            }
        });
    }
    function onCancel() {
        $.share_delete.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/share/share_delete";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.share_delete = Ti.UI.createWindow({
        backgroundColor: "#eee",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "share_delete"
    });
    $.__views.share_delete && $.addTopLevelView($.__views.share_delete);
    $.__views.__alloyId29 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: "40",
        right: "40",
        id: "__alloyId29"
    });
    $.__views.share_delete.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#990000",
        height: Ti.UI.SIZE,
        bottom: "5",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    onDelete ? $.__views.__alloyId30.addEventListener("click", onDelete) : __defers["$.__views.__alloyId30!click!onDelete"] = true;
    $.__views.__alloyId31 = Ti.UI.createLabel({
        text: "STOP SHARING",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#999",
        height: Ti.UI.SIZE,
        top: "5",
        id: "__alloyId32"
    });
    $.__views.__alloyId29.add($.__views.__alloyId32);
    onCancel ? $.__views.__alloyId32.addEventListener("click", onCancel) : __defers["$.__views.__alloyId32!click!onCancel"] = true;
    $.__views.__alloyId33 = Ti.UI.createLabel({
        text: "CANCEL",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var _cid = args._cid;
    args._editable;
    var _callBack = args._callBack;
    $.share_delete.open();
    __defers["$.__views.__alloyId30!click!onDelete"] && $.__views.__alloyId30.addEventListener("click", onDelete);
    __defers["$.__views.__alloyId32!click!onCancel"] && $.__views.__alloyId32.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;