function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function load(data) {
        showPleaseWait();
        var url = "http://services.ridealong.mobi/search.php";
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
            data.length - 1 > i && $.main.add(Ti.UI.createView({
                height: 1,
                backgroundColor: "#eee"
            }));
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "make/make";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.make = Ti.UI.createWindow({
        backgroundColor: "#eee",
        navBarHidden: true,
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
        backgroundColor: "#ffa633",
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
    $.__views.make_name = Ti.UI.createLabel({
        top: 15,
        color: "#fff",
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
        backgroundColor: "#f49033",
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
    $.header.openWindow($.make);
    load(_data);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;