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
        _callBack && _callBack(_obj);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home/home_square";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home_square = Ti.UI.createView({
        id: "home_square",
        backgroundColor: "#ffce87",
        width: "160",
        height: "160",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.home_square && $.addTopLevelView($.__views.home_square);
    onClick ? $.__views.home_square.addEventListener("click", onClick) : __defers["$.__views.home_square!click!onClick"] = true;
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "main"
    });
    $.__views.home_square.add($.__views.main);
    $.__views.icon = Ti.UI.createImageView({
        id: "icon",
        width: "40",
        height: "40",
        borderRadius: "4"
    });
    $.__views.main.add($.__views.icon);
    $.__views.title = Ti.UI.createLabel({
        color: "#fff",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "title"
    });
    $.__views.main.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _callBack = args._callBack;
    var _obj = args._obj;
    _data.title ? $.title.setText(_data.title) : $.main.remove($.title);
    if (_data.image) {
        $.icon.setImage(_data.image);
        _data.width && $.icon.setWidth(_data.width);
        _data.height && $.icon.setWidth(_data.height);
    }
    $.home_square.setBackgroundColor("#" + _data.bg);
    __defers["$.__views.home_square!click!onClick"] && $.__views.home_square.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;