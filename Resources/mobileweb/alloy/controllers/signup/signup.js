function Controller() {
    function onFocus(e) {
        eval("$." + e.source.id + "_label").setOpacity(.6);
        "" === e.source.getValue() ? eval("$." + e.source.id + "_label").setText(e.source.getHintText()) : eval("$." + e.source.id + "_label").setText("");
    }
    function onBlur(e) {
        eval("$." + e.source.id + "_label").setOpacity(0);
    }
    function onChange(e) {
        "" === e.source.getValue() ? eval("$." + e.source.id + "_label").setText(e.source.getHintText()) : eval("$." + e.source.id + "_label").setText("");
    }
    function process() {
        if ("" === $.plate.getValue()) return;
        login.openPleaseWait();
        var url = "http://flair.me/carkey/secure.php?page=signup2";
        var _data = {
            plate: $.plate.getValue(),
            zipcode: "$.zipcode.getValue()",
            state: "TX",
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
        $.signup.close();
    }
    function onCancel() {
        $.signup.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/signup";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.signup = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "signup"
    });
    $.__views.signup && $.addTopLevelView($.__views.signup);
    $.__views.bgImage = Ti.UI.createImageView({
        id: "bgImage"
    });
    $.__views.signup.add($.__views.bgImage);
    $.__views.__alloyId130 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#f49033",
        top: "0",
        id: "__alloyId130"
    });
    $.__views.signup.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ffa633",
        borderRadius: 4,
        left: "10",
        id: "__alloyId131"
    });
    $.__views.__alloyId130.add($.__views.__alloyId131);
    onCancel ? $.__views.__alloyId131.addEventListener("click", onCancel) : __defers["$.__views.__alloyId131!click!onCancel"] = true;
    $.__views.__alloyId132 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "cancel",
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.question = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#fff",
        opacity: .5,
        text: "Add my Vehichle",
        id: "question"
    });
    $.__views.__alloyId130.add($.__views.question);
    $.__views.__alloyId133 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ffa633",
        borderRadius: 4,
        right: "10",
        id: "__alloyId133"
    });
    $.__views.__alloyId130.add($.__views.__alloyId133);
    process ? $.__views.__alloyId133.addEventListener("click", process) : __defers["$.__views.__alloyId133!click!process"] = true;
    $.__views.__alloyId134 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "next",
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.main = Ti.UI.createView({
        top: 60,
        layout: "vertical",
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        id: "main"
    });
    $.__views.signup.add($.__views.main);
    $.__views.__alloyId135 = Ti.UI.createView({
        left: 20,
        right: 20,
        height: 60,
        id: "__alloyId135"
    });
    $.__views.main.add($.__views.__alloyId135);
    $.__views.plate_label = Ti.UI.createLabel({
        left: 0,
        right: 0,
        color: "#fff",
        font: {
            fontSize: 18
        },
        height: 100,
        id: "plate_label"
    });
    $.__views.__alloyId135.add($.__views.plate_label);
    $.__views.plate = Ti.UI.createTextField({
        left: 0,
        right: 0,
        color: "#fff",
        font: {
            fontSize: 50
        },
        height: 100,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        id: "plate",
        hintText: "vehichle licene plate number"
    });
    $.__views.__alloyId135.add($.__views.plate);
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
    __defers["$.__views.__alloyId131!click!onCancel"] && $.__views.__alloyId131.addEventListener("click", onCancel);
    __defers["$.__views.__alloyId133!click!process"] && $.__views.__alloyId133.addEventListener("click", process);
    __defers["$.__views.plate!focus!onFocus"] && $.__views.plate.addEventListener("focus", onFocus);
    __defers["$.__views.plate!change!onChange"] && $.__views.plate.addEventListener("change", onChange);
    __defers["$.__views.plate!blur!onBlur"] && $.__views.plate.addEventListener("blur", onBlur);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;