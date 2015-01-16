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
        if (args._color) {
            $.model.setBackgroundColor("#80ccff");
            $.year.setBackgroundColor("#80ccff");
            $.logo.setBackgroundColor("#80ccff");
            $.mileage_container.setBackgroundColor("#80ccff");
            $.cylinder_container.setBackgroundColor("#80ccff");
            $.hp_container.setBackgroundColor("#80ccff");
            $.model.setBackgroundColor("#80ccff");
            $.recalls_container.setBackgroundColor("#80ccff");
            $.schedules_container.setBackgroundColor("#80ccff");
        }
        $.logo_image.setImage("logos/48/" + _data.logo);
        $.year_name.setText(_data.year);
        $.model_name.setText(_data.model);
        $.cylinder.setText(_data.cylinder + " cylinder");
        if (_data.city > 0 && _data.highway > 0) $.mileage.setText(_data.city + "/" + _data.highway + " mpg"); else if (_data.city > 0) $.mileage.setText(_data.city + " mpg (city)"); else if (_data.highway > 0) $.mileage.setText(_data.city + " mpg (higway)"); else {
            $.mileage.setText("mpg not available");
            $.mileage.setOpacity(.5);
        }
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
    $.__views.car = Ti.UI.createTableViewRow({
        layout: "vertical",
        height: Ti.UI.SIZE,
        selectedBackgroundColor: "transparent",
        id: "car"
    });
    $.__views.car && $.addTopLevelView($.__views.car);
    $.__views.main = Ti.UI.createView({
        layout: "horizontal",
        id: "main",
        height: Ti.UI.SIZE
    });
    $.__views.car.add($.__views.main);
    $.__views.model = Ti.UI.createView({
        id: "model",
        backgroundColor: "#40a3ff",
        width: "200",
        height: "200",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.main.add($.__views.model);
    $.__views.__alloyId0 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.model.add($.__views.__alloyId0);
    $.__views.model_name = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 36
        },
        color: "#fff",
        id: "model_name"
    });
    $.__views.__alloyId0.add($.__views.model_name);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId1"
    });
    $.__views.main.add($.__views.__alloyId1);
    $.__views.year = Ti.UI.createView({
        id: "year",
        backgroundColor: "#40a3ff",
        width: "120",
        height: "100",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.__alloyId1.add($.__views.year);
    goToYear ? $.__views.year.addEventListener("click", goToYear) : __defers["$.__views.year!click!goToYear"] = true;
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
        backgroundColor: "#40a3ff",
        width: "120",
        height: "100",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.__alloyId1.add($.__views.logo);
    goToMake ? $.__views.logo.addEventListener("click", goToMake) : __defers["$.__views.logo!click!goToMake"] = true;
    $.__views.__alloyId2 = Ti.UI.createView({
        width: "80",
        height: "80",
        borderRadius: "40",
        backgroundColor: "#222",
        borderColor: "#fff",
        borderWidth: "5",
        id: "__alloyId2"
    });
    $.__views.logo.add($.__views.__alloyId2);
    $.__views.logo_image = Ti.UI.createImageView({
        id: "logo_image",
        width: "48",
        height: "48",
        borderRadius: "4"
    });
    $.__views.__alloyId2.add($.__views.logo_image);
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "#40a3ff",
        width: Ti.UI.FILL,
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
    $.__views.__alloyId3 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId3"
    });
    $.__views.main.add($.__views.__alloyId3);
    $.__views.mileage_container = Ti.UI.createView({
        id: "mileage_container",
        backgroundColor: "#40a3ff",
        width: "160",
        height: "80",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.__alloyId3.add($.__views.mileage_container);
    $.__views.mileage = Ti.UI.createLabel({
        font: {
            fontSize: 16
        },
        color: "#fff",
        id: "mileage"
    });
    $.__views.mileage_container.add($.__views.mileage);
    $.__views.cylinder_container = Ti.UI.createView({
        id: "cylinder_container",
        backgroundColor: "#40a3ff",
        width: "160",
        height: "80",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.__alloyId3.add($.__views.cylinder_container);
    goToCylinder ? $.__views.cylinder_container.addEventListener("click", goToCylinder) : __defers["$.__views.cylinder_container!click!goToCylinder"] = true;
    $.__views.cylinder = Ti.UI.createLabel({
        font: {
            fontSize: 16
        },
        color: "#fff",
        id: "cylinder"
    });
    $.__views.cylinder_container.add($.__views.cylinder);
    $.__views.hp_container = Ti.UI.createView({
        id: "hp_container",
        backgroundColor: "#40a3ff",
        width: "160",
        height: "160",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.main.add($.__views.hp_container);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: "120",
        height: "120",
        borderRadius: "60",
        backgroundColor: "#aaa",
        borderColor: "#fff",
        borderWidth: "5",
        id: "__alloyId4"
    });
    $.__views.hp_container.add($.__views.__alloyId4);
    $.__views.hp = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: 16
        },
        id: "hp"
    });
    $.__views.__alloyId4.add($.__views.hp);
    $.__views.recalls_container = Ti.UI.createView({
        id: "recalls_container",
        backgroundColor: "#40a3ff",
        width: "160",
        height: "160",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.main.add($.__views.recalls_container);
    $.__views.recalls = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: 16
        },
        text: "recalls",
        id: "recalls"
    });
    $.__views.recalls_container.add($.__views.recalls);
    $.__views.schedules_container = Ti.UI.createView({
        id: "schedules_container",
        backgroundColor: "#40a3ff",
        width: "160",
        height: "160",
        borderWidth: "0.5",
        borderColor: "#fff"
    });
    $.__views.main.add($.__views.schedules_container);
    $.__views.schedules = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: 16
        },
        text: "schedules",
        id: "schedules"
    });
    $.__views.schedules_container.add($.__views.schedules);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    args._editable;
    args._callBack;
    draw();
    __defers["$.__views.year!click!goToYear"] && $.__views.year.addEventListener("click", goToYear);
    __defers["$.__views.logo!click!goToMake"] && $.__views.logo.addEventListener("click", goToMake);
    __defers["$.__views.cylinder_container!click!goToCylinder"] && $.__views.cylinder_container.addEventListener("click", goToCylinder);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;