function Controller() {
    function process() {
        var url = "http://flair.me/carkey/secure.php?page=signup2";
        var _data = {
            plate: $.plate.getValue(),
            state: "TX",
            accessToken: login.getAccessToken()
        };
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var response = JSON.parse(this.responseText);
                response.status ? Alloy.createController("signup/found_car", {
                    _data: response,
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
    function showError(e) {
        Alloy.createController("signup/not_found_car", {
            _e: e
        });
        $.signup.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/signup";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.signup = Ti.UI.createWindow({
        backgroundColor: "#eee",
        id: "signup"
    });
    $.__views.signup && $.addTopLevelView($.__views.signup);
    $.__views.bgImage = Ti.UI.createImageView({
        id: "bgImage"
    });
    $.__views.signup.add($.__views.bgImage);
    $.__views.main = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        top: 40,
        borderRadius: 4,
        backgroundColor: "#cecece",
        id: "main"
    });
    $.__views.signup.add($.__views.main);
    $.__views.plate = Ti.UI.createTextField({
        color: "#666",
        left: 20,
        right: 20,
        font: {
            fontSize: 18
        },
        height: 60,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        id: "plate",
        hintText: "Plate #"
    });
    $.__views.main.add($.__views.plate);
    $.__views.hr = Ti.UI.createView({
        height: 1,
        left: 20,
        right: 20,
        backgroundColor: "#aaa",
        opacity: .3,
        id: "hr"
    });
    $.__views.main.add($.__views.hr);
    $.__views.zipcode = Ti.UI.createTextField({
        color: "#666",
        left: 20,
        right: 20,
        font: {
            fontSize: 18
        },
        height: 60,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        id: "zipcode",
        hintText: "Zipcode"
    });
    $.__views.main.add($.__views.zipcode);
    process ? $.__views.zipcode.addEventListener("return", process) : __defers["$.__views.zipcode!return!process"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    args._data || {};
    var _callBack = args._callBack;
    var login = require("Login");
    $.signup.open();
    $.plate.focus();
    __defers["$.__views.zipcode!return!process"] && $.__views.zipcode.addEventListener("return", process);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;