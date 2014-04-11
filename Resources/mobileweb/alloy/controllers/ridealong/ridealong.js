function Controller() {
    function onFocus() {}
    function onEdit() {}
    function onCancel() {
        $.ridealong.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/ridealong";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.ridealong = Ti.UI.createWindow({
        backgroundColor: "#ccc",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "ridealong"
    });
    $.__views.ridealong && $.addTopLevelView($.__views.ridealong);
    onFocus ? $.__views.ridealong.addEventListener("focus", onFocus) : __defers["$.__views.ridealong!focus!onFocus"] = true;
    $.__views.__alloyId63 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId63"
    });
    $.__views.ridealong.add($.__views.__alloyId63);
    $.__views.plate = Ti.UI.createTextField({
        height: 100,
        left: 10,
        right: 10,
        top: 10,
        color: "#333",
        font: {
            fontSize: 60,
            fontWeight: "bold"
        },
        id: "plate",
        hintText: "CARKEY#"
    });
    $.__views.__alloyId63.add($.__views.plate);
    onEdit ? $.__views.plate.addEventListener("return", onEdit) : __defers["$.__views.plate!return!onEdit"] = true;
    $.__views.__alloyId64 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: "20",
        right: "20",
        top: "30",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#2179ca",
        height: Ti.UI.SIZE,
        bottom: "5",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    onEdit ? $.__views.__alloyId65.addEventListener("click", onEdit) : __defers["$.__views.__alloyId65!click!onEdit"] = true;
    $.__views.__alloyId66 = Ti.UI.createLabel({
        text: "RIDE ALONG",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#999",
        height: Ti.UI.SIZE,
        top: "5",
        id: "__alloyId67"
    });
    $.__views.__alloyId64.add($.__views.__alloyId67);
    onCancel ? $.__views.__alloyId67.addEventListener("click", onCancel) : __defers["$.__views.__alloyId67!click!onCancel"] = true;
    $.__views.__alloyId68 = Ti.UI.createLabel({
        text: "CANCEL",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    args._data || {};
    $.ridealong.open();
    __defers["$.__views.ridealong!focus!onFocus"] && $.__views.ridealong.addEventListener("focus", onFocus);
    __defers["$.__views.plate!return!onEdit"] && $.__views.plate.addEventListener("return", onEdit);
    __defers["$.__views.__alloyId65!click!onEdit"] && $.__views.__alloyId65.addEventListener("click", onEdit);
    __defers["$.__views.__alloyId67!click!onCancel"] && $.__views.__alloyId67.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;