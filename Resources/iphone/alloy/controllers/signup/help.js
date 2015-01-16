function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function close() {
        $.help.close();
        _callBack();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/help";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.help = Ti.UI.createWindow({
        backgroundColor: "#f1f1f1",
        navBarHidden: true,
        id: "help"
    });
    $.__views.help && $.addTopLevelView($.__views.help);
    $.__views.main = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: 20,
        left: 20,
        right: 20,
        id: "main"
    });
    $.__views.help.add($.__views.main);
    $.__views.header = Ti.UI.createLabel({
        color: "#ccc",
        shadowColor: "#fff",
        shadowOffset: {
            x: 1,
            y: 1
        },
        shadowRadius: 3,
        font: {
            fontSize: 36
        },
        text: "Where to find my VIN Number",
        id: "header"
    });
    $.__views.main.add($.__views.header);
    $.__views.__alloyId190 = Ti.UI.createLabel({
        left: 10,
        top: 15,
        color: "#666",
        font: {
            fontSize: 16
        },
        text: "It is printed on you Insurance ID Card",
        id: "__alloyId190"
    });
    $.__views.main.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createLabel({
        left: 10,
        top: 15,
        color: "#666",
        font: {
            fontSize: 16
        },
        text: "On the driver's side door. Where the open end of the door meets the car.",
        id: "__alloyId191"
    });
    $.__views.main.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createLabel({
        left: 10,
        top: 15,
        color: "#666",
        font: {
            fontSize: 16
        },
        text: "On the driver's side dashboard. Stand outside the vehicle and look at the corner where the dashboard meets the windshield.",
        id: "__alloyId192"
    });
    $.__views.main.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createView({
        left: 20,
        right: 20,
        height: Ti.UI.SIZE,
        top: 30,
        borderRadius: 4,
        backgroundColor: "#40a3ff",
        id: "__alloyId193"
    });
    $.__views.main.add($.__views.__alloyId193);
    close ? $.__views.__alloyId193.addEventListener("click", close) : __defers["$.__views.__alloyId193!click!close"] = true;
    $.__views.__alloyId194 = Ti.UI.createLabel({
        color: "#fff",
        top: 20,
        bottom: 20,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: "Of course I know that!",
        id: "__alloyId194"
    });
    $.__views.__alloyId193.add($.__views.__alloyId194);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _callBack = args._callBack;
    $.help.open({
        transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
    });
    __defers["$.__views.__alloyId193!click!close"] && $.__views.__alloyId193.addEventListener("click", close);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;