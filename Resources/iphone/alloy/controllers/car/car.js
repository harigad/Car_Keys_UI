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
        $.user_photo.setImage(_data.photo);
        $.logo_image.setImage("logos/48/" + _data.logo);
        $.year_name.setText(_data.year);
        $.owner_name.setText(_data.name.split(" ")[0] + "'s");
        $.model_name.setText(_data.model);
        $.cylinder.setText(_data.cylinder + " cylinder");
        $.hp.setText(_data.hp + " Horses");
        _data.images ? $.photo_image.setImage(_data.images[0]) : login.ownsCar(_data) ? $.photo_image.setImage("common/upload_photo_300_150.png") : $.photo_image.setImage("common/no_photo_300_150.png");
    }
    function goToMake() {
        Alloy.createController("make/make", {
            _data: _data
        });
    }
    function goToYear() {
        Alloy.createController("year/year", {
            _data: _data
        });
    }
    function goToCylinder() {
        Alloy.createController("cylinder/cylinder", {
            _data: _data
        });
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
    var __defers = {};
    $.__views.car = Ti.UI.createWindow({
        navBarHidden: "true",
        backgroundColor: "#f1f1f1",
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
        backgroundColor: "#eee",
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
    $.__views.user_photo = Ti.UI.createImageView({
        id: "user_photo",
        width: "50",
        height: "50",
        borderWidth: "2.5",
        borderColor: "#cecece",
        bottom: "5",
        borderRadius: "25",
        backgroundColor: "#eee"
    });
    $.__views.__alloyId1.add($.__views.user_photo);
    $.__views.owner_name = Ti.UI.createLabel({
        font: {
            fontSize: 20
        },
        bottom: 2,
        color: "#ccc",
        id: "owner_name"
    });
    $.__views.__alloyId1.add($.__views.owner_name);
    $.__views.model_name = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 26
        },
        color: "#ccc",
        shadowColor: "#fff",
        shadowOffset: {
            x: 1,
            y: 1
        },
        shadowRadius: 3,
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
        backgroundColor: "#e1e1e1",
        width: "120",
        height: "100",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.__alloyId2.add($.__views.year);
    goToYear ? $.__views.year.addEventListener("click", goToYear) : __defers["$.__views.year!click!goToYear"] = true;
    $.__views.year_name = Ti.UI.createLabel({
        font: {
            fontSize: 26
        },
        color: "#777",
        id: "year_name"
    });
    $.__views.year.add($.__views.year_name);
    $.__views.logo = Ti.UI.createView({
        id: "logo",
        backgroundColor: "#f1f1f1",
        width: "120",
        height: "100",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.__alloyId2.add($.__views.logo);
    goToMake ? $.__views.logo.addEventListener("click", goToMake) : __defers["$.__views.logo!click!goToMake"] = true;
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
        left: "0"
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
        backgroundColor: "#f1f1f1",
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
        color: "#777",
        id: "mileage"
    });
    $.__views.__alloyId5.add($.__views.mileage);
    $.__views.__alloyId6 = Ti.UI.createView({
        backgroundColor: "#e1e1e1",
        width: "160",
        height: "80",
        borderWidth: "0.5",
        borderColor: "#fff",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    goToCylinder ? $.__views.__alloyId6.addEventListener("click", goToCylinder) : __defers["$.__views.__alloyId6!click!goToCylinder"] = true;
    $.__views.cylinder = Ti.UI.createLabel({
        font: {
            fontSize: 16
        },
        color: "#777",
        id: "cylinder"
    });
    $.__views.__alloyId6.add($.__views.cylinder);
    $.__views.__alloyId7 = Ti.UI.createView({
        backgroundColor: "#eee",
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
        backgroundColor: "#dedede",
        borderColor: "#fff",
        borderWidth: "5",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.hp = Ti.UI.createLabel({
        color: "#777",
        font: {
            fontSize: 16
        },
        id: "hp"
    });
    $.__views.__alloyId8.add($.__views.hp);
    $.__views.__alloyId9 = Ti.UI.createView({
        backgroundColor: "#eee",
        width: "160",
        height: "160",
        borderWidth: "0.5",
        borderColor: "#fff",
        id: "__alloyId9"
    });
    $.__views.main.add($.__views.__alloyId9);
    $.__views.recalls = Ti.UI.createLabel({
        color: "#777",
        font: {
            fontSize: 16
        },
        text: "recalls",
        id: "recalls"
    });
    $.__views.__alloyId9.add($.__views.recalls);
    $.__views.__alloyId10 = Ti.UI.createView({
        backgroundColor: "#f1f1f1",
        width: "160",
        height: "160",
        borderWidth: "0.5",
        borderColor: "#fff",
        id: "__alloyId10"
    });
    $.__views.main.add($.__views.__alloyId10);
    $.__views.schedules = Ti.UI.createLabel({
        color: "#7f7f7f",
        font: {
            fontSize: 16
        },
        text: "schedules",
        id: "schedules"
    });
    $.__views.__alloyId10.add($.__views.schedules);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.car
    });
    $.__views.header.setParent($.__views.car);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    args._editable;
    args._callBack;
    $.header.openWindow($.car);
    draw();
    __defers["$.__views.year!click!goToYear"] && $.__views.year.addEventListener("click", goToYear);
    __defers["$.__views.logo!click!goToMake"] && $.__views.logo.addEventListener("click", goToMake);
    __defers["$.__views.__alloyId6!click!goToCylinder"] && $.__views.__alloyId6.addEventListener("click", goToCylinder);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;