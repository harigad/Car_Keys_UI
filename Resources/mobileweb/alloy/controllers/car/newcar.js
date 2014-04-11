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
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        top: 0,
        bottom: 10,
        borderRadius: 4,
        backgroundColor: "#eee",
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.model_container = Ti.UI.createView({
        top: 0,
        bottom: 10,
        height: Ti.UI.SIZE,
        id: "model_container"
    });
    $.__views.main.add($.__views.model_container);
    addCar ? $.__views.model_container.addEventListener("click", addCar) : __defers["$.__views.model_container!click!addCar"] = true;
    $.__views.bar = Ti.UI.createView({
        backgroundColor: "#fff",
        height: 30,
        left: 0,
        top: 0,
        opacity: .5,
        id: "bar"
    });
    $.__views.model_container.add($.__views.bar);
    $.__views.__alloyId11 = Ti.UI.createView({
        top: "0",
        height: Ti.UI.SIZE,
        id: "__alloyId11"
    });
    $.__views.model_container.add($.__views.__alloyId11);
    $.__views.logo_container = Ti.UI.createView({
        left: 25,
        width: 50,
        height: 50,
        backgroundColor: "#333",
        borderRadius: 25,
        borderColor: "#ccc",
        borderWidth: 3,
        bubbleParent: false,
        id: "logo_container"
    });
    $.__views.__alloyId11.add($.__views.logo_container);
    $.__views.logo = Ti.UI.createView({
        width: 30,
        height: 30,
        backgroundImage: "logos/48/logo.png",
        id: "logo"
    });
    $.__views.logo_container.add($.__views.logo);
    $.__views.topLine = Ti.UI.createView({
        left: 85,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "topLine"
    });
    $.__views.__alloyId11.add($.__views.topLine);
    $.__views.model = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#2179ca",
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        text: "ADD NEW",
        id: "model"
    });
    $.__views.topLine.add($.__views.model);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    args._data || {};
    var _callBack = args._callBack;
    __defers["$.__views.model_container!click!addCar"] && $.__views.model_container.addEventListener("click", addCar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;