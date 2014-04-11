function Controller() {
    function load(data) {
        showPleaseWait();
        var url = "http://flair.me/carkey/search.php";
        var _data = {
            type: "make",
            mid: data.mid,
            accessToken: login.getAccessToken()
        };
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var response = JSON.parse(this.responseText);
                build(response);
            },
            onerror: function(e) {
                Ti.API.error("User.load error " + e);
            }
        });
        client.open("POST", url);
        client.send(_data);
    }
    function showPleaseWait() {}
    function build(data) {
        for (var i = 0; data.length > i; i++) {
            var model_item = Alloy.createController("make/model_item", {
                _data: data[i]
            });
            $.main.add(model_item.getView());
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "make/make";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.make = Ti.UI.createWindow({
        backgroundColor: "#666",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "make"
    });
    $.__views.make && $.addTopLevelView($.__views.make);
    $.__views.scroll = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "scroll",
        top: "50"
    });
    $.__views.make.add($.__views.scroll);
    $.__views.profile_container = Ti.UI.createView({
        top: 0,
        left: 0,
        width: Ti.UI.FILL,
        height: 150,
        id: "profile_container"
    });
    $.__views.scroll.add($.__views.profile_container);
    $.__views.photo = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        top: 10,
        id: "photo"
    });
    $.__views.profile_container.add($.__views.photo);
    $.__views.logo = Ti.UI.createView({
        width: 48,
        height: 48,
        borderRadius: 24,
        id: "logo"
    });
    $.__views.photo.add($.__views.logo);
    $.__views.make_name = Ti.UI.createLabel({
        color: "#999",
        height: "Ti.UI.SIZE",
        font: {
            fontSize: 36,
            fontWeight: "bold"
        },
        id: "make_name"
    });
    $.__views.photo.add($.__views.make_name);
    $.__views.main_container = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: 120,
        id: "main_container"
    });
    $.__views.scroll.add($.__views.main_container);
    $.__views.main = Ti.UI.createView({
        borderRadius: 4,
        backgroundColor: "#eee",
        layout: "vertical",
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        id: "main"
    });
    $.__views.main_container.add($.__views.main);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.make
    });
    $.__views.header.setParent($.__views.make);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    $.make_name.setText(_data.make);
    $.header.getView("main").setBackgroundColor("#666");
    $.header.openWindow($.make);
    $.logo.setBackgroundImage("logos/48/" + _data.logo);
    load(_data);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;