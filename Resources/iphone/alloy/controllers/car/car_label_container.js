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
    this.__controllerPath = "car/car_label_container";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.titledate_container = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        bottom: 5,
        id: "titledate_container"
    });
    $.__views.titledate_container && $.addTopLevelView($.__views.titledate_container);
    $.__views.__alloyId11 = Ti.UI.createView({
        width: 75,
        height: Ti.UI.SIZE,
        left: 0,
        top: 0,
        id: "__alloyId11"
    });
    $.__views.titledate_container.add($.__views.__alloyId11);
    $.__views.title = Ti.UI.createLabel({
        width: 75,
        color: "#999",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "title"
    });
    $.__views.__alloyId11.add($.__views.title);
    $.__views.__alloyId12 = Ti.UI.createView({
        width: 150,
        height: Ti.UI.SIZE,
        left: 10,
        top: 0,
        id: "__alloyId12"
    });
    $.__views.titledate_container.add($.__views.__alloyId12);
    $.__views.content = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        color: "#666",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        id: "content"
    });
    $.__views.__alloyId12.add($.__views.content);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.setTitle = function(title) {
        $.title.setText(title);
    };
    exports.add = function(txt) {
        $.content.setText(txt);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;