function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/share/send_to_server";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _cid = args._cid;
    var _delete = args._delete;
    var _callBack = args._callBack;
    $.send_to_server.open();
    var url = "http://flair.me/carkey/search.php";
    var _postData = {
        type: "editshare",
        cid: _cid,
        accessToken: login.getAccessToken()
    };
    _delete ? _postData.uid = _data.id : _postData.fbid = _data.id;
    Ti.API.debug("adding share " + _data);
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.debug("share added");
            var response = JSON.parse(this.responseText);
            login.setCars(response.cars);
            _callBack();
            $.send_to_server.close();
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