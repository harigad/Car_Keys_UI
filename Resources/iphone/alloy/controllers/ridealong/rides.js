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
    this.__controllerPath = "ridealong/rides";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.rides = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "rides"
    });
    $.__views.rides && $.addTopLevelView($.__views.rides);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "50"
    });
    $.__views.rides.add($.__views.scroll);
    $.__views.main = Ti.UI.createTableView({
        top: 10,
        separatorStyle: Alloy.Globals._params.TableViewSeparatorStyle.NONE,
        backgroundColor: "#fff",
        id: "main"
    });
    $.__views.scroll.add($.__views.main);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.rides
    });
    $.__views.header.setParent($.__views.rides);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.header.openWindow($.rides);
    $.header.setTitle("rides");
    var header_row = Ti.UI.createTableViewRow();
    var header_label = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        left: 20,
        text: "+ ride request",
        color: "#40a3ff",
        font: {
            fontSize: 40
        }
    });
    header_row.add(header_label);
    $.main.setData([ header_row ]);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;