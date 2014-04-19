function Controller() {
    function send_to_server() {
        var url = "http://flair.me/carkey/search.php";
        var _postData = {
            type: "checkin",
            action: "find",
            carkey: _data,
            accessToken: login.getAccessToken()
        };
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var response = JSON.parse(this.responseText);
                Alloy.createController("ridealong/send_request/select_car_for_ridealong", {
                    _data: response,
                    _callBack: function(success) {
                        _callBack(success);
                        $.search_carkey_for_ridealong.close();
                    }
                });
            },
            onerror: function() {}
        });
        client.open("POST", url);
        client.send(_postData);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/send_request/search_carkey_for_ridealong";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.search_carkey_for_ridealong = Ti.UI.createWindow({
        backgroundColor: "#666",
        width: "320",
        height: "480",
        id: "search_carkey_for_ridealong"
    });
    $.__views.search_carkey_for_ridealong && $.addTopLevelView($.__views.search_carkey_for_ridealong);
    $.__views.main = Ti.UI.createView({
        id: "main",
        height: Ti.UI.SIZE,
        left: "20",
        right: "20",
        layout: "vertical"
    });
    $.__views.search_carkey_for_ridealong.add($.__views.main);
    $.__views.__alloyId70 = Ti.UI.createLabel({
        text: "please wait..",
        color: "#aaa",
        id: "__alloyId70"
    });
    $.__views.main.add($.__views.__alloyId70);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || "";
    var _callBack = args._callBack;
    send_to_server();
    $.search_carkey_for_ridealong.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;