function Controller() {
    function goToMake() {
        Alloy.createController("make/make", {
            _data: _data
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feed/separator";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: 5,
        bottom: 5,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.bar = Ti.UI.createView({
        height: 5,
        backgroundColor: "#5689d5",
        top: 23,
        opacity: .5,
        id: "bar"
    });
    $.__views.main.add($.__views.bar);
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
    $.__views.main.add($.__views.logo_container);
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