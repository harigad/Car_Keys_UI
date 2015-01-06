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
    this.__controllerPath = "car/share/share_send_to_server";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.share_send_to_server = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        navBarHidden: true,
        id: "share_send_to_server"
    });
    $.__views.share_send_to_server && $.addTopLevelView($.__views.share_send_to_server);
    $.__views.__alloyId37 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId37"
    });
    $.__views.share_send_to_server.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        text: "Updating..",
        height: Ti.UI.SIZE,
        color: "#fff",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _cid = args._cid;
    var _delete = args._delete;
    var _callBack = args._callBack;
    $.share_send_to_server.open();
    var url = Alloy.Globals._search;
    var _postData = {
        type: "editshare",
        cid: _cid,
        accessToken: login.getAccessToken()
    };
    _delete ? _postData.uid = _data.uid : _postData.fbid = _data.id;
    Ti.API.debug("adding share " + _data);
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.debug("share added");
            var response = JSON.parse(this.responseText);
            login.setCars(response.cars);
            _callBack();
            $.share_send_to_server.close();
        },
        onerror: function(e) {
            Ti.API.error("add share error " + e);
        }
    });
    client.open("POST", url);
    client.send(_postData);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;