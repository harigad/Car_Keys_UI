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
        backgroundColor: "#fff",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.main = Ti.UI.createView({
        height: 50,
        top: 10,
        id: "main"
    });
    $.__views.container.add($.__views.main);
    $.__views.left_btn = Ti.UI.createView({
        left: 10,
        height: 30,
        width: 22,
        borderRadius: 2,
        backgroundImage: "common/left_btn.png",
        id: "left_btn"
    });
    $.__views.main.add($.__views.left_btn);
    goBack ? $.__views.left_btn.addEventListener("click", goBack) : __defers["$.__views.left_btn!click!goBack"] = true;
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        color: "#333",
        font: {
            fontSize: 14
        },
        id: "title"
    });
    $.__views.main.add($.__views.title);
    $.__views.right_btn = Ti.UI.createView({
        right: 10,
        height: 30,
        width: 36,
        backgroundImage: "common/home_icon.png",
        borderRadius: 2,
        id: "right_btn"
    });
    $.__views.main.add($.__views.right_btn);
    goHome ? $.__views.right_btn.addEventListener("click", goHome) : __defers["$.__views.right_btn!click!goHome"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var parentWindow;
    Ti.App.addEventListener("goHome", function() {
        isHome || parentWindow.close();
    });
    exports.setTitle = function(name) {
        $.title.setText(name);
    };
    exports.openWindow = function(win, rightImage, callBack) {
        parentWindow = win;
        rightImage && $.right_btn.setBackgroundImage(rightImage);
        callBack && (_callBack = callBack);
        login.openWindow(parentWindow);
    };
    exports.back = function() {
        goBack();
    };
    __defers["$.__views.left_btn!click!goBack"] && $.__views.left_btn.addEventListener("click", goBack);
    __defers["$.__views.right_btn!click!goHome"] && $.__views.right_btn.addEventListener("click", goHome);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;