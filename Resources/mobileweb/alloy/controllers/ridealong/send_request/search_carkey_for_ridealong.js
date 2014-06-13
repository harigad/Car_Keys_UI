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
                if (response && response.length > 0) Alloy.createController("ridealong/send_request/select_car_for_ridealong", {
                    _data: response,
                    _callBack: function(success) {
                        _callBack(success);
                        $.search_carkey_for_ridealong.close();
                    }
                }); else {
                    $.pleasewait.setText("Sorry! We could not find a user with the CarKey " + _data);
                    $.close_btn_label.setText("OK");
                }
            },
            onerror: function() {}
        });
        client.open("POST", url);
        client.send(_postData);
    }
    function onCancel() {
        _callBack(false);
        $.search_carkey_for_ridealong.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/send_request/search_carkey_for_ridealong";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.search_carkey_for_ridealong = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        width: "320",
        height: "480",
        navBarHidden: "true",
        id: "search_carkey_for_ridealong"
    });
    $.__views.search_carkey_for_ridealong && $.addTopLevelView($.__views.search_carkey_for_ridealong);
    $.__views.main = Ti.UI.createView({
        id: "main",
        height: Ti.UI.SIZE,
        width: "280",
        left: "20",
        right: "20",
        layout: "vertical"
    });
    $.__views.search_carkey_for_ridealong.add($.__views.main);
    $.__views.pleasewait = Ti.UI.createLabel({
        text: "please wait..",
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "pleasewait",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    });
    $.__views.main.add($.__views.pleasewait);
    $.__views.close_btn = Ti.UI.createView({
        bottom: "100",
        id: "close_btn",
        backgroundColor: "#f49033",
        width: "150",
        height: Ti.UI.SIZE,
        borderRadius: "4"
    });
    $.__views.search_carkey_for_ridealong.add($.__views.close_btn);
    onCancel ? $.__views.close_btn.addEventListener("click", onCancel) : __defers["$.__views.close_btn!click!onCancel"] = true;
    $.__views.close_btn_label = Ti.UI.createLabel({
        text: "CANCEL",
        id: "close_btn_label",
        top: "10",
        bottom: "10",
        color: "#fff",
        height: Ti.UI.SIZE,
        opacity: "0.5"
    });
    $.__views.close_btn.add($.__views.close_btn_label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || "";
    var _callBack = args._callBack;
    send_to_server();
    $.search_carkey_for_ridealong.open();
    __defers["$.__views.close_btn!click!onCancel"] && $.__views.close_btn.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;