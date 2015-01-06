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
        "" === e.source.getValue() ? eval("$." + e.source.id + "_label").setText(e.source.hint) : eval("$." + e.source.id + "_label").setText("");
    }
    function onBlur(e) {
        eval("$." + e.source.id + "_label").setOpacity(0);
    }
    function onChange(e) {
        "" === e.source.getValue() ? eval("$." + e.source.id + "_label").setText(e.source.hint) : eval("$." + e.source.id + "_label").setText("");
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
                login.closePleaseWait();
                showError("Please check your network connection!");
            },
            timeout: 5e3
        });
        client.open("POST", url);
        client.send(_data);
    }
    function showError(e) {
        Alloy.createController("signup/not_found_car", {
            _e: e
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
    $.__views.__alloyId147 = Ti.UI.createView({
        top: "0",
        height: "60",
        backgroundColor: "#f1f1f1",
        id: "__alloyId147"
    });
    $.__views.signup.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createView({
        top: "10",
        height: "50",
        id: "__alloyId148"
    });
    $.__views.__alloyId147.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ccc",
        borderRadius: 4,
        left: "10",
        id: "__alloyId149"
    });
    $.__views.__alloyId148.add($.__views.__alloyId149);
    onCancel ? $.__views.__alloyId149.addEventListener("click", onCancel) : __defers["$.__views.__alloyId149!click!onCancel"] = true;
    $.__views.__alloyId150 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "cancel",
        id: "__alloyId150"
    });
    $.__views.__alloyId149.add($.__views.__alloyId150);
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
        text: "Add my Vehichle",
        id: "question"
    });
    $.__views.__alloyId148.add($.__views.question);
    $.__views.__alloyId151 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ccc",
        borderRadius: 4,
        right: "10",
        id: "__alloyId151"
    });
    $.__views.__alloyId148.add($.__views.__alloyId151);
    process ? $.__views.__alloyId151.addEventListener("click", process) : __defers["$.__views.__alloyId151!click!process"] = true;
    $.__views.__alloyId152 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "next",
        id: "__alloyId152"
    });
    $.__views.__alloyId151.add($.__views.__alloyId152);
    $.__views.main = Ti.UI.createView({
        top: 60,
        layout: "vertical",
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        id: "main"
    });
    $.__views.signup.add($.__views.main);
    $.__views.__alloyId153 = Ti.UI.createView({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        id: "__alloyId153"
    });
    $.__views.main.add($.__views.__alloyId153);
    $.__views.plate_label = Ti.UI.createLabel({
        left: 0,
        right: 0,
        color: "#aaa",
        font: {
            fontSize: 18
        },
        height: 100,
        id: "plate_label"
    });
    $.__views.__alloyId153.add($.__views.plate_label);
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
        id: "plate",
        hint: "VIN number"
    });
    $.__views.__alloyId153.add($.__views.plate);
    onFocus ? $.__views.plate.addEventListener("focus", onFocus) : __defers["$.__views.plate!focus!onFocus"] = true;
    onChange ? $.__views.plate.addEventListener("change", onChange) : __defers["$.__views.plate!change!onChange"] = true;
    onBlur ? $.__views.plate.addEventListener("blur", onBlur) : __defers["$.__views.plate!blur!onBlur"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _callBack = args._callBack;
    var login = require("Login");
    $.signup.open();
    $.plate.focus();
    __defers["$.__views.__alloyId149!click!onCancel"] && $.__views.__alloyId149.addEventListener("click", onCancel);
    __defers["$.__views.__alloyId151!click!process"] && $.__views.__alloyId151.addEventListener("click", process);
    __defers["$.__views.plate!focus!onFocus"] && $.__views.plate.addEventListener("focus", onFocus);
    __defers["$.__views.plate!change!onChange"] && $.__views.plate.addEventListener("change", onChange);
    __defers["$.__views.plate!blur!onBlur"] && $.__views.plate.addEventListener("blur", onBlur);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;