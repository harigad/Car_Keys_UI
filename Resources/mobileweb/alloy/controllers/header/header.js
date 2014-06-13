function Controller() {
    function goBack() {
        Ti.App.fireEvent("closeWindow", parentWindow);
    }
    function goHome() {
        _callBack ? _callBack() : Ti.App.fireEvent("goHome");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "header/header";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        height: 50,
        top: 0,
        backgroundColor: "#ffa633",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.left_btn = Ti.UI.createView({
        left: 10,
        height: 30,
        width: 22,
        backgroundImage: "common/left_btn.png",
        borderRadius: 2,
        id: "left_btn"
    });
    $.__views.main.add($.__views.left_btn);
    goBack ? $.__views.left_btn.addEventListener("click", goBack) : __defers["$.__views.left_btn!click!goBack"] = true;
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: 14,
            fontWeight: "bold",
            opacity: .6
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
        Ti.App.fireEvent("openWindow", win);
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