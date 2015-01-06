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
    $.__views.home_square = Ti.UI.createTableViewRow({
        id: "home_square",
        height: Ti.UI.SIZE
    });
    $.__views.home_square && $.addTopLevelView($.__views.home_square);
    onClick ? $.__views.home_square.addEventListener("click", onClick) : __defers["$.__views.home_square!click!onClick"] = true;
    $.__views.main = Ti.UI.createView({
        height: "36",
        id: "main",
        left: "20",
        right: "10",
        top: "15",
        bottom: "15"
    });
    $.__views.home_square.add($.__views.main);
    $.__views.icon = Ti.UI.createImageView({
        id: "icon",
        width: "36",
        height: "36",
        left: "0",
        borderRadius: "18",
        backgroundColor: "#fff"
    });
    $.__views.main.add($.__views.icon);
    $.__views.__alloyId69 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: "56",
        layout: "horizontal",
        id: "__alloyId69"
    });
    $.__views.main.add($.__views.__alloyId69);
    $.__views.title = Ti.UI.createLabel({
        left: "0",
        font: {
            fontFamily: "Helvetica Neu",
            fontSize: 30
        },
        color: "#000",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "title"
    });
    $.__views.__alloyId69.add($.__views.title);
    $.__views.subtext = Ti.UI.createLabel({
        left: 10,
        font: {
            fontFamily: "Helvetica Neu",
            fontSize: 30
        },
        color: "#cecece",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "subtext"
    });
    $.__views.__alloyId69.add($.__views.subtext);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _callBack = args._callBack;
    var _obj = args._obj;
    var matches = _data.title.match(/\d+/g);
    null != matches ? $.title.setText(_data.title) : $.title.setText(_data.title.toLowerCase());
    _data.color && $.title.setColor(_data.color);
    $.main.remove($.title);
    _data.subtext && $.subtext.setText(_data.subtext);
    $.icon.setImage(_data.image);
    _data.width && $.icon.setWidth(_data.width);
    _data.height && $.icon.setWidth(_data.height);
    __defers["$.__views.home_square!click!onClick"] && $.__views.home_square.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;