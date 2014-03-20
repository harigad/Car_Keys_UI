function Controller() {
    function goToModel() {
        Alloy.createController("model/model", {
            _data: _data
        });
    }
    function goToMake() {
        Alloy.createController("make/make", {
            _data: _data
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile/car";
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
    goToModel ? $.__views.model_container.addEventListener("click", goToModel) : __defers["$.__views.model_container!click!goToModel"] = true;
    $.__views.bar = Ti.UI.createView({
        backgroundColor: "#fff",
        height: 30,
        left: 0,
        top: 0,
        opacity: .5,
        id: "bar"
    });
    $.__views.model_container.add($.__views.bar);
    $.__views.__alloyId9 = Ti.UI.createView({
        top: "0",
        height: Ti.UI.SIZE,
        id: "__alloyId9"
    });
    $.__views.model_container.add($.__views.__alloyId9);
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
    $.__views.__alloyId9.add($.__views.logo_container);
    goToMake ? $.__views.logo_container.addEventListener("click", goToMake) : __defers["$.__views.logo_container!click!goToMake"] = true;
    $.__views.logo = Ti.UI.createView({
        width: 30,
        height: 30,
        backgroundImage: "logos/48/Acura.png",
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
    $.__views.__alloyId9.add($.__views.topLine);
    $.__views.model = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#2179ca",
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        id: "model"
    });
    $.__views.topLine.add($.__views.model);
    $.__views.year = Ti.UI.createLabel({
        left: 85,
        bottom: 10,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#999",
        font: {
            fontSize: 11
        },
        id: "year"
    });
    $.__views.model_container.add($.__views.year);
    $.__views.data_container = Ti.UI.createView({
        id: "data_container",
        layout: "vertical",
        height: Ti.UI.SIZE
    });
    $.__views.main.add($.__views.data_container);
    $.__views.__alloyId10 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        bottom: 10,
        id: "__alloyId10"
    });
    $.__views.data_container.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createView({
        width: 75,
        height: Ti.UI.SIZE,
        left: 0,
        top: 0,
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        width: 75,
        color: "#999",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "owned:",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        width: 190,
        height: Ti.UI.SIZE,
        left: 5,
        top: 0,
        layout: "horizontal",
        id: "__alloyId13"
    });
    $.__views.__alloyId10.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        color: "#333",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        bottom: 10,
        id: "__alloyId15"
    });
    $.__views.data_container.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        width: 75,
        height: Ti.UI.SIZE,
        left: 0,
        top: 0,
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        width: 75,
        color: "#999",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "shares with:",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        width: 190,
        height: Ti.UI.SIZE,
        left: 5,
        top: 0,
        layout: "horizontal",
        id: "__alloyId18"
    });
    $.__views.__alloyId15.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        color: "#2179ca",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        text: "",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        bottom: 10,
        id: "__alloyId20"
    });
    $.__views.data_container.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        width: 75,
        height: Ti.UI.SIZE,
        left: 0,
        top: 0,
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        width: 75,
        color: "#999",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "radio stations:",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        width: 190,
        height: Ti.UI.SIZE,
        left: 5,
        top: 0,
        layout: "horizontal",
        id: "__alloyId23"
    });
    $.__views.__alloyId20.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        color: "#2179ca",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        color: "#333",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        text: ",",
        id: "__alloyId25"
    });
    $.__views.__alloyId23.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        color: "#2179ca",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        id: "__alloyId26"
    });
    $.__views.__alloyId23.add($.__views.__alloyId26);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    $.logo.setBackgroundImage("logos/48/" + _data.logo);
    $.model.setText(_data.model);
    _data.year && $.year.setText("'" + _data.year);
    __defers["$.__views.model_container!click!goToModel"] && $.__views.model_container.addEventListener("click", goToModel);
    __defers["$.__views.logo_container!click!goToMake"] && $.__views.logo_container.addEventListener("click", goToMake);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;