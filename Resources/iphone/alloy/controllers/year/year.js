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
        fb.filter("year", _data.year, function(friends) {
            $.main.setData(friends);
        }, function() {}, "a " + _data.year + " model");
    }
    function showPleaseWait() {
        $.main.setData([]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "year/year";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.year = Ti.UI.createWindow({
        backgroundColor: "#f1f1f1",
        navBarHidden: true,
        id: "year"
    });
    $.__views.year && $.addTopLevelView($.__views.year);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "50",
        backgroundColor: "#fff"
    });
    $.__views.year.add($.__views.scroll);
    $.__views.__alloyId193 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        top: "0",
        id: "__alloyId193"
    });
    $.__views.scroll.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createView({
        height: "200",
        backgroundColor: "#f1f1f1",
        id: "__alloyId194"
    });
    $.__views.__alloyId193.add($.__views.__alloyId194);
    $.__views.name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 80
        },
        color: "#cecece",
        shadowColor: "#fff",
        shadowOffset: {
            x: 1,
            y: 1
        },
        shadowRadius: 3,
        id: "name"
    });
    $.__views.__alloyId194.add($.__views.name);
    $.__views.main = Ti.UI.createTableView({
        top: 0,
        separatorStyle: Alloy.Globals._params.TableViewSeparatorStyle.NONE,
        id: "main",
        scrollable: "false",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId193.add($.__views.main);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.year
    });
    $.__views.header.setParent($.__views.year);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var fb = require("Friends");
    var args = arguments[0] || {};
    var _data = args._data || {};
    $.name.setText(_data.year);
    $.header.openWindow($.year);
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