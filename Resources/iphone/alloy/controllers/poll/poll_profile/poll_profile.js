function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function load(created) {
        var url = "http://services.ridealong.mobi/search.php";
        var data = {
            type: "poll",
            pollid: _data.ouid,
            action: "summary",
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
        var poll_info = response.info;
        var options = JSON.parse(poll_info.options);
        var countObjArr = response.feed;
        for (var i = 0; options.length > i; i++) {
            var countObj = getCountObjForOption(options[i], countObjArr);
            var feed_item = Alloy.createController("poll/poll_profile/poll_profile_answer_item", {
                _answer: options[i],
                _countObj: countObj
            });
            $.main.add(feed_item.getView());
        }
        drawPie();
    }
    function drawPie() {
        var data = [ {
            value: 300,
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        }, {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        }, {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }, {
            value: 40,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        }, {
            value: 120,
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        } ];
        Ti.App.fireEvent("drawPie", {
            data: data
        });
    }
    function getCountObjForOption(option, countObjArr) {
        for (var i = 0; countObjArr.length > i; i++) if (countObjArr[i].answer == option) return countObjArr[i];
        return {};
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "poll/poll_profile/poll_profile";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.poll_profile = Ti.UI.createWindow({
        backgroundColor: "#eee",
        navBarHidden: true,
        id: "poll_profile"
    });
    $.__views.poll_profile && $.addTopLevelView($.__views.poll_profile);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "60"
    });
    $.__views.poll_profile.add($.__views.scroll);
    $.__views.__alloyId86 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        id: "__alloyId86"
    });
    $.__views.scroll.add($.__views.__alloyId86);
    $.__views.question = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        id: "question",
        left: "10",
        right: "10",
        bottom: "5"
    });
    $.__views.__alloyId86.add($.__views.question);
    $.__views.chart = Ti.UI.createWebView({
        id: "chart",
        url: "chartjs/pie.html",
        height: "300",
        width: "300",
        top: "5",
        bottom: "5"
    });
    $.__views.__alloyId86.add($.__views.chart);
    $.__views.main = Ti.UI.createView({
        id: "main",
        borderRadius: "4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "#fff",
        left: "10",
        right: "10",
        top: "5",
        bottom: "5"
    });
    $.__views.__alloyId86.add($.__views.main);
    $.__views.comments = Ti.UI.createView({
        id: "comments",
        layout: "vertical",
        height: Ti.UI.SIZE,
        left: "10",
        right: "10",
        top: "5"
    });
    $.__views.__alloyId86.add($.__views.comments);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.poll_profile
    });
    $.__views.header.setParent($.__views.poll_profile);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var poll_data = JSON.parse(_data.data);
    $.question.setText(poll_data.question);
    load();
    $.header.openWindow($.poll_profile);
    exports.refresh = function() {
        load();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;