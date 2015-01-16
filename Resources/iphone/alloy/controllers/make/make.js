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
        top: "50",
        backgroundColor: "#fff"
    });
    $.__views.make.add($.__views.scroll);
    $.__views.__alloyId94 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        top: "0",
        id: "__alloyId94"
    });
    $.__views.scroll.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createView({
        height: "200",
        backgroundColor: "#f1f1f1",
        id: "__alloyId95"
    });
    $.__views.__alloyId94.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId96"
    });
    $.__views.__alloyId95.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createView({
        backgroundColor: "#333",
        width: "80",
        height: "80",
        borderRadius: "40",
        id: "__alloyId97"
    });
    $.__views.__alloyId96.add($.__views.__alloyId97);
    $.__views.photo = Ti.UI.createView({
        width: "50",
        height: "50",
        id: "photo"
    });
    $.__views.__alloyId97.add($.__views.photo);
    $.__views.name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 10,
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
    $.__views.__alloyId96.add($.__views.name);
    $.__views.main = Ti.UI.createTableView({
        top: 0,
        separatorStyle: Alloy.Globals._params.TableViewSeparatorStyle.NONE,
        id: "main",
        scrollable: "false",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId94.add($.__views.main);
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