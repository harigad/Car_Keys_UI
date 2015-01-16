function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onSelect() {
        send_to_server();
        _callBack(true);
    }
    function send_to_server() {
        var url = Alloy.Globals._search;
        var _postData = {
            type: "checkin",
            action: "process",
            oid: _data.oid,
            accessToken: login.getAccessToken()
        };
        var client = Ti.Network.createHTTPClient({
            onload: function() {},
            onerror: function() {}
        });
        client.open("POST", url);
        client.send(_postData);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/send_request/select_car_for_ridealong_btn";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.select_car_for_ridealong_btn = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "#f49033",
        borderRadius: "4",
        bottom: "10",
        id: "select_car_for_ridealong_btn"
    });
    $.__views.select_car_for_ridealong_btn && $.addTopLevelView($.__views.select_car_for_ridealong_btn);
    onSelect ? $.__views.select_car_for_ridealong_btn.addEventListener("click", onSelect) : __defers["$.__views.select_car_for_ridealong_btn!click!onSelect"] = true;
    $.__views.__alloyId178 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: "10",
        right: "10",
        layout: "horizontal",
        id: "__alloyId178"
    });
    $.__views.select_car_for_ridealong_btn.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createView({
        borderWidth: "3",
        borderColor: "#fff",
        width: "50",
        height: "50",
        borderRadius: "25",
        right: "10",
        backgroundColor: "#333",
        top: "10",
        bottom: "10",
        id: "__alloyId179"
    });
    $.__views.__alloyId178.add($.__views.__alloyId179);
    $.__views.logo = Ti.UI.createView({
        id: "logo",
        width: "30",
        height: "30"
    });
    $.__views.__alloyId179.add($.__views.logo);
    $.__views.model = Ti.UI.createLabel({
        id: "model",
        color: "#fff"
    });
    $.__views.__alloyId178.add($.__views.model);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _callBack = args._callBack;
    $.logo.setBackgroundImage("logos/48/" + _data.logo);
    $.model.setText(_data.model);
    __defers["$.__views.select_car_for_ridealong_btn!click!onSelect"] && $.__views.select_car_for_ridealong_btn.addEventListener("click", onSelect);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;