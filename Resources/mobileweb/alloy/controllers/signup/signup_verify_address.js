function Controller() {
    function onReturn() {
        var address = $.address.getValue();
        _callBack(address);
        $.signup_verify_address.close();
    }
    function onClick() {}
    function onCancel() {
        _callBack();
        $.signup_verify_address.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/signup_verify_address";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.signup_verify_address = Ti.UI.createWindow({
        backgroundColor: "#333",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "signup_verify_address"
    });
    $.__views.signup_verify_address && $.addTopLevelView($.__views.signup_verify_address);
    $.__views.bgImage = Ti.UI.createImageView({
        id: "bgImage"
    });
    $.__views.signup_verify_address.add($.__views.bgImage);
    $.__views.main = Ti.UI.createView({
        layout: "vertical",
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
        id: "main"
    });
    $.__views.signup_verify_address.add($.__views.main);
    $.__views.logo_container = Ti.UI.createView({
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
        id: "logo"
    });
    $.__views.logo_container.add($.__views.logo);
    $.__views.progress_bar = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: 0,
        top: 10,
        bottom: 10,
        visible: false,
        id: "progress_bar"
    });
    $.__views.main.add($.__views.progress_bar);
    $.__views.ball1 = Ti.UI.createView({
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: "#555",
        id: "ball1"
    });
    $.__views.progress_bar.add($.__views.ball1);
    $.__views.__alloyId103 = Ti.UI.createView({
        width: 85,
        height: 2,
        backgroundColor: "#555",
        id: "__alloyId103"
    });
    $.__views.progress_bar.add($.__views.__alloyId103);
    $.__views.ball2 = Ti.UI.createView({
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: "#555",
        id: "ball2"
    });
    $.__views.progress_bar.add($.__views.ball2);
    $.__views.__alloyId104 = Ti.UI.createView({
        width: 85,
        height: 2,
        backgroundColor: "#555",
        id: "__alloyId104"
    });
    $.__views.progress_bar.add($.__views.__alloyId104);
    $.__views.ball3 = Ti.UI.createView({
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: "#555",
        id: "ball3"
    });
    $.__views.progress_bar.add($.__views.ball3);
    $.__views.question = Ti.UI.createLabel({
        left: 30,
        top: 0,
        right: 10,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        color: "#777",
        text: "Complete your registration address!",
        id: "question"
    });
    $.__views.main.add($.__views.question);
    $.__views.__alloyId105 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        top: 10,
        id: "__alloyId105"
    });
    $.__views.main.add($.__views.__alloyId105);
    $.__views.address = Ti.UI.createTextField({
        color: "#fff",
        top: 10,
        borderRadius: 4,
        backgroundColor: "#555",
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
    $.__views.__alloyId105.add($.__views.address);
    onReturn ? $.__views.address.addEventListener("return", onReturn) : __defers["$.__views.address!return!onReturn"] = true;
    $.__views.__alloyId106 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        top: 10,
        layout: "horizontal",
        id: "__alloyId106"
    });
    $.__views.main.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createView({
        backgroundColor: "#555",
        borderRadius: 4,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: 10,
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
    $.__views.city = Ti.UI.createLabel({
        color: "#777",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        top: 20,
        bottom: 20,
        font: {
            fontSize: 14
        },
        id: "city"
    });
    $.__views.__alloyId107.add($.__views.city);
    $.__views.__alloyId108 = Ti.UI.createView({
        backgroundColor: "#555",
        borderRadius: 4,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: 10,
        id: "__alloyId108"
    });
    $.__views.__alloyId106.add($.__views.__alloyId108);
    $.__views.state = Ti.UI.createLabel({
        color: "#777",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "25",
        right: "25",
        top: 20,
        bottom: 20,
        font: {
            fontSize: 14
        },
        id: "state"
    });
    $.__views.__alloyId108.add($.__views.state);
    $.__views.__alloyId109 = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "vertical",
        id: "__alloyId109"
    });
    $.__views.main.add($.__views.__alloyId109);
    $.__views.btn_container = Ti.UI.createView({
        top: 20,
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        backgroundColor: "#2179ca",
        borderRadius: 4,
        borderWidth: .5,
        borderColor: "#fff",
        id: "btn_container"
    });
    $.__views.__alloyId109.add($.__views.btn_container);
    onReturn ? $.__views.btn_container.addEventListener("click", onReturn) : __defers["$.__views.btn_container!click!onReturn"] = true;
    $.__views.__alloyId110 = Ti.UI.createLabel({
        top: 20,
        bottom: 20,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        color: "#eee",
        text: "Verify",
        id: "__alloyId110"
    });
    $.__views.btn_container.add($.__views.__alloyId110);
    $.__views.cancel_container = Ti.UI.createView({
        top: "5",
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        backgroundColor: "#aaa",
        borderRadius: 4,
        borderWidth: .5,
        borderColor: "#fff",
        id: "cancel_container"
    });
    $.__views.__alloyId109.add($.__views.cancel_container);
    onCancel ? $.__views.cancel_container.addEventListener("click", onCancel) : __defers["$.__views.cancel_container!click!onCancel"] = true;
    $.__views.cancel_btn = Ti.UI.createLabel({
        top: 20,
        bottom: 20,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#eee",
        text: "cancel",
        id: "cancel_btn"
    });
    $.__views.cancel_container.add($.__views.cancel_btn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _callBack = args._callBack;
    var step = _data.step || 3;
    eval("$.ball" + step).setBackgroundColor("#aaa");
    eval("$.ball" + step).setBorderWidth(1);
    eval("$.ball" + step).setBorderColor("#eee");
    $.logo.setBackgroundImage("logos/48/" + _data.logo);
    $.city.setText(_data.city);
    $.state.setText(_data.state);
    $.signup_verify_address.open();
    __defers["$.__views.address!return!onReturn"] && $.__views.address.addEventListener("return", onReturn);
    __defers["$.__views.btn_container!click!onReturn"] && $.__views.btn_container.addEventListener("click", onReturn);
    __defers["$.__views.cancel_container!click!onCancel"] && $.__views.cancel_container.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;