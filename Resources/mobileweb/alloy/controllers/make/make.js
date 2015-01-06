function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function load() {
        showPleaseWait();
        fb.filter("mid", _data.mid, function(friends) {
            $.main.setData(friends);
        }, function() {}, _data.make);
    }
    function showPleaseWait() {
        $.main.setData([]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "make/make";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.make = Ti.UI.createWindow({
        backgroundColor: "#f1f1f1",
        navBarHidden: true,
        id: "make"
    });
    $.__views.make && $.addTopLevelView($.__views.make);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "50"
    });
    $.__views.make.add($.__views.scroll);
    $.__views.__alloyId86 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId86"
    });
    $.__views.scroll.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createView({
        height: "110",
        top: "40",
        bottom: "40",
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createView({
        backgroundColor: "#333",
        width: "80",
        height: "80",
        top: "0",
        borderRadius: "40",
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
    $.__views.photo = Ti.UI.createView({
        width: "50",
        height: "50",
        id: "photo"
    });
    $.__views.__alloyId88.add($.__views.photo);
    $.__views.name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 90,
        font: {
            fontSize: 24
        },
        color: "#ccc",
        shadowColor: "#fff",
        shadowOffset: {
            x: 1,
            y: 1
        },
        shadowRadius: 3,
        id: "name"
    });
    $.__views.__alloyId87.add($.__views.name);
    $.__views.__alloyId89 = Ti.UI.createView({
        height: "5",
        backgroundColor: "#fff",
        id: "__alloyId89"
    });
    $.__views.__alloyId86.add($.__views.__alloyId89);
    $.__views.main = Ti.UI.createTableView({
        top: "0",
        separatorStyle: Alloy.Globals._params.TableViewSeparatorStyle.NONE,
        id: "main",
        backgroundColor: "#fff",
        scrollable: "false",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId86.add($.__views.main);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.make
    });
    $.__views.header.setParent($.__views.make);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var fb = require("Friends");
    var args = arguments[0] || {};
    var _data = args._data || {};
    $.name.setText(_data.make);
    $.photo.setBackgroundImage("logos/48/" + _data.logo);
    $.header.openWindow($.make);
    load();
    exports.open = function() {
        loaded || load();
        $.header.openWindow($.friends);
    };
    exports.refresh = function() {
        load();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;