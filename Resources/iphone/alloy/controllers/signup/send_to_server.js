function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/send_to_server";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.send_to_server = Ti.UI.createWindow({
        backgroundColor: "#f1f1f1",
        navBarHidden: true,
        id: "send_to_server"
    });
    $.__views.send_to_server && $.addTopLevelView($.__views.send_to_server);
    $.__views.__alloyId147 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId147"
    });
    $.__views.send_to_server.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createLabel({
        text: "Saving..",
        height: Ti.UI.SIZE,
        id: "__alloyId148"
    });
    $.__views.__alloyId147.add($.__views.__alloyId148);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _answerObj = args._answerObj || {};
    var _callBack = args._callBack;
    $.send_to_server.open();
    var url = Alloy.Globals._search;
    var _postData = {
        type: "addcar",
        cid: _data.cid,
        address: _answerObj.address,
        accessToken: login.getAccessToken()
    };
    Ti.API.debug("car.add sending data " + _data);
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.debug("added car " + this.responseText);
            var response = JSON.parse(this.responseText);
            if (response.error) Alloy.createController("signup/add_car_failed", {
                _callBack: function() {
                    _callBack();
                    $.send_to_server.close();
                }
            }); else {
                login.setCars(response.cars);
                _callBack();
                $.send_to_server.close();
            }
        },
        onerror: function(e) {
            Ti.API.error("User.load error " + e);
        }
    });
    client.open("POST", url);
    client.send(_postData);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;