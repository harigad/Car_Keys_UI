function Controller() {
    function isMultipleUsersReturned(data) {
        var len = 0;
        var id = "";
        for (var i = 0; data.length > i; i++) {
            if (data[i].id != id) {
                id = data[i].id;
                len++;
            }
            if (len > 1) return true;
        }
        return false;
    }
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
                var multipleUsersReturned = isMultipleUsersReturned(response);
                if (response && response.length > 0 && false === multipleUsersReturned) Alloy.createController("ridealong/send_request/select_car_for_ridealong", {
                    _data: response,
                    _callBack: function(success) {
                        _callBack(success);
                        $.search_carkey_for_ridealong.close();
                    }
                }); else if (response && multipleUsersReturned) Alloy.createController("ridealong/send_request/show_search_carkey_results_for_ridealong", {
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
        height: "500",
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
        text: "searching ...",
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "pleasewait",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    });
    $.__views.main.add($.__views.pleasewait);
    $.__views.__alloyId105 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#f49033",
        top: "0",
        id: "__alloyId105"
    });
    $.__views.search_carkey_for_ridealong.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ffa633",
        borderRadius: 4,
        left: "10",
        id: "__alloyId106"
    });
    $.__views.__alloyId105.add($.__views.__alloyId106);
    onCancel ? $.__views.__alloyId106.addEventListener("click", onCancel) : __defers["$.__views.__alloyId106!click!onCancel"] = true;
    $.__views.__alloyId107 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "cancel",
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
    $.__views.question = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#fff",
        opacity: .5,
        text: "RideAlong",
        id: "question"
    });
    $.__views.__alloyId105.add($.__views.question);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || "";
    var _callBack = args._callBack;
    send_to_server();
    $.search_carkey_for_ridealong.open();
    __defers["$.__views.__alloyId106!click!onCancel"] && $.__views.__alloyId106.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;