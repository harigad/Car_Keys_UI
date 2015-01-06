function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onClick() {
        _callBack && Alloy.createController("ridealong/accept", {
            _data: _data,
            _callBack: function() {
                var animation = Titanium.UI.createAnimation();
                animation.opacity = 0;
                animation.duration = 1500;
                var animationHandler = function() {
                    animation.removeEventListener("complete", animationHandler);
                    _callBack();
                };
                animation.addEventListener("complete", animationHandler);
                $.main.animate(animation);
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/request";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        id: "main",
        backgroundColor: "#f49033",
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
        backgroundColor: "#ccc",
        borderWidth: "3",
        borderColor: "#fff"
    });
    $.__views.main.add($.__views.photo);
    $.__views.__alloyId112 = Ti.UI.createView({
        left: "10",
        right: "10",
        width: Ti.UI.SIZE,
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId112"
    });
    $.__views.main.add($.__views.__alloyId112);
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
    $.__views.__alloyId112.add($.__views.name);
    $.__views.desc = Ti.UI.createLabel({
        height: "Ti.UI.SIZE",
        color: "#fff",
        opacity: "0.6",
        font: {
            fontSize: 11
        },
        text: "sent you a ride along request",
        left: "0",
        id: "desc",
        width: Ti.UI.SIZE
    });
    $.__views.__alloyId112.add($.__views.desc);
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