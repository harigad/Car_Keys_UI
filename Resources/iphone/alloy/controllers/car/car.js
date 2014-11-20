function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function draw() {
        $.logo_image.setImage("logos/48/" + _data.logo);
        $.year_name.setText(_data.year);
        $.model_name.setText(_data.model);
        $.photo_image.setImage("http://www.autoguide.com/auto-news/wp-content/uploads//2013/03/2014-infiniti-q50.jpg");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/car";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.car = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "#fff",
        id: "car"
    });
    $.__views.car && $.addTopLevelView($.__views.car);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "0",
        height: Ti.UI.FILL
    });
    $.__views.car.add($.__views.scroll);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        top: "60",
        height: Ti.UI.SIZE,
        id: "__alloyId0"
    });
    $.__views.scroll.add($.__views.__alloyId0);
    $.__views.main = Ti.UI.createView({
        layout: "horizontal",
        id: "main",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId0.add($.__views.main);
    $.__views.model = Ti.UI.createView({
        id: "model",
        backgroundColor: "#444",
        width: "200",
        height: "200",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.main.add($.__views.model);
    $.__views.__alloyId1 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId1"
    });
    $.__views.model.add($.__views.__alloyId1);
    $.__views.owner_name = Ti.UI.createLabel({
        font: {
            fontSize: 16
        },
        bottom: 2,
        text: "Hari's",
        color: "#999",
        id: "owner_name"
    });
    $.__views.__alloyId1.add($.__views.owner_name);
    $.__views.model_name = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 26
        },
        color: "#fff",
        id: "model_name"
    });
    $.__views.__alloyId1.add($.__views.model_name);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId2"
    });
    $.__views.main.add($.__views.__alloyId2);
    $.__views.year = Ti.UI.createView({
        id: "year",
        backgroundColor: "#555",
        width: "120",
        height: "100",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.__alloyId2.add($.__views.year);
    $.__views.year_name = Ti.UI.createLabel({
        font: {
            fontSize: 26
        },
        color: "#fff",
        id: "year_name"
    });
    $.__views.year.add($.__views.year_name);
    $.__views.logo = Ti.UI.createView({
        id: "logo",
        backgroundColor: "#333",
        width: "120",
        height: "100",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.__alloyId2.add($.__views.logo);
    $.__views.__alloyId3 = Ti.UI.createView({
        width: "80",
        height: "80",
        borderRadius: "40",
        backgroundColor: "#222",
        borderColor: "#666",
        borderWidth: "5",
        id: "__alloyId3"
    });
    $.__views.logo.add($.__views.__alloyId3);
    $.__views.logo_image = Ti.UI.createImageView({
        id: "logo_image",
        width: "48",
        height: "48",
        borderRadius: "4"
    });
    $.__views.__alloyId3.add($.__views.logo_image);
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "#aaa",
        width: "320",
        height: Ti.UI.SIZE
    });
    $.__views.main.add($.__views.photo);
    $.__views.photo_image = Ti.UI.createImageView({
        "with": "320",
        id: "photo_image",
        top: "0",
        left: "0",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.photo.add($.__views.photo_image);
    $.__views.__alloyId4 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId4"
    });
    $.__views.main.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        backgroundColor: "#73a4e7",
        width: "160",
        height: "80",
        borderWidth: "0.5",
        borderColor: "#fff",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.mileage = Ti.UI.createLabel({
        font: {
            fontSize: 16
        },
        text: "17 / 25 mpg",
        color: "#fff",
        id: "mileage"
    });
    $.__views.__alloyId5.add($.__views.mileage);
    $.__views.__alloyId6 = Ti.UI.createView({
        backgroundColor: "#6590f1",
        width: "160",
        height: "80",
        borderWidth: "0.5",
        borderColor: "#fff",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.cylinder = Ti.UI.createLabel({
        font: {
            fontSize: 16
        },
        text: "V.6",
        color: "#fff",
        id: "cylinder"
    });
    $.__views.__alloyId6.add($.__views.cylinder);
    $.__views.__alloyId7 = Ti.UI.createView({
        backgroundColor: "#5190ca",
        width: "160",
        height: "160",
        borderWidth: "0.5",
        borderColor: "#fff",
        id: "__alloyId7"
    });
    $.__views.main.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
        width: "120",
        height: "120",
        borderRadius: "60",
        backgroundColor: "#5190ca",
        borderColor: "#fff",
        borderWidth: "5",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.hp = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: 16
        },
        text: "320 Horses",
        id: "hp"
    });
    $.__views.__alloyId8.add($.__views.hp);
    $.__views.cylinder = Ti.UI.createView({
        font: {
            fontSize: 16
        },
        id: "cylinder",
        backgroundColor: "#7dc891",
        width: "160",
        height: "160",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.main.add($.__views.cylinder);
    $.__views.recalls = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: 16
        },
        text: "recalls",
        id: "recalls"
    });
    $.__views.cylinder.add($.__views.recalls);
    $.__views.hp = Ti.UI.createView({
        color: "#fff",
        font: {
            fontSize: 16
        },
        id: "hp",
        backgroundColor: "#8ae671",
        width: "160",
        height: "160",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.main.add($.__views.hp);
    $.__views.schedules = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: 16
        },
        text: "schedules",
        id: "schedules"
    });
    $.__views.hp.add($.__views.schedules);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.car
    });
    $.__views.header.setParent($.__views.car);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    args._editable;
    args._callBack;
    $.header.openWindow($.car);
    draw();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;