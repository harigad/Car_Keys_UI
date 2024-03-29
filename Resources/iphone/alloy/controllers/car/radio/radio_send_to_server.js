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
    this.__controllerPath = "car/radio/radio_send_to_server";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.radio_send_to_server = Ti.UI.createWindow({
        backgroundColor: "#eee",
        navBarHidden: true,
        id: "radio_send_to_server"
    });
    $.__views.radio_send_to_server && $.addTopLevelView($.__views.radio_send_to_server);
    $.__views.__alloyId20 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId20"
    });
    $.__views.radio_send_to_server.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        text: "Updating..",
        height: Ti.UI.SIZE,
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _cid = args._cid;
    var _radio_name = args._radio_name || "";
    var _rid = args._rid;
    var _callBack = args._callBack;
    $.radio_send_to_server.open();
    var url = Alloy.Globals._search;
    var _postData = {
        type: "editradio",
        cid: _cid,
        radio_name: _radio_name,
        accessToken: login.getAccessToken()
    };
    _rid && (_postData.rid = _rid);
    Ti.API.debug("adding radio " + _postData);
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.debug("radio added");
            var response = JSON.parse(this.responseText);
            login.setCars(response.cars);
            _callBack();
            $.radio_send_to_server.close();
        },
        onerror: function(e) {
            Ti.API.error("add radio error " + e);
        }
    });
    client.open("POST", url);
    client.send(_postData);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;