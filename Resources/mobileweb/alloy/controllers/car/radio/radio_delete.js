function Controller() {
    function onDelete() {
        Alloy.createController("car/radio/radio_send_to_server", {
            _delete: true,
            _rid: _rid,
            _cid: _cid,
            _callBack: function() {
                _callBack();
                $.radio_delete.close();
            }
        });
    }
    function onCancel() {
        $.radio_delete.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/radio/radio_delete";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.radio_delete = Ti.UI.createWindow({
        backgroundColor: "#eee",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "radio_delete"
    });
    $.__views.radio_delete && $.addTopLevelView($.__views.radio_delete);
    $.__views.__alloyId18 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: "40",
        right: "40",
        id: "__alloyId18"
    });
    $.__views.radio_delete.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#990000",
        height: Ti.UI.SIZE,
        bottom: "5",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    onDelete ? $.__views.__alloyId19.addEventListener("click", onDelete) : __defers["$.__views.__alloyId19!click!onDelete"] = true;
    $.__views.__alloyId20 = Ti.UI.createLabel({
        text: "REMOVE RADIO",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#999",
        height: Ti.UI.SIZE,
        top: "5",
        id: "__alloyId21"
    });
    $.__views.__alloyId18.add($.__views.__alloyId21);
    onCancel ? $.__views.__alloyId21.addEventListener("click", onCancel) : __defers["$.__views.__alloyId21!click!onCancel"] = true;
    $.__views.__alloyId22 = Ti.UI.createLabel({
        text: "CANCEL",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _rid = args._rid;
    var _cid = args._cid;
    var _callBack = args._callBack;
    $.radio_delete.open();
    __defers["$.__views.__alloyId19!click!onDelete"] && $.__views.__alloyId19.addEventListener("click", onDelete);
    __defers["$.__views.__alloyId21!click!onCancel"] && $.__views.__alloyId21.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;