function Controller() {
    function load(created) {
        var url = "http://flair.me/carkey/search.php";
        var data = {
            type: "checkin",
            action: "showall",
            cid: _data.cid,
            accessToken: login.getAccessToken()
        };
        created && (data.created = created);
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var response = JSON.parse(this.responseText);
                build(response, created);
            },
            onerror: function(e) {
                Ti.API.error("User.load error " + e);
            }
        });
        client.open("POST", url);
        client.send(data);
    }
    function build(data) {
        var left = false;
        for (var i = 0; data.length > i; i++) {
            var feed_item = Alloy.createController("car/radio/radio_show_all_item", {
                _data: data[i]
            });
            if (left) {
                $.right.add(feed_item.getView());
                left = false;
            } else {
                $.left.add(feed_item.getView());
                left = true;
            }
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "car/radio/radio_show_all";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.radio_show_all = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        width: "320",
        height: "500",
        id: "radio_show_all"
    });
    $.__views.radio_show_all && $.addTopLevelView($.__views.radio_show_all);
    $.__views.__alloyId22 = Ti.UI.createScrollView({
        top: "-70",
        id: "__alloyId22"
    });
    $.__views.radio_show_all.add($.__views.__alloyId22);
    $.__views.main = Ti.UI.createView({
        id: "main",
        left: "10",
        right: "10",
        borderRadius: "4",
        layout: "horizontal",
        height: Ti.UI.SIZE,
        top: "130"
    });
    $.__views.__alloyId22.add($.__views.main);
    $.__views.left = Ti.UI.createView({
        width: "50%",
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "left"
    });
    $.__views.main.add($.__views.left);
    $.__views.right = Ti.UI.createView({
        width: "50%",
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "right"
    });
    $.__views.main.add($.__views.right);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.radio_show_all
    });
    $.__views.header.setParent($.__views.radio_show_all);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var _created;
    _created = null;
    load();
    $.header.openWindow($.radio_show_all);
    exports.refresh = function() {
        load();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;