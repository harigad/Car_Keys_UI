function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
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
    function process() {
        if ("" === $.plate.getValue()) return;
        login.openPleaseWait();
        var url = "http://services.ridealong.mobi/secure.php?page=signup2";
        var _data = {
            vin: $.plate.getValue(),
            accessToken: login.getAccessToken()
        };
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                login.closePleaseWait();
                var response = JSON.parse(this.responseText);
                response.status ? Alloy.createController("signup/found_car", {
                    _data: response,
                    _zipcode: "$.zipcode.getValue()",
                    _callBack: function() {
                        _callBack();
                        $.signup.close();
                    }
                }) : showError(response.error);
            },
            onerror: function() {
                showError("Please check your network connection!");
            },
            timeout: 5e3
        });
        client.open("POST", url);
        client.send(_data);
    }
    function launchHelp() {
        Alloy.createController("signup/help", {
            _callBack: function() {
                $.plate.focus();
            }
        });
    }
    function showError(e) {
        Alloy.createController("signup/not_found_car", {
            _e: e,
            _callBack: function() {
                login.closePleaseWait();
                $.plate.focus();
            }
        });
    }
    function onCancel() {
        $.signup.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/signup";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        var __itemTemplate = __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.signup = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "signup"
    });
    $.__views.signup && $.addTopLevelView($.__views.signup);
    $.__views.bgImage = Ti.UI.createImageView({
        id: "bgImage"
    });
    $.__views.signup.add($.__views.bgImage);
    $.__views.__alloyId200 = Ti.UI.createView({
        top: "0",
        height: "60",
        backgroundColor: "#f1f1f1",
        id: "__alloyId200"
    });
    $.__views.signup.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createView({
        top: "10",
        height: "50",
        id: "__alloyId201"
    });
    $.__views.__alloyId200.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#40a3ff",
        borderRadius: 4,
        left: "10",
        id: "__alloyId202"
    });
    $.__views.__alloyId201.add($.__views.__alloyId202);
    onCancel ? $.__views.__alloyId202.addEventListener("click", onCancel) : __defers["$.__views.__alloyId202!click!onCancel"] = true;
    $.__views.__alloyId203 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "cancel",
        id: "__alloyId203"
    });
    $.__views.__alloyId202.add($.__views.__alloyId203);
    $.__views.question = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 14
        },
        color: "#ccc",
        shadowColor: "#fff",
        shadowOffset: {
            x: 1,
            y: 1
        },
        shadowRadius: 3,
        text: "VIN NUMBER",
        id: "question"
    });
    $.__views.__alloyId201.add($.__views.question);
    $.__views.__alloyId204 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#40a3ff",
        borderRadius: 4,
        right: "10",
        id: "__alloyId204"
    });
    $.__views.__alloyId201.add($.__views.__alloyId204);
    process ? $.__views.__alloyId204.addEventListener("click", process) : __defers["$.__views.__alloyId204!click!process"] = true;
    $.__views.__alloyId205 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "next",
        id: "__alloyId205"
    });
    $.__views.__alloyId204.add($.__views.__alloyId205);
    $.__views.main = Ti.UI.createView({
        top: 60,
        layout: "vertical",
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        id: "main"
    });
    $.__views.signup.add($.__views.main);
    $.__views.__alloyId206 = Ti.UI.createView({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        id: "__alloyId206"
    });
    $.__views.main.add($.__views.__alloyId206);
    $.__views.plate = Ti.UI.createTextArea({
        left: 0,
        right: 0,
        top: 0,
        color: "#000",
        font: {
            fontSize: 50
        },
        height: 150,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL,
        id: "plate",
        hint: "VIN number"
    });
    $.__views.__alloyId206.add($.__views.plate);
    onFocus ? $.__views.plate.addEventListener("focus", onFocus) : __defers["$.__views.plate!focus!onFocus"] = true;
    onChange ? $.__views.plate.addEventListener("change", onChange) : __defers["$.__views.plate!change!onChange"] = true;
    onBlur ? $.__views.plate.addEventListener("blur", onBlur) : __defers["$.__views.plate!blur!onBlur"] = true;
    $.__views.plate_label = Ti.UI.createLabel({
        left: 3,
        right: 0,
        top: 0,
        color: "#aaa",
        font: {
            fontSize: 50
        },
        id: "plate_label"
    });
    $.__views.__alloyId206.add($.__views.plate_label);
    $.__views.help_label = Ti.UI.createLabel({
        top: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#40a3ff",
        font: {
            fontSize: 14
        },
        text: "help me find my VIN number!",
        id: "help_label"
    });
    $.__views.main.add($.__views.help_label);
    launchHelp ? $.__views.help_label.addEventListener("click", launchHelp) : __defers["$.__views.help_label!click!launchHelp"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _callBack = args._callBack;
    var login = require("Login");
    $.signup.setLeft(280);
    var animation = Titanium.UI.createAnimation();
    animation.left = 0;
    animation.duration = 200;
    $.signup.addEventListener("open", function() {
        $.plate.focus();
    });
    $.signup.open(animation);
    __defers["$.__views.__alloyId202!click!onCancel"] && $.__views.__alloyId202.addEventListener("click", onCancel);
    __defers["$.__views.__alloyId204!click!process"] && $.__views.__alloyId204.addEventListener("click", process);
    __defers["$.__views.plate!focus!onFocus"] && $.__views.plate.addEventListener("focus", onFocus);
    __defers["$.__views.plate!change!onChange"] && $.__views.plate.addEventListener("change", onChange);
    __defers["$.__views.plate!blur!onBlur"] && $.__views.plate.addEventListener("blur", onBlur);
    __defers["$.__views.help_label!click!launchHelp"] && $.__views.help_label.addEventListener("click", launchHelp);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;