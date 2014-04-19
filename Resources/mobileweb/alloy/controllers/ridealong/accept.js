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
        var url = "http://flair.me/carkey/search.php";
        var _postData = {
            type: "checkin",
            action: action,
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
    this.__controllerPath = "ridealong/accept";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.accept = Ti.UI.createWindow({
        backgroundColor: "#666",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "accept"
    });
    $.__views.accept && $.addTopLevelView($.__views.accept);
    $.__views.__alloyId56 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: "40",
        right: "40",
        id: "__alloyId56"
    });
    $.__views.accept.add($.__views.__alloyId56);
    $.__views.request = Ti.UI.createView({
        id: "request",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        borderRadius: "4"
    });
    $.__views.__alloyId56.add($.__views.request);
    $.__views.__alloyId57 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#2179ca",
        height: Ti.UI.SIZE,
        bottom: "5",
        top: "20",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    onAccept ? $.__views.__alloyId57.addEventListener("click", onAccept) : __defers["$.__views.__alloyId57!click!onAccept"] = true;
    $.__views.__alloyId58 = Ti.UI.createLabel({
        text: "ACCEPT",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#990000",
        height: Ti.UI.SIZE,
        top: "5",
        id: "__alloyId59"
    });
    $.__views.__alloyId56.add($.__views.__alloyId59);
    onDelete ? $.__views.__alloyId59.addEventListener("click", onDelete) : __defers["$.__views.__alloyId59!click!onDelete"] = true;
    $.__views.__alloyId60 = Ti.UI.createLabel({
        text: "REJECT",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
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
    request.getView("main").setBackgroundColor("#666");
    $.accept.open();
    __defers["$.__views.__alloyId57!click!onAccept"] && $.__views.__alloyId57.addEventListener("click", onAccept);
    __defers["$.__views.__alloyId59!click!onDelete"] && $.__views.__alloyId59.addEventListener("click", onDelete);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;