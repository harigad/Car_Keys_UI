function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onAccept() {
        process("approve");
    }
    function onDelete() {
        process("reject");
    }
    function process(action) {
        send_to_server(action);
        var requests = login.getRequests();
        for (var i = 0; requests.length > i; i++) if (requests[i].checkin_request_id == _data.checkin_request_id) {
            requests.splice(i, 1);
            break;
        }
        login.setRequests(requests);
        _callBack();
        $.accept.close();
    }
    function send_to_server(action) {
        var url = "http://services.ridealong.mobi/search.php";
        var _postData = {
            type: "checkin",
            action: action,
            checkin_request_id: _data.checkin_request_id,
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
    this.__controllerPath = "ridealong/accept";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.accept = Ti.UI.createWindow({
        backgroundColor: "#f49033",
        navBarHidden: true,
        id: "accept"
    });
    $.__views.accept && $.addTopLevelView($.__views.accept);
    $.__views.__alloyId89 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: "40",
        right: "40",
        id: "__alloyId89"
    });
    $.__views.accept.add($.__views.__alloyId89);
    $.__views.request = Ti.UI.createView({
        id: "request",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        borderRadius: "4"
    });
    $.__views.__alloyId89.add($.__views.request);
    $.__views.__alloyId90 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#fff",
        height: Ti.UI.SIZE,
        bottom: "5",
        top: "20",
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    onAccept ? $.__views.__alloyId90.addEventListener("click", onAccept) : __defers["$.__views.__alloyId90!click!onAccept"] = true;
    $.__views.__alloyId91 = Ti.UI.createLabel({
        text: "ACCEPT",
        color: "#f49033",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#999",
        height: Ti.UI.SIZE,
        top: "5",
        id: "__alloyId92"
    });
    $.__views.__alloyId89.add($.__views.__alloyId92);
    onDelete ? $.__views.__alloyId92.addEventListener("click", onDelete) : __defers["$.__views.__alloyId92!click!onDelete"] = true;
    $.__views.__alloyId93 = Ti.UI.createLabel({
        text: "REJECT",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _callBack = args._callBack;
    var request = Alloy.createController("ridealong/request", {
        _data: _data
    });
    $.request.add(request.getView());
    $.accept.open();
    __defers["$.__views.__alloyId90!click!onAccept"] && $.__views.__alloyId90.addEventListener("click", onAccept);
    __defers["$.__views.__alloyId92!click!onDelete"] && $.__views.__alloyId92.addEventListener("click", onDelete);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;