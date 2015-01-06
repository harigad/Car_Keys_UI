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
                response.status ? Alloy.createController("testdrives/request/testdrive_found_car", {
                    _data: response,
                    _zipcode: "$.zipcode.getValue()",
                    _callBack: function() {
                        _callBack();
                        $.testdrive_find_car.close();
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
        Alloy.createController("testdrives/request/testdrive_vin_help", {
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
        $.testdrive_find_car.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "testdrives/request/testdrive_find_car";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        var __itemTemplate = __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.testdrive_find_car = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "testdrive_find_car"
    });
    $.__views.testdrive_find_car && $.addTopLevelView($.__views.testdrive_find_car);
    $.__views.bgImage = Ti.UI.createImageView({
        id: "bgImage"
    });
    $.__views.testdrive_find_car.add($.__views.bgImage);
    $.__views.__alloyId181 = Ti.UI.createView({
        top: "0",
        height: "60",
        backgroundColor: "#f1f1f1",
        id: "__alloyId181"
    });
    $.__views.testdrive_find_car.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createView({
        top: "10",
        height: "50",
        id: "__alloyId182"
    });
    $.__views.__alloyId181.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#40a3ff",
        borderRadius: 4,
        left: "10",
        id: "__alloyId183"
    });
    $.__views.__alloyId182.add($.__views.__alloyId183);
    onCancel ? $.__views.__alloyId183.addEventListener("click", onCancel) : __defers["$.__views.__alloyId183!click!onCancel"] = true;
    $.__views.__alloyId184 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "cancel",
        id: "__alloyId184"
    });
    $.__views.__alloyId183.add($.__views.__alloyId184);
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
    $.__views.__alloyId182.add($.__views.question);
    $.__views.__alloyId185 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#40a3ff",
        borderRadius: 4,
        right: "10",
        id: "__alloyId185"
    });
    $.__views.__alloyId182.add($.__views.__alloyId185);
    process ? $.__views.__alloyId185.addEventListener("click", process) : __defers["$.__views.__alloyId185!click!process"] = true;
    $.__views.__alloyId186 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "next",
        id: "__alloyId186"
    });
    $.__views.__alloyId185.add($.__views.__alloyId186);
    $.__views.main = Ti.UI.createView({
        top: 60,
        layout: "vertical",
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        id: "main"
    });
    $.__views.testdrive_find_car.add($.__views.main);
    $.__views.__alloyId187 = Ti.UI.createView({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        id: "__alloyId187"
    });
    $.__views.main.add($.__views.__alloyId187);
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
    $.__views.__alloyId187.add($.__views.plate);
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
    $.__views.__alloyId187.add($.__views.plate_label);
    $.__views.help_label = Ti.UI.createLabel({
        top: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#40a3ff",
        font: {
            fontSize: 14
        },
        text: "help me find the VIN number!",
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
    $.testdrive_find_car.open();
    $.plate.focus();
    __defers["$.__views.__alloyId183!click!onCancel"] && $.__views.__alloyId183.addEventListener("click", onCancel);
    __defers["$.__views.__alloyId185!click!process"] && $.__views.__alloyId185.addEventListener("click", process);
    __defers["$.__views.plate!focus!onFocus"] && $.__views.plate.addEventListener("focus", onFocus);
    __defers["$.__views.plate!change!onChange"] && $.__views.plate.addEventListener("change", onChange);
    __defers["$.__views.plate!blur!onBlur"] && $.__views.plate.addEventListener("blur", onBlur);
    __defers["$.__views.help_label!click!launchHelp"] && $.__views.help_label.addEventListener("click", launchHelp);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;