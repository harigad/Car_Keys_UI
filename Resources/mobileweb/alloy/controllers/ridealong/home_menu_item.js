function Controller() {
    function onClick() {
        _callBack();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/home_menu_item";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        id: "main",
        backgroundColor: "#999",
        layout: "horizontal",
        height: Ti.UI.SIZE
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    onClick ? $.__views.main.addEventListener("click", onClick) : __defers["$.__views.main!click!onClick"] = true;
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        left: "10",
        top: "5",
        bottom: "5",
        width: "50",
        height: "50",
        borderRadius: "25",
        backgroundColor: "#ccc"
    });
    $.__views.main.add($.__views.photo);
    $.__views.__alloyId60 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        right: "10",
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId60"
    });
    $.__views.main.add($.__views.__alloyId60);
    $.__views.name = Ti.UI.createLabel({
        left: "0",
        height: "Ti.UI.SIZE",
        color: "#fff",
        font: {
            fontSize: 14
        },
        id: "name",
        width: Ti.UI.SIZE
    });
    $.__views.__alloyId60.add($.__views.name);
    $.__views.desc = Ti.UI.createLabel({
        height: "Ti.UI.SIZE",
        color: "#fff",
        opacity: "0.6",
        font: {
            fontSize: 11
        },
        left: "0",
        id: "desc",
        width: Ti.UI.SIZE
    });
    $.__views.__alloyId60.add($.__views.desc);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _callBack = args._callBack;
    $.photo.setBackgroundImage(_data.photo);
    $.name.setText(_data.name);
    __defers["$.__views.main!click!onClick"] && $.__views.main.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;