function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/send_to_server";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.send_to_server = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "send_to_server"
    });
    $.__views.send_to_server && $.addTopLevelView($.__views.send_to_server);
    $.__views.__alloyId94 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId94"
    });
    $.__views.send_to_server.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
        text: "Saving..",
        height: Ti.UI.SIZE,
        color: "#fff",
        id: "__alloyId95"
    });
    $.__views.__alloyId94.add($.__views.__alloyId95);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _answerObj = args._answerObj;
    var _callBack = args._callBack;
    $.send_to_server.open();
    var url = "http://flair.me/carkey/search.php";
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