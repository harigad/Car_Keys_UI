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
        fb.filter("cylinder", _data.cylinder, function(friends) {
            $.main.setData(friends);
        }, function() {}, "a V." + _data.cylinder + " engine");
    }
    function showPleaseWait() {
        $.main.setData([]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cylinder/cylinder";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.cylinder = Ti.UI.createWindow({
        backgroundColor: "#f1f1f1",
        navBarHidden: true,
        id: "cylinder"
    });
    $.__views.cylinder && $.addTopLevelView($.__views.cylinder);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "50",
        backgroundColor: "#fff"
    });
    $.__views.cylinder.add($.__views.scroll);
    $.__views.__alloyId43 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        top: "0",
        id: "__alloyId43"
    });
    $.__views.scroll.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        height: "200",
        backgroundColor: "#f1f1f1",
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 80
        },
        color: "#cecece",
        id: "name"
    });
    $.__views.__alloyId44.add($.__views.name);
    $.__views.main = Ti.UI.createTableView({
        top: 0,
        separatorStyle: Alloy.Globals._params.TableViewSeparatorStyle.NONE,
        id: "main",
        scrollable: "false",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId43.add($.__views.main);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.cylinder
    });
    $.__views.header.setParent($.__views.cylinder);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var fb = require("Friends");
    var args = arguments[0] || {};
    var _data = args._data || {};
    $.name.setText("V." + _data.cylinder);
    $.header.openWindow($.cylinder);
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