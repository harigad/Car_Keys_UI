function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function addCar() {
        Alloy.createController("signup/signup", {
            _callBack: function() {
                _callBack();
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/newcar";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createTableViewRow({
        top: "30%",
        borderRadius: 4,
        backgroundColor: "#f49033",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    addCar ? $.__views.main.addEventListener("click", addCar) : __defers["$.__views.main!click!addCar"] = true;
    $.__views.logo_container = Ti.UI.createView({
        top: 20,
        width: 50,
        height: 50,
        backgroundColor: "#333",
        borderRadius: 25,
        borderColor: "#ccc",
        borderWidth: 3,
        id: "logo_container"
    });
    $.__views.main.add($.__views.logo_container);
    $.__views.logo = Ti.UI.createView({
        width: 30,
        height: 30,
        backgroundImage: "logos/48/logo.png",
        id: "logo"
    });
    $.__views.logo_container.add($.__views.logo);
    $.__views.model = Ti.UI.createLabel({
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        text: "ADD NEW",
        id: "model"
    });
    $.__views.main.add($.__views.model);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    args._data || {};
    var _callBack = args._callBack;
    __defers["$.__views.main!click!addCar"] && $.__views.main.addEventListener("click", addCar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;