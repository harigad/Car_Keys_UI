function Controller() {
    function onReturn() {
        var address = $.address.getValue();
        _callBack(address);
        $.signup_verify_address.close();
    }
    function onClick() {}
    function onCancel() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/signup_verify_address";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.signup_verify_address = Ti.UI.createWindow({
        backgroundColor: "#eee",
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
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 10,
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
    $.__views.__alloyId60 = Ti.UI.createView({
        width: 85,
        height: 2,
        backgroundColor: "#555",
        id: "__alloyId60"
    });
    $.__views.progress_bar.add($.__views.__alloyId60);
    $.__views.ball2 = Ti.UI.createView({
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: "#555",
        id: "ball2"
    });
    $.__views.progress_bar.add($.__views.ball2);
    $.__views.__alloyId61 = Ti.UI.createView({
        width: 85,
        height: 2,
        backgroundColor: "#555",
        id: "__alloyId61"
    });
    $.__views.progress_bar.add($.__views.__alloyId61);
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
        top: 10,
        right: 10,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        color: "#777",
        text: "Verify your registration address!",
        id: "question"
    });
    $.__views.main.add($.__views.question);
    $.__views.__alloyId62 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        top: 10,
        id: "__alloyId62"
    });
    $.__views.main.add($.__views.__alloyId62);
    $.__views.address = Ti.UI.createTextField({
        color: "#fff",
        top: 10,
        backgroundColor: "#999",
        borderRadius: 4,
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
    $.__views.__alloyId62.add($.__views.address);
    onReturn ? $.__views.address.addEventListener("return", onReturn) : __defers["$.__views.address!return!onReturn"] = true;
    $.__views.__alloyId63 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        top: 10,
        layout: "horizontal",
        id: "__alloyId63"
    });
    $.__views.main.add($.__views.__alloyId63);
    onClick ? $.__views.__alloyId63.addEventListener("click", onClick) : __defers["$.__views.__alloyId63!click!onClick"] = true;
    $.__views.city = Ti.UI.createLabel({
        color: "#999",
        width: Ti.UI.SIZE,
        right: 5,
        font: {
            fontSize: 18
        },
        text: "irving,",
        id: "city"
    });
    $.__views.__alloyId63.add($.__views.city);
    $.__views.state = Ti.UI.createLabel({
        color: "#999",
        width: Ti.UI.SIZE,
        right: 5,
        font: {
            fontSize: 18
        },
        text: "texas",
        id: "state"
    });
    $.__views.__alloyId63.add($.__views.state);
    $.__views.zipcode = Ti.UI.createLabel({
        color: "#999",
        width: Ti.UI.SIZE,
        right: 5,
        font: {
            fontSize: 18
        },
        text: "75039",
        id: "zipcode"
    });
    $.__views.__alloyId63.add($.__views.zipcode);
    $.__views.cancel = Ti.UI.createLabel({
        top: 20,
        color: "#777",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        text: "cancel",
        id: "cancel"
    });
    $.__views.main.add($.__views.cancel);
    onCancel ? $.__views.cancel.addEventListener("click", onCancel) : __defers["$.__views.cancel!click!onCancel"] = true;
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
    $.signup_verify_address.open();
    __defers["$.__views.address!return!onReturn"] && $.__views.address.addEventListener("return", onReturn);
    __defers["$.__views.__alloyId63!click!onClick"] && $.__views.__alloyId63.addEventListener("click", onClick);
    __defers["$.__views.cancel!click!onCancel"] && $.__views.cancel.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;