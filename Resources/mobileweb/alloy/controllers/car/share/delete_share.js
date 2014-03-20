function Controller() {
    function onDelete() {
        Alloy.createController("car/share/send_share_to_server", {
            _delete: true,
            _cid: _cid,
            _data: _data,
            _callBack: function() {
                _callBack();
                $.delete_share.close();
            }
        });
    }
    function onCancel() {
        $.delete_share.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/share/delete_share";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.delete_share = Ti.UI.createWindow({
        backgroundColor: "#eee",
        id: "delete_share"
    });
    $.__views.delete_share && $.addTopLevelView($.__views.delete_share);
    $.__views.__alloyId13 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: "40",
        right: "40",
        id: "__alloyId13"
    });
    $.__views.delete_share.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#990000",
        height: Ti.UI.SIZE,
        bottom: "5",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    onDelete ? $.__views.__alloyId14.addEventListener("click", onDelete) : __defers["$.__views.__alloyId14!click!onDelete"] = true;
    $.__views.__alloyId15 = Ti.UI.createLabel({
        text: "STOP SHARING",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#999",
        height: Ti.UI.SIZE,
        top: "5",
        id: "__alloyId16"
    });
    $.__views.__alloyId13.add($.__views.__alloyId16);
    onCancel ? $.__views.__alloyId16.addEventListener("click", onCancel) : __defers["$.__views.__alloyId16!click!onCancel"] = true;
    $.__views.__alloyId17 = Ti.UI.createLabel({
        text: "CANCEL",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var _cid = args._cid;
    args._editable;
    var _callBack = args._callBack;
    $.delete_share.open();
    __defers["$.__views.__alloyId14!click!onDelete"] && $.__views.__alloyId14.addEventListener("click", onDelete);
    __defers["$.__views.__alloyId16!click!onCancel"] && $.__views.__alloyId16.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;