function Controller() {
    function draw(_inviteData) {
        $.hellouser.setText(_inviteData.name);
        $.userphoto.setImage(_inviteData.userphoto);
        $.username.setText(_inviteData.username);
        $.prerolename.setText(roleNames_before[_inviteData.role_id]);
        $.rolename.setText(roleNames[_inviteData.role_id]);
        $.placename.setText(_inviteData.placename);
    }
    function loadData() {
        var url = "http://flair.me/search.php";
        var _dataStr = {};
        _dataStr.type = "_signup";
        _dataStr.mode = "getinvite";
        _dataStr.inviteid = _data.inviteid;
        _dataStr.code = _data.code;
        _dataStr.accessToken = login.getAccessToken();
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var _response = JSON.parse(this.responseText);
                _inviteData = _response;
                draw(_response);
            },
            onerror: function() {
                Ti.API.error("error loading data for Place -> " + _data.pid);
            },
            timeout: 5e3
        });
        client.open("POST", url);
        client.send(_dataStr);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/email_activation";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var _inviteData;
    var _callBack;
    var roleNames = [ "", "Founder", "Investor", "Advisor", "Team Members", "Marketing/Web Guru", "Attorney", "Banker" ];
    var roleNames_before = [ "", "as the", "as an", "as an", "as one of the", "as the", "as its", "as the" ];
    exports.init = function(callBack) {
        _callBack = callBack;
        $.email_activation.open();
        loadData();
        Ti.App.addEventListener("goHome", function() {
            $.email_activation.close();
        });
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;