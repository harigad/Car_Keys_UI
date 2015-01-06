function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onClose() {
        send_to_server();
        var notices = login.getNotices();
        for (var i = 0; notices.length > i; i++) if (notices[i].checkin_id == _data.checkin_id) {
            notices.splice(i, 1);
            break;
        }
        login.setNotices(notices);
        var animation = Titanium.UI.createAnimation();
        animation.opacity = 0;
        animation.duration = 1500;
        var animationHandler = function() {
            animation.removeEventListener("complete", animationHandler);
            _callBack();
        };
        animation.addEventListener("complete", animationHandler);
        $.main.animate(animation);
    }
    function send_to_server() {
        var url = Alloy.Globals._search;
        var _postData = {
            type: "checkin",
            action: "seen",
            checkin_id: _data.checkin_id,
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
    this.__controllerPath = "ridealong/notice";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        id: "main",
        backgroundColor: "#f49033",
        layout: "horizontal",
        height: Ti.UI.SIZE
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    onClose ? $.__views.main.addEventListener("click", onClose) : __defers["$.__views.main!click!onClose"] = true;
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        left: "10",
        top: "5",
        bottom: "5",
        width: "50",
        height: "50",
        borderRadius: "25",
        backgroundColor: "#ccc",
        borderWidth: "3",
        borderColor: "#aaa"
    });
    $.__views.main.add($.__views.photo);
    $.__views.__alloyId111 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        right: "10",
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId111"
    });
    $.__views.main.add($.__views.__alloyId111);
    $.__views.name = Ti.UI.createLabel({
        left: "0",
        height: "Ti.UI.SIZE",
        color: "#fff",
        font: {
            fontSize: 14
        },
        id: "name",
        width: Ti.UI.SIZE
    });
    $.__views.__alloyId111.add($.__views.name);
    $.__views.desc = Ti.UI.createLabel({
        height: "Ti.UI.SIZE",
        color: "#fff",
        opacity: "0.6",
        font: {
            fontSize: 11
        },
        text: "accepted your ride along request!",
        left: "0",
        id: "desc",
        width: Ti.UI.SIZE
    });
    $.__views.__alloyId111.add($.__views.desc);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _callBack = args._callBack;
    $.photo.setBackgroundImage(_data.photo);
    $.name.setText(_data.name);
    $.desc.setText("has accepted your ridealong request");
    __defers["$.__views.main!click!onClose"] && $.__views.main.addEventListener("click", onClose);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;