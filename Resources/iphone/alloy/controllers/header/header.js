function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goBack() {
        login.closeWindow(parentWindow);
    }
    function goHome() {
        _callBack ? _callBack() : Ti.App.fireEvent("goHome");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "header/header";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: 0,
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.main = Ti.UI.createView({
        height: 50,
        top: 10,
        id: "main"
    });
    $.__views.container.add($.__views.main);
    $.__views.__alloyId77 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: "0",
        id: "__alloyId77"
    });
    $.__views.main.add($.__views.__alloyId77);
    goBack ? $.__views.__alloyId77.addEventListener("click", goBack) : __defers["$.__views.__alloyId77!click!goBack"] = true;
    $.__views.left_btn = Ti.UI.createView({
        left: 20,
        height: 30,
        width: 22,
        backgroundImage: "common/left_btn.png",
        id: "left_btn"
    });
    $.__views.__alloyId77.add($.__views.left_btn);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        color: "#40a3ff",
        font: {
            fontSize: 18
        },
        id: "title"
    });
    $.__views.main.add($.__views.title);
    $.__views.__alloyId78 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        right: "0",
        id: "__alloyId78"
    });
    $.__views.main.add($.__views.__alloyId78);
    goHome ? $.__views.__alloyId78.addEventListener("click", goHome) : __defers["$.__views.__alloyId78!click!goHome"] = true;
    $.__views.right_btn = Ti.UI.createView({
        right: 20,
        height: 30,
        width: 36,
        backgroundImage: "common/home_icon.png",
        id: "right_btn"
    });
    $.__views.__alloyId78.add($.__views.right_btn);
    $.__views.right_label = Ti.UI.createView({
        id: "right_label",
        height: "30",
        right: "20",
        width: Ti.UI.SIZE,
        backgroundColor: "#fff",
        borderRadius: "4"
    });
    $.__views.__alloyId78.add($.__views.right_label);
    $.__views.right_label_text = Ti.UI.createLabel({
        right: 5,
        left: 5,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        color: "#40a3ff",
        font: {
            fontSize: 14
        },
        id: "right_label_text"
    });
    $.__views.right_label.add($.__views.right_label_text);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var parentWindow;
    var _callBack = null;
    var isHome = false;
    Ti.App.addEventListener("goHome", function() {
        !isHome && parentWindow && parentWindow.close();
    });
    exports.setTitle = function(name) {
        $.title.setText(name);
    };
    exports.openWindow = function(win, rightText, callBack) {
        parentWindow = win;
        if (rightText) {
            $.right_label_text.setText(rightText);
            $.right_btn.hide();
            $.right_label.show();
        } else $.right_label.hide();
        callBack && (_callBack = callBack);
        login.openWindow(parentWindow);
    };
    exports.back = function() {
        goBack();
    };
    __defers["$.__views.__alloyId77!click!goBack"] && $.__views.__alloyId77.addEventListener("click", goBack);
    __defers["$.__views.__alloyId78!click!goHome"] && $.__views.__alloyId78.addEventListener("click", goHome);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;