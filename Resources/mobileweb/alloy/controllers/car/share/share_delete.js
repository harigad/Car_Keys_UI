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
        id: "share_delete"
    });
    $.__views.share_delete && $.addTopLevelView($.__views.share_delete);
    $.__views.__alloyId21 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: "40",
        right: "40",
        id: "__alloyId21"
    });
    $.__views.share_delete.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#990000",
        height: Ti.UI.SIZE,
        bottom: "5",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    onDelete ? $.__views.__alloyId22.addEventListener("click", onDelete) : __defers["$.__views.__alloyId22!click!onDelete"] = true;
    $.__views.__alloyId23 = Ti.UI.createLabel({
        text: "STOP SHARING",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#999",
        height: Ti.UI.SIZE,
        top: "5",
        id: "__alloyId24"
    });
    $.__views.__alloyId21.add($.__views.__alloyId24);
    onCancel ? $.__views.__alloyId24.addEventListener("click", onCancel) : __defers["$.__views.__alloyId24!click!onCancel"] = true;
    $.__views.__alloyId25 = Ti.UI.createLabel({
        text: "CANCEL",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var _cid = args._cid;
    args._editable;
    var _callBack = args._callBack;
    $.share_delete.open();
    __defers["$.__views.__alloyId22!click!onDelete"] && $.__views.__alloyId22.addEventListener("click", onDelete);
    __defers["$.__views.__alloyId24!click!onCancel"] && $.__views.__alloyId24.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;