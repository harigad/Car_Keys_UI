function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/carwindow";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.carwindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "carwindow"
    });
    $.__views.carwindow && $.addTopLevelView($.__views.carwindow);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "50",
        backgroundColor: "#eee"
    });
    $.__views.carwindow.add($.__views.scroll);
    $.__views.main = Ti.UI.createTableView({
        separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
        left: 10,
        right: 10,
        top: "20",
        borderRadius: 4,
        scrollable: false,
        height: Ti.UI.SIZE,
        id: "main"
    });
    $.__views.scroll.add($.__views.main);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.carwindow
    });
    $.__views.header.setParent($.__views.carwindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _data = args._data;
    args._callBack;
    require("Login");
    $.header.openWindow($.carwindow);
    var car = Alloy.createController("car/car", {
        _data: _data,
        _callBack: function() {}
    });
    $.main.setData([ car.getView() ]);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;