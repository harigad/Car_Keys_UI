function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goToMake() {
        Alloy.createController("make/make", {
            _data: _data
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "friends/friend_separator";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createTableViewRow({
        className: "row",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.__alloyId60 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: "5",
        bottom: "5",
        id: "__alloyId60"
    });
    $.__views.main.add($.__views.__alloyId60);
    $.__views.bar = Ti.UI.createView({
        height: 5,
        backgroundColor: "#cecece",
        top: 23,
        opacity: .5,
        id: "bar"
    });
    $.__views.__alloyId60.add($.__views.bar);
    $.__views.logo_container = Ti.UI.createView({
        left: 40,
        top: 0,
        backgroundColor: "#333",
        borderRadius: 25,
        width: 50,
        height: 50,
        borderWidth: 3,
        borderColor: "#ccc",
        id: "logo_container"
    });
    $.__views.__alloyId60.add($.__views.logo_container);
    goToMake ? $.__views.logo_container.addEventListener("click", goToMake) : __defers["$.__views.logo_container!click!goToMake"] = true;
    $.__views.logo = Ti.UI.createImageView({
        width: 30,
        height: 30,
        image: "",
        id: "logo"
    });
    $.__views.logo_container.add($.__views.logo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _data = args._data || {};
    $.logo.setImage("logos/48/" + _data.logo);
    __defers["$.__views.logo_container!click!goToMake"] && $.__views.logo_container.addEventListener("click", goToMake);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;