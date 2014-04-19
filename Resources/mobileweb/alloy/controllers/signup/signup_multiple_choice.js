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
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.signup_multiple_choice = Ti.UI.createWindow({
        backgroundColor: "#333",
        navBarHidden: true,
        width: 320,
        height: 500,
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
    $.__views.__alloyId92 = Ti.UI.createView({
        width: 85,
        height: 2,
        backgroundColor: "#555",
        id: "__alloyId92"
    });
    $.__views.progress_bar.add($.__views.__alloyId92);
    $.__views.ball2 = Ti.UI.createView({
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: "#555",
        id: "ball2"
    });
    $.__views.progress_bar.add($.__views.ball2);
    $.__views.__alloyId93 = Ti.UI.createView({
        width: 85,
        height: 2,
        backgroundColor: "#555",
        id: "__alloyId93"
    });
    $.__views.progress_bar.add($.__views.__alloyId93);
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
    $.__views.__alloyId94 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        backgroundColor: "#aaa",
        borderRadius: 2,
        id: "__alloyId94"
    });
    $.__views.main.add($.__views.__alloyId94);
    onClick ? $.__views.__alloyId94.addEventListener("click", onClick) : __defers["$.__views.__alloyId94!click!onClick"] = true;
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
    $.__views.__alloyId94.add($.__views.answer1);
    $.__views.__alloyId95 = Ti.UI.createView({
        height: 1,
        left: 20,
        right: 20,
        backgroundColor: "#eee",
        id: "__alloyId95"
    });
    $.__views.main.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        backgroundColor: "#aaa",
        borderRadius: 2,
        id: "__alloyId96"
    });
    $.__views.main.add($.__views.__alloyId96);
    onClick ? $.__views.__alloyId96.addEventListener("click", onClick) : __defers["$.__views.__alloyId96!click!onClick"] = true;
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
    $.__views.__alloyId96.add($.__views.answer2);
    $.__views.__alloyId97 = Ti.UI.createView({
        height: 1,
        left: 20,
        right: 20,
        backgroundColor: "#eee",
        id: "__alloyId97"
    });
    $.__views.main.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        backgroundColor: "#aaa",
        borderRadius: 2,
        id: "__alloyId98"
    });
    $.__views.main.add($.__views.__alloyId98);
    onClick ? $.__views.__alloyId98.addEventListener("click", onClick) : __defers["$.__views.__alloyId98!click!onClick"] = true;
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
    $.__views.__alloyId98.add($.__views.answer3);
    $.__views.__alloyId99 = Ti.UI.createView({
        height: 1,
        left: 20,
        right: 20,
        backgroundColor: "#eee",
        id: "__alloyId99"
    });
    $.__views.main.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        backgroundColor: "#aaa",
        borderRadius: 2,
        id: "__alloyId100"
    });
    $.__views.main.add($.__views.__alloyId100);
    onClick ? $.__views.__alloyId100.addEventListener("click", onClick) : __defers["$.__views.__alloyId100!click!onClick"] = true;
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
    $.__views.__alloyId100.add($.__views.answer4);
    $.__views.__alloyId101 = Ti.UI.createView({
        height: 1,
        left: 20,
        right: 20,
        backgroundColor: "#eee",
        id: "__alloyId101"
    });
    $.__views.main.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 30,
        right: 30,
        backgroundColor: "#aaa",
        borderRadius: 2,
        id: "__alloyId102"
    });
    $.__views.main.add($.__views.__alloyId102);
    onClick ? $.__views.__alloyId102.addEventListener("click", onClick) : __defers["$.__views.__alloyId102!click!onClick"] = true;
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
    $.__views.__alloyId102.add($.__views.answer5);
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
    __defers["$.__views.__alloyId94!click!onClick"] && $.__views.__alloyId94.addEventListener("click", onClick);
    __defers["$.__views.__alloyId96!click!onClick"] && $.__views.__alloyId96.addEventListener("click", onClick);
    __defers["$.__views.__alloyId98!click!onClick"] && $.__views.__alloyId98.addEventListener("click", onClick);
    __defers["$.__views.__alloyId100!click!onClick"] && $.__views.__alloyId100.addEventListener("click", onClick);
    __defers["$.__views.__alloyId102!click!onClick"] && $.__views.__alloyId102.addEventListener("click", onClick);
    __defers["$.__views.cancel!click!onCancel"] && $.__views.cancel.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;