function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onClick(e) {
        _callBack(e.source.getText());
        $.signup_multiple_choice.close();
    }
    function onCancel() {
        $.found_car.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/signup_multiple_choice";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        var __itemTemplate = __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.signup_multiple_choice = Ti.UI.createWindow({
        backgroundColor: "#333",
        navBarHidden: true,
        id: "signup_multiple_choice"
    });
    $.__views.signup_multiple_choice && $.addTopLevelView($.__views.signup_multiple_choice);
    $.__views.bgImage = Ti.UI.createImageView({
        id: "bgImage"
    });
    $.__views.signup_multiple_choice.add($.__views.bgImage);
    $.__views.main = Ti.UI.createView({
        layout: "vertical",
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
        id: "main"
    });
    $.__views.signup_multiple_choice.add($.__views.main);
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
    $.__views.__alloyId209 = Ti.UI.createView({
        width: 85,
        height: 2,
        backgroundColor: "#555",
        id: "__alloyId209"
    });
    $.__views.progress_bar.add($.__views.__alloyId209);
    $.__views.ball2 = Ti.UI.createView({
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: "#555",
        id: "ball2"
    });
    $.__views.progress_bar.add($.__views.ball2);
    $.__views.__alloyId210 = Ti.UI.createView({
        width: 85,
        height: 2,
        backgroundColor: "#555",
        id: "__alloyId210"
    });
    $.__views.progress_bar.add($.__views.__alloyId210);
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
        text: "When did you buy your G35?",
        id: "question"
    });
    $.__views.main.add($.__views.question);
    $.__views.__alloyId211 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        backgroundColor: "#aaa",
        borderRadius: 2,
        id: "__alloyId211"
    });
    $.__views.main.add($.__views.__alloyId211);
    onClick ? $.__views.__alloyId211.addEventListener("click", onClick) : __defers["$.__views.__alloyId211!click!onClick"] = true;
    $.__views.answer1 = Ti.UI.createLabel({
        color: "#333",
        left: 30,
        top: 10,
        bottom: 10,
        right: 30,
        font: {
            fontSize: 16
        },
        height: 40,
        id: "answer1",
        text: "Red"
    });
    $.__views.__alloyId211.add($.__views.answer1);
    $.__views.__alloyId212 = Ti.UI.createView({
        height: 1,
        left: 20,
        right: 20,
        backgroundColor: "#eee",
        id: "__alloyId212"
    });
    $.__views.main.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        backgroundColor: "#aaa",
        borderRadius: 2,
        id: "__alloyId213"
    });
    $.__views.main.add($.__views.__alloyId213);
    onClick ? $.__views.__alloyId213.addEventListener("click", onClick) : __defers["$.__views.__alloyId213!click!onClick"] = true;
    $.__views.answer2 = Ti.UI.createLabel({
        color: "#333",
        left: 30,
        top: 10,
        bottom: 10,
        right: 30,
        font: {
            fontSize: 16
        },
        height: 40,
        id: "answer2",
        text: "Green"
    });
    $.__views.__alloyId213.add($.__views.answer2);
    $.__views.__alloyId214 = Ti.UI.createView({
        height: 1,
        left: 20,
        right: 20,
        backgroundColor: "#eee",
        id: "__alloyId214"
    });
    $.__views.main.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        backgroundColor: "#aaa",
        borderRadius: 2,
        id: "__alloyId215"
    });
    $.__views.main.add($.__views.__alloyId215);
    onClick ? $.__views.__alloyId215.addEventListener("click", onClick) : __defers["$.__views.__alloyId215!click!onClick"] = true;
    $.__views.answer3 = Ti.UI.createLabel({
        color: "#333",
        left: 30,
        top: 10,
        bottom: 10,
        right: 30,
        font: {
            fontSize: 16
        },
        height: 40,
        id: "answer3",
        text: "Gray"
    });
    $.__views.__alloyId215.add($.__views.answer3);
    $.__views.__alloyId216 = Ti.UI.createView({
        height: 1,
        left: 20,
        right: 20,
        backgroundColor: "#eee",
        id: "__alloyId216"
    });
    $.__views.main.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        backgroundColor: "#aaa",
        borderRadius: 2,
        id: "__alloyId217"
    });
    $.__views.main.add($.__views.__alloyId217);
    onClick ? $.__views.__alloyId217.addEventListener("click", onClick) : __defers["$.__views.__alloyId217!click!onClick"] = true;
    $.__views.answer4 = Ti.UI.createLabel({
        color: "#333",
        left: 30,
        top: 10,
        bottom: 10,
        right: 30,
        font: {
            fontSize: 16
        },
        height: 40,
        id: "answer4",
        text: "White"
    });
    $.__views.__alloyId217.add($.__views.answer4);
    $.__views.__alloyId218 = Ti.UI.createView({
        height: 1,
        left: 20,
        right: 20,
        backgroundColor: "#eee",
        id: "__alloyId218"
    });
    $.__views.main.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        backgroundColor: "#aaa",
        borderRadius: 2,
        id: "__alloyId219"
    });
    $.__views.main.add($.__views.__alloyId219);
    onClick ? $.__views.__alloyId219.addEventListener("click", onClick) : __defers["$.__views.__alloyId219!click!onClick"] = true;
    $.__views.answer5 = Ti.UI.createLabel({
        color: "#333",
        left: 30,
        top: 10,
        bottom: 10,
        right: 30,
        font: {
            fontSize: 16
        },
        height: 40,
        id: "answer5",
        text: "Black"
    });
    $.__views.__alloyId219.add($.__views.answer5);
    $.__views.cancel = Ti.UI.createLabel({
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
    var step = _data.step || 1;
    eval("$.ball" + step).setBackgroundColor("#aaa");
    eval("$.ball" + step).setBorderWidth(1);
    eval("$.ball" + step).setBorderColor("#eee");
    $.signup_multiple_choice.open();
    $.logo.setBackgroundImage("logos/48/" + _data.logo);
    $.question.setText(_data.question);
    $.answer1.setText(_data.answer1);
    $.answer2.setText(_data.answer2);
    $.answer3.setText(_data.answer3);
    $.answer4.setText(_data.answer4);
    $.answer5.setText(_data.answer5);
    __defers["$.__views.__alloyId211!click!onClick"] && $.__views.__alloyId211.addEventListener("click", onClick);
    __defers["$.__views.__alloyId213!click!onClick"] && $.__views.__alloyId213.addEventListener("click", onClick);
    __defers["$.__views.__alloyId215!click!onClick"] && $.__views.__alloyId215.addEventListener("click", onClick);
    __defers["$.__views.__alloyId217!click!onClick"] && $.__views.__alloyId217.addEventListener("click", onClick);
    __defers["$.__views.__alloyId219!click!onClick"] && $.__views.__alloyId219.addEventListener("click", onClick);
    __defers["$.__views.cancel!click!onCancel"] && $.__views.cancel.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;