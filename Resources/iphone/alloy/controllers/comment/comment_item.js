function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goToUser() {}
    function save() {
        var url = "http://services.ridealong.mobi/search.php";
        var data = {
            type: "comments",
            fid: _pollid,
            data: _data.data,
            action: "add",
            accessToken: login.getAccessToken()
        };
        var client = Ti.Network.createHTTPClient({
            onload: function() {},
            onerror: function(e) {
                Ti.API.error("User.load error " + e);
            }
        });
        client.open("POST", url);
        client.send(data);
    }
    function onDelete() {
        $.main.setHeight(0);
        $.main.setVisible(false);
        var url = "http://services.ridealong.mobi/search.php";
        var data = {
            type: "comments",
            fid: _pollid,
            coid: _data.coid,
            action: "delete",
            accessToken: login.getAccessToken()
        };
        var client = Ti.Network.createHTTPClient({
            onload: function() {},
            onerror: function(e) {
                Ti.API.error("User.load error " + e);
            }
        });
        client.open("POST", url);
        client.send(data);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "comment/comment_item";
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
        height: Ti.UI.SIZE,
        layout: "vertical"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    goToUser ? $.__views.main.addEventListener("click", goToUser) : __defers["$.__views.main!click!goToUser"] = true;
    $.__views.__alloyId42 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        top: "5",
        id: "__alloyId42"
    });
    $.__views.main.add($.__views.__alloyId42);
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        width: "25",
        height: "25",
        borderRadius: "2",
        top: "0"
    });
    $.__views.__alloyId42.add($.__views.photo);
    $.__views.__alloyId43 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: "5",
        layout: "vertical",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.name = Ti.UI.createLabel({
        color: "#ffa633",
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        id: "name",
        left: "0"
    });
    $.__views.__alloyId44.add($.__views.name);
    $.__views.delete_btn = Ti.UI.createLabel({
        color: "#990000",
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        text: "( delete )",
        bubbleParent: "false",
        id: "delete_btn",
        left: "5",
        visible: "false"
    });
    $.__views.__alloyId44.add($.__views.delete_btn);
    onDelete ? $.__views.delete_btn.addEventListener("click", onDelete) : __defers["$.__views.delete_btn!click!onDelete"] = true;
    $.__views.text = Ti.UI.createLabel({
        color: "#666",
        font: {
            fontSize: 11
        },
        id: "text",
        left: "0",
        right: "0",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId43.add($.__views.text);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var _pollid = args._pollid;
    $.photo.setBackgroundImage(_data.photo);
    $.name.setText(_data.name);
    $.text.setText(_data.data);
    _data.coid || save();
    login.isUser(_data) && $.delete_btn.setVisible(true);
    __defers["$.__views.main!click!goToUser"] && $.__views.main.addEventListener("click", goToUser);
    __defers["$.__views.delete_btn!click!onDelete"] && $.__views.delete_btn.addEventListener("click", onDelete);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;