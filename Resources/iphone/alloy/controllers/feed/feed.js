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
        var _data = {
            type: "feed",
            accessToken: login.getAccessToken()
        };
        _id && (_data.uid = _id);
        created && (_data.created = created);
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.debug(this.responseText);
                var response = JSON.parse(this.responseText);
                _dontBuild || build(response, created);
            },
            onerror: function(e) {
                Ti.API.error("User.load error " + e);
            }
        });
        client.open("POST", url);
        client.send(_data);
    }
    function build(data) {
        var rows = [];
        for (var i = 0; data.length > i; i++) {
            var feed_item;
            switch (data[i].typeid) {
              case "0":
                feed_item = Alloy.createController("feed/feed_car_new", {
                    _data: data[i]
                });
                break;

              case "1":
                feed_item = Alloy.createController("feed/feed_car_added", {
                    _data: data[i]
                });
                break;

              case "2":
                feed_item = Alloy.createController("feed/feed_plate", {
                    _data: data[i]
                });
                break;

              case "3":
                feed_item = Alloy.createController("feed/feed_share", {
                    _data: data[i]
                });
                break;

              case "4":
                feed_item = Alloy.createController("feed/feed_ridealong", {
                    _data: data[i]
                });
                break;

              case "5":
                feed_item = Alloy.createController("feed/feed_poll_answer", {
                    _data: data[i]
                });
            }
            if (feed_item) {
                rows.push(feed_item.getView());
                _created = data[i].created;
            }
        }
        $.main.appendRow(rows);
        $.more.setText("load more");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feed/feed";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createView({
        top: 5,
        bottom: 5,
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        borderRadius: 4,
        backgroundColor: "#fff",
        layout: "vertical",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.header = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        left: 10,
        top: 5,
        color: "#ccc",
        height: Ti.UI.SIZE,
        text: "Feed Activity",
        id: "header"
    });
    $.__views.container.add($.__views.header);
    $.__views.main = Ti.UI.createTableView({
        height: Ti.UI.SIZE,
        separatorStyle: Alloy.Globals._params.TableViewSeparatorStyle.NONE,
        scrollable: false,
        id: "main"
    });
    $.__views.container.add($.__views.main);
    $.__views.__alloyId51 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId51"
    });
    $.__views.container.add($.__views.__alloyId51);
    more ? $.__views.__alloyId51.addEventListener("click", more) : __defers["$.__views.__alloyId51!click!more"] = true;
    $.__views.more = Ti.UI.createLabel({
        text: "please wait..",
        id: "more",
        top: "10",
        bottom: "10",
        color: "#ffa633",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId51.add($.__views.more);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _id = args._id || null;
    var _feed = args._feed || null;
    var _dontBuild = args._dontBuild || false;
    var _created;
    _created = null;
    !_feed;
    exports.refresh = function() {
        load();
    };
    __defers["$.__views.__alloyId51!click!more"] && $.__views.__alloyId51.addEventListener("click", more);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;