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
    this.__controllerPath = "car/share/car_data_container";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.titledate_container = Ti.UI.createView({
        id: "titledate_container"
    });
    $.__views.titledate_container && $.addTopLevelView($.__views.titledate_container);
    $.__views.__alloyId20 = Ti.UI.createView({
        id: "__alloyId20"
    });
    $.__views.titledate_container.add($.__views.__alloyId20);
    $.__views.header = Ti.UI.createLabel({
        id: "header"
    });
    $.__views.__alloyId20.add($.__views.header);
    $.__views.__alloyId21 = Ti.UI.createView({
        id: "__alloyId21"
    });
    $.__views.titledate_container.add($.__views.__alloyId21);
    $.__views.content = Ti.UI.createLabel({
        id: "content"
    });
    $.__views.__alloyId21.add($.__views.content);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;