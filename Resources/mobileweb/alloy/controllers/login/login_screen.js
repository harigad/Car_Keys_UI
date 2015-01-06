function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function getAccessCode() {
        _callBack();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login/login_screen";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.login_screen = Ti.UI.createWindow({
        backgroundColor: "#f1f1f1",
        navBarHidden: true,
        id: "login_screen"
    });
    $.__views.login_screen && $.addTopLevelView($.__views.login_screen);
    $.__views.__alloyId83 = Ti.UI.createView({
        width: 220,
        top: 100,
        height: Ti.UI.SIZE,
        borderRadius: 4,
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId83"
    });
    $.__views.login_screen.add($.__views.__alloyId83);
    $.__views.mobile = Ti.UI.createTextField({
        backgroundColor: "#fff",
        left: 10,
        right: 10,
        color: "#999",
        height: 50,
        font: {
            fontSize: 20
        },
        hintText: "mobile #",
        id: "mobile"
    });
    $.__views.__alloyId83.add($.__views.mobile);
    $.__views.__alloyId84 = Ti.UI.createView({
        backgroundColor: "#2179ca",
        height: 50,
        width: Ti.UI.FILL,
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    getAccessCode ? $.__views.__alloyId84.addEventListener("click", getAccessCode) : __defers["$.__views.__alloyId84!click!getAccessCode"] = true;
    $.__views.__alloyId85 = Ti.UI.createLabel({
        color: "#fff",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 14
        },
        text: "get activation code",
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _callBack = args._callBack || {};
    $.login_screen.open();
    $.mobile.focus();
    __defers["$.__views.__alloyId84!click!getAccessCode"] && $.__views.__alloyId84.addEventListener("click", getAccessCode);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;