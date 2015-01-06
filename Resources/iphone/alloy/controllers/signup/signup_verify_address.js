function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onReturn() {
        var address = $.address.getValue();
        _callBack(address);
        $.signup_verify_address.close();
    }
    function onCancel() {
        _callBack();
        $.signup_verify_address.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/signup_verify_address";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.signup_verify_address = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        navBarHidden: true,
        id: "signup_verify_address"
    });
    $.__views.signup_verify_address && $.addTopLevelView($.__views.signup_verify_address);
    $.__views.bgImage = Ti.UI.createImageView({
        id: "bgImage"
    });
    $.__views.signup_verify_address.add($.__views.bgImage);
    $.__views.__alloyId171 = Ti.UI.createView({
        top: "0",
        height: "60",
        backgroundColor: "#f49033",
        id: "__alloyId171"
    });
    $.__views.signup_verify_address.add($.__views.__alloyId171);
    $.__views.__alloyId172 = Ti.UI.createView({
        top: "10",
        height: "50",
        id: "__alloyId172"
    });
    $.__views.__alloyId171.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ffa633",
        borderRadius: 4,
        left: "10",
        id: "__alloyId173"
    });
    $.__views.__alloyId172.add($.__views.__alloyId173);
    onCancel ? $.__views.__alloyId173.addEventListener("click", onCancel) : __defers["$.__views.__alloyId173!click!onCancel"] = true;
    $.__views.__alloyId174 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "cancel",
        id: "__alloyId174"
    });
    $.__views.__alloyId173.add($.__views.__alloyId174);
    $.__views.question = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#fff",
        opacity: .5,
        text: "Verify your registration address!",
        id: "question"
    });
    $.__views.__alloyId172.add($.__views.question);
    $.__views.__alloyId175 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ffa633",
        borderRadius: 4,
        right: "10",
        id: "__alloyId175"
    });
    $.__views.__alloyId172.add($.__views.__alloyId175);
    onReturn ? $.__views.__alloyId175.addEventListener("click", onReturn) : __defers["$.__views.__alloyId175!click!onReturn"] = true;
    $.__views.__alloyId176 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "Verify",
        id: "__alloyId176"
    });
    $.__views.__alloyId175.add($.__views.__alloyId176);
    $.__views.main = Ti.UI.createView({
        layout: "vertical",
        left: 10,
        right: 10,
        top: 50,
        bottom: 10,
        id: "main"
    });
    $.__views.signup_verify_address.add($.__views.main);
    $.__views.__alloyId177 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 20,
        right: 20,
        top: 0,
        id: "__alloyId177"
    });
    $.__views.main.add($.__views.__alloyId177);
    $.__views.address = Ti.UI.createTextField({
        color: "#fff",
        left: 0,
        right: 0,
        font: {
            fontSize: 18
        },
        height: 60,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        id: "address",
        hintText: "Enter your address line#"
    });
    $.__views.__alloyId177.add($.__views.address);
    onReturn ? $.__views.address.addEventListener("return", onReturn) : __defers["$.__views.address!return!onReturn"] = true;
    $.__views.__alloyId178 = Ti.UI.createView({
        height: 1,
        left: 20,
        right: 20,
        backgroundColor: "#fff",
        opacity: .3,
        id: "__alloyId178"
    });
    $.__views.main.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 20,
        right: 20,
        top: 0,
        layout: "horizontal",
        id: "__alloyId179"
    });
    $.__views.main.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createView({
        borderRadius: 4,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: 10,
        id: "__alloyId180"
    });
    $.__views.__alloyId179.add($.__views.__alloyId180);
    $.__views.city = Ti.UI.createLabel({
        color: "#fff",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 20,
        bottom: 20,
        font: {
            fontSize: 14
        },
        opacity: .6,
        id: "city"
    });
    $.__views.__alloyId180.add($.__views.city);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _zipcode = args._zipcode || "";
    var _callBack = args._callBack;
    _data.step || 3;
    $.city.setText(_data.city + ", " + _data.state + " - " + _zipcode);
    $.signup_verify_address.open();
    __defers["$.__views.__alloyId173!click!onCancel"] && $.__views.__alloyId173.addEventListener("click", onCancel);
    __defers["$.__views.__alloyId175!click!onReturn"] && $.__views.__alloyId175.addEventListener("click", onReturn);
    __defers["$.__views.address!return!onReturn"] && $.__views.address.addEventListener("return", onReturn);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;