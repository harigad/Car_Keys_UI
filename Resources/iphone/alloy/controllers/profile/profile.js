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
        var url = Alloy.Globals._search;
        var _data = {
            type: "user",
            id: data.uid,
            accessToken: login.getAccessToken()
        };
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.debug("User.load recieved data " + this.responseText);
                var response = JSON.parse(this.responseText);
                _data = response;
                var animation = Titanium.UI.createAnimation();
                animation.top = 0;
                animation.duration = 200;
                var animationHandler = function() {
                    animation.removeEventListener("complete", animationHandler);
                    build(response);
                };
                animation.addEventListener("complete", animationHandler);
                $.container.animate(animation);
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
        var cars = data.cars || [];
        for (var c = 0; cars.length > c; c++) {
            var car_btn = Alloy.createController("home/home_square", {
                _obj: cars[c],
                _data: {
                    image: "logos/48/" + cars[c].logo,
                    title: cars[c].model
                },
                _callBack: function(obj) {
                    Alloy.createController("car/car", {
                        _owner_name: _data.name,
                        _data: obj,
                        _callBack: function() {}
                    });
                }
            });
            rows.push(car_btn.getView());
        }
        var ridesLen = data.rides.length || "";
        var rides_btn = Alloy.createController("home/home_square", {
            _data: {
                image: "common/ride_along_36_36.png",
                subtext: ridesLen,
                title: "ride alongs"
            },
            _callBack: function() {}
        });
        rows.push(rides_btn.getView());
        var testdrives_btn = Alloy.createController("home/home_square", {
            _data: {
                image: "common/steering_36_36.png",
                subtext: 11,
                title: "test drives"
            },
            _callBack: function() {}
        });
        rows.push(testdrives_btn.getView());
        var media_btn = Alloy.createController("home/home_square", {
            _data: {
                image: "common/camera_36_36.png",
                title: "photos"
            },
            _callBack: function() {}
        });
        rows.push(media_btn.getView());
        $.main.setData(rows);
    }
    function showPleaseWait() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile/profile";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.profile = Ti.UI.createWindow({
        backgroundColor: "#f1f1f1",
        navBarHidden: true,
        id: "profile"
    });
    $.__views.profile && $.addTopLevelView($.__views.profile);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "50"
    });
    $.__views.profile.add($.__views.scroll);
    $.__views.container = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "container"
    });
    $.__views.scroll.add($.__views.container);
    $.__views.__alloyId95 = Ti.UI.createView({
        height: "110",
        top: "40",
        left: "15",
        bottom: "40",
        id: "__alloyId95"
    });
    $.__views.container.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createView({
        backgroundColor: "#ccc",
        width: "80",
        height: "80",
        top: "0",
        borderRadius: "40",
        id: "__alloyId96"
    });
    $.__views.__alloyId95.add($.__views.__alloyId96);
    $.__views.photo = Ti.UI.createImageView({
        width: "50",
        height: "50",
        id: "photo",
        borderRadius: "25"
    });
    $.__views.__alloyId96.add($.__views.photo);
    $.__views.name = Ti.UI.createLabel({
        top: 90,
        font: {
            fontSize: 24
        },
        color: "#ccc",
        shadowColor: "#fff",
        shadowOffset: {
            x: 1,
            y: 1
        },
        shadowRadius: 3,
        id: "name"
    });
    $.__views.__alloyId95.add($.__views.name);
    $.__views.main = Ti.UI.createTableView({
        top: "0",
        separatorStyle: Alloy.Globals._params.TableViewSeparatorStyle.NONE,
        id: "main",
        backgroundColor: "#fff",
        scrollable: "false",
        height: Ti.UI.SIZE
    });
    $.__views.container.add($.__views.main);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.profile
    });
    $.__views.header.setParent($.__views.profile);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    $.photo.setImage(_data.photo);
    $.name.setText(_data.name);
    $.header.openWindow($.profile);
    load(_data);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;