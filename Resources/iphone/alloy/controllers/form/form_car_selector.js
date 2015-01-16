function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onCancel() {
        var animation = Titanium.UI.createAnimation();
        animation.left = 320;
        animation.duration = 300;
        $.form_car_selector.close(animation);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "form/form_car_selector";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.form_car_selector = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "form_car_selector"
    });
    $.__views.form_car_selector && $.addTopLevelView($.__views.form_car_selector);
    $.__views.__alloyId58 = Ti.UI.createView({
        top: "0",
        height: "60",
        backgroundColor: "#f1f1f1",
        id: "__alloyId58"
    });
    $.__views.form_car_selector.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createView({
        top: "10",
        height: "50",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#40a3ff",
        borderRadius: 4,
        left: "10",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    onCancel ? $.__views.__alloyId60.addEventListener("click", onCancel) : __defers["$.__views.__alloyId60!click!onCancel"] = true;
    $.__views.__alloyId61 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "back",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.question = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 18
        },
        color: "#ccc",
        shadowColor: "#fff",
        shadowOffset: {
            x: 1,
            y: 1
        },
        shadowRadius: 3,
        text: "select the car",
        id: "question"
    });
    $.__views.__alloyId59.add($.__views.question);
    $.__views.__alloyId62 = Ti.UI.createScrollView({
        top: 60,
        id: "__alloyId62"
    });
    $.__views.form_car_selector.add($.__views.__alloyId62);
    $.__views.main = Ti.UI.createView({
        id: "main",
        layout: "vertical",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId62.add($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _cars = args._cars;
    var _callBack = args._callBack;
    $.question.setText(args._ask.name);
    for (var i = 0; _cars.length > i; i++) {
        var car = Alloy.createController("form/form_car", {
            _car: _cars[i],
            _callBack: function(obj) {
                _callBack(obj);
            }
        });
        $.main.add(car.getView());
    }
    $.form_car_selector.setLeft(280);
    var animation = Titanium.UI.createAnimation();
    animation.left = 0;
    animation.duration = 200;
    $.form_car_selector.open(animation);
    exports.close = function() {
        $.form_car_selector.close();
    };
    __defers["$.__views.__alloyId60!click!onCancel"] && $.__views.__alloyId60.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;