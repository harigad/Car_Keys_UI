function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onWindowFocus() {
        $.plate.focus();
    }
    function onCancel() {
        $.form_miles.close();
    }
    function onNext() {
        var miles = $.plate.getValue();
        args._callBack(miles);
    }
    function help() {}
    function onFocus(e) {
        eval("$." + e.source.id + "_label").setOpacity(.6);
        0 === e.value.length ? eval("$." + e.source.id + "_label").setText(e.source.hint) : eval("$." + e.source.id + "_label").setText("");
    }
    function onBlur(e) {
        eval("$." + e.source.id + "_label").setOpacity(0);
    }
    function onChange(e) {
        0 === e.value.length ? eval("$." + e.source.id + "_label").setText(e.source.hint) : eval("$." + e.source.id + "_label").setText("");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "form/form_miles";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        var __itemTemplate = __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.form_miles = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "form_miles"
    });
    $.__views.form_miles && $.addTopLevelView($.__views.form_miles);
    onWindowFocus ? $.__views.form_miles.addEventListener("focus", onWindowFocus) : __defers["$.__views.form_miles!focus!onWindowFocus"] = true;
    $.__views.bgImage = Ti.UI.createImageView({
        id: "bgImage"
    });
    $.__views.form_miles.add($.__views.bgImage);
    $.__views.__alloyId63 = Ti.UI.createView({
        top: "0",
        height: "60",
        backgroundColor: "#f1f1f1",
        id: "__alloyId63"
    });
    $.__views.form_miles.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        top: "10",
        height: "50",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#40a3ff",
        borderRadius: 4,
        left: "10",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    onCancel ? $.__views.__alloyId65.addEventListener("click", onCancel) : __defers["$.__views.__alloyId65!click!onCancel"] = true;
    $.__views.__alloyId66 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "back",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
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
        text: "Mileage",
        id: "question"
    });
    $.__views.__alloyId64.add($.__views.question);
    $.__views.__alloyId67 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#40a3ff",
        borderRadius: 4,
        right: "10",
        id: "__alloyId67"
    });
    $.__views.__alloyId64.add($.__views.__alloyId67);
    onNext ? $.__views.__alloyId67.addEventListener("click", onNext) : __defers["$.__views.__alloyId67!click!onNext"] = true;
    $.__views.__alloyId68 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "next",
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.main = Ti.UI.createView({
        top: 60,
        layout: "vertical",
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        id: "main"
    });
    $.__views.form_miles.add($.__views.main);
    $.__views.__alloyId69 = Ti.UI.createView({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        id: "__alloyId69"
    });
    $.__views.main.add($.__views.__alloyId69);
    $.__views.plate = Ti.UI.createTextField({
        left: 0,
        right: 0,
        top: 0,
        color: "#000",
        font: {
            fontSize: 85
        },
        maxLength: 6,
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL,
        id: "plate",
        hint: "enter your current mileage"
    });
    $.__views.__alloyId69.add($.__views.plate);
    onFocus ? $.__views.plate.addEventListener("focus", onFocus) : __defers["$.__views.plate!focus!onFocus"] = true;
    onChange ? $.__views.plate.addEventListener("change", onChange) : __defers["$.__views.plate!change!onChange"] = true;
    onBlur ? $.__views.plate.addEventListener("blur", onBlur) : __defers["$.__views.plate!blur!onBlur"] = true;
    $.__views.plate_label = Ti.UI.createLabel({
        left: 3,
        right: 0,
        top: 0,
        color: "#aaa",
        font: {
            fontSize: 16
        },
        height: 85,
        id: "plate_label"
    });
    $.__views.__alloyId69.add($.__views.plate_label);
    $.__views.help_label = Ti.UI.createLabel({
        top: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#40a3ff",
        font: {
            fontSize: 14
        },
        text: "help! why the mileage?",
        id: "help_label"
    });
    $.__views.main.add($.__views.help_label);
    help ? $.__views.help_label.addEventListener("click", help) : __defers["$.__views.help_label!click!help"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.question.setText(args._ask.name);
    $.form_miles.open();
    exports.close = function() {
        $.form_miles.close();
    };
    __defers["$.__views.form_miles!focus!onWindowFocus"] && $.__views.form_miles.addEventListener("focus", onWindowFocus);
    __defers["$.__views.__alloyId65!click!onCancel"] && $.__views.__alloyId65.addEventListener("click", onCancel);
    __defers["$.__views.__alloyId67!click!onNext"] && $.__views.__alloyId67.addEventListener("click", onNext);
    __defers["$.__views.plate!focus!onFocus"] && $.__views.plate.addEventListener("focus", onFocus);
    __defers["$.__views.plate!change!onChange"] && $.__views.plate.addEventListener("change", onChange);
    __defers["$.__views.plate!blur!onBlur"] && $.__views.plate.addEventListener("blur", onBlur);
    __defers["$.__views.help_label!click!help"] && $.__views.help_label.addEventListener("click", help);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;