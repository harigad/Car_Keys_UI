function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goToProfile() {
        Alloy.createController("profile/profile", {
            _data: _data
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "friends/friend";
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
        selectionStyle: "Titanium.UI.iPhone.TableViewCellSelectionStyle",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    goToProfile ? $.__views.main.addEventListener("click", goToProfile) : __defers["$.__views.main!click!goToProfile"] = true;
    $.__views.__alloyId59 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: "5",
        bottom: "5",
        id: "__alloyId59"
    });
    $.__views.main.add($.__views.__alloyId59);
    $.__views.bar = Ti.UI.createView({
        backgroundColor: "#ffa633",
        height: 1,
        left: 45,
        id: "bar"
    });
    $.__views.__alloyId59.add($.__views.bar);
    $.__views.container = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "container"
    });
    $.__views.__alloyId59.add($.__views.container);
    $.__views.photo = Ti.UI.createView({
        left: 40,
        width: 50,
        height: 50,
        backgroundColor: "#ccc",
        borderRadius: 25,
        borderColor: "#ccc",
        borderWidth: 3,
        id: "photo"
    });
    $.__views.container.add($.__views.photo);
    $.__views.txtContainer = Ti.UI.createView({
        left: 10,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "txtContainer"
    });
    $.__views.container.add($.__views.txtContainer);
    $.__views.topLine = Ti.UI.createView({
        bottom: 5,
        left: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "topLine"
    });
    $.__views.txtContainer.add($.__views.topLine);
    $.__views.name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#999",
        font: {
            fontSize: 14
        },
        id: "name"
    });
    $.__views.topLine.add($.__views.name);
    $.__views.bottomLine = Ti.UI.createView({
        top: 5,
        left: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "bottomLine"
    });
    $.__views.txtContainer.add($.__views.bottomLine);
    $.__views.plate = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333",
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        id: "plate"
    });
    $.__views.bottomLine.add($.__views.plate);
    $.__views.ridealong = Ti.UI.createLabel({
        left: 5,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#ffa633",
        bubbleParent: false,
        font: {
            fontSize: 14
        },
        text: "(check-in)",
        id: "ridealong"
    });
    $.__views.bottomLine.add($.__views.ridealong);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _data = args._data || {};
    $.photo.setBackgroundImage(_data.photo);
    $.name.setText(_data.name);
    $.plate.setText(_data.model);
    __defers["$.__views.main!click!goToProfile"] && $.__views.main.addEventListener("click", goToProfile);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;