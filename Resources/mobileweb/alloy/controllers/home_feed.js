function Controller() {
    function _checkForRedirect() {
        var _url = login.url();
        _url.redirect && ("place" == _url.page || "profile" == _url.page);
    }
    function buildFlairs(data) {
        var feed_view = Alloy.createController("common/feed_view", {
            _data: data.feed
        });
        $.feed.add(feed_view.getView());
        var cast_view = Alloy.createController("common/feed_view", {
            _data: data.newCast
        });
        $.newCast.add(cast_view.getView());
    }
    function getFlairs() {
        Ti.API.debug("getPlaces called");
        var url = "http://flair.me/search.php";
        var _data = {};
        _data.type = "nearby";
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var _response = JSON.parse(this.responseText);
                buildFlairs(_response);
            },
            onerror: function(e) {
                Ti.API.error("User.load error " + e);
            }
        });
        client.open("POST", url);
        client.send(_data);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home_feed";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var _callBack;
    exports.init = function(callBack) {
        _callBack = callBack;
        login.isLoggedIn() && $._join_btn_label.setText("My Profile");
        $.home_feed.open();
        getFlairs();
        _checkForRedirect();
        Ti.App.addEventListener("goHome", function() {
            window.location.hash = "";
        });
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;