function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function more() {
        $.more.setText("please wait...");
        load(_created);
    }
    function load(created) {
        var url = Alloy.Globals._search;
        var data = {
            type: "poll",
            moid: _data.moid,
            action: "get",
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
    function build(response) {
        for (var i = 0; response.length > i; i++) {
            var feed_item = Alloy.createController("poll/poll", {
                _data: response[i]
            });
            $.main.add(feed_item.getView());
            _created = response[i].created;
        }
        $.more.setText("load more");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "poll/polls";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.polls = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "polls"
    });
    $.__views.polls && $.addTopLevelView($.__views.polls);
    $.__views.container = Ti.UI.createView({
        top: 5,
        bottom: 5,
        height: Ti.UI.SIZE,
        borderRadius: 4,
        backgroundColor: "#fff",
        layout: "vertical",
        id: "container"
    });
    $.__views.polls.add($.__views.container);
    $.__views.header = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        left: 10,
        top: 5,
        bottom: 10,
        color: "#ccc",
        height: "Ti.UI.SIZE",
        text: "Feed Activity",
        id: "header"
    });
    $.__views.container.add($.__views.header);
    $.__views.main = Ti.UI.createView({
        id: "main",
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "0",
        bottom: "10"
    });
    $.__views.container.add($.__views.main);
    $.__views.__alloyId93 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId93"
    });
    $.__views.container.add($.__views.__alloyId93);
    more ? $.__views.__alloyId93.addEventListener("click", more) : __defers["$.__views.__alloyId93!click!more"] = true;
    $.__views.more = Ti.UI.createLabel({
        text: "please wait..",
        id: "more",
        top: "10",
        bottom: "10",
        color: "#ffa633",
        height: Ti.UI.SIZE
    });
    $.__views.polls.add($.__views.more);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    var _created;
    _created = null;
    exports.init = function(data) {
        _data = data;
        load();
    };
    exports.refresh = function() {
        load();
    };
    __defers["$.__views.__alloyId93!click!more"] && $.__views.__alloyId93.addEventListener("click", more);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;