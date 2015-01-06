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
        var url = Alloy.Globals._search;
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
    $.__views.__alloyId102 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: "40",
        right: "40",
        id: "__alloyId102"
    });
    $.__views.accept.add($.__views.__alloyId102);
    $.__views.request = Ti.UI.createView({
        id: "request",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        borderRadius: "4"
    });
    $.__views.__alloyId102.add($.__views.request);
    $.__views.__alloyId103 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#fff",
        height: Ti.UI.SIZE,
        bottom: "5",
        top: "20",
        id: "__alloyId103"
    });
    $.__views.__alloyId102.add($.__views.__alloyId103);
    onAccept ? $.__views.__alloyId103.addEventListener("click", onAccept) : __defers["$.__views.__alloyId103!click!onAccept"] = true;
    $.__views.__alloyId104 = Ti.UI.createLabel({
        text: "ACCEPT",
        color: "#f49033",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#999",
        height: Ti.UI.SIZE,
        top: "5",
        id: "__alloyId105"
    });
    $.__views.__alloyId102.add($.__views.__alloyId105);
    onDelete ? $.__views.__alloyId105.addEventListener("click", onDelete) : __defers["$.__views.__alloyId105!click!onDelete"] = true;
    $.__views.__alloyId106 = Ti.UI.createLabel({
        text: "REJECT",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId106"
    });
    $.__views.__alloyId105.add($.__views.__alloyId106);
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
    __defers["$.__views.__alloyId103!click!onAccept"] && $.__views.__alloyId103.addEventListener("click", onAccept);
    __defers["$.__views.__alloyId105!click!onDelete"] && $.__views.__alloyId105.addEventListener("click", onDelete);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;