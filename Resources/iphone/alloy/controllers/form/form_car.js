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
        args._callBack(args._car);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "form/form_car";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        id: "main",
        layout: "vertical",
        height: Ti.UI.SIZE,
        bottom: "20"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    onClick ? $.__views.main.addEventListener("click", onClick) : __defers["$.__views.main!click!onClick"] = true;
    $.__views.logo = Ti.UI.createView({
        id: "logo",
        width: "120",
        height: "100",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.main.add($.__views.logo);
    $.__views.__alloyId57 = Ti.UI.createView({
        width: "80",
        height: "80",
        borderRadius: "40",
        backgroundColor: "#222",
        borderColor: "#fff",
        borderWidth: "5",
        id: "__alloyId57"
    });
    $.__views.logo.add($.__views.__alloyId57);
    $.__views.logo_image = Ti.UI.createImageView({
        id: "logo_image",
        width: "48",
        height: "48",
        borderRadius: "4"
    });
    $.__views.__alloyId57.add($.__views.logo_image);
    $.__views.model = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#40a3ff",
        font: {
            fontSize: 45
        },
        id: "model"
    });
    $.__views.main.add($.__views.model);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.logo_image.setImage("logos/48/" + args._car.logo);
    $.model.setText(args._car.model);
    __defers["$.__views.main!click!onClick"] && $.__views.main.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;