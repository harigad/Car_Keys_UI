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
            type: "user",
            id: data.uid,
            accessToken: login.getAccessToken()
        };
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.debug("User.load recieved data " + this.responseText);
                var response = JSON.parse(this.responseText);
                _data = response;
                build(response);
            },
            onerror: function(e) {
                Ti.API.error("User.load error " + e);
            }
        });
        client.open("POST", url);
        client.send(_data);
    }
    function build(data) {
        $.profile_businness_info.init(data);
        var cars = data.cars || [];
        var carRows = [];
        for (var i = 0; cars.length > i; i++) {
            var car = Alloy.createController("car/car", {
                _data: cars[i]
            });
            carRows.push(car.getView());
        }
        $.cars_container_inner.setData(carRows);
        var rides = data.rides || [];
        for (var i = 0; rides.length > i; i++) {
            var ride = Alloy.createController("feed/feed_rides", {
                _data: rides[i]
            });
            $.rides.add(ride.getView());
        }
        if (0 === rides.length) {
            var lbl = Ti.UI.createLabel({
                top: 25,
                bottom: 25,
                height: Ti.UI.SIZE,
                width: Ti.UI.SIZE,
                color: "#cecece",
                font: {
                    fontWeight: "bold"
                },
                text: "No Ride Alongs Yet!!!"
            });
            $.rides.add(lbl);
        }
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
        backgroundColor: "#eee",
        navBarHidden: true,
        id: "profile"
    });
    $.__views.profile && $.addTopLevelView($.__views.profile);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "-50"
    });
    $.__views.profile.add($.__views.scroll);
    $.__views.profile_container = Ti.UI.createView({
        backgroundColor: "#ffa633",
        top: "120",
        width: Ti.UI.FILL,
        left: 0,
        height: 150,
        id: "profile_container"
    });
    $.__views.scroll.add($.__views.profile_container);
    $.__views.photo = Ti.UI.createView({
        backgroundColor: "#333",
        left: 20,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#cecece",
        id: "photo"
    });
    $.__views.profile_container.add($.__views.photo);
    $.__views.photoImg = Ti.UI.createImageView({
        width: "100",
        id: "photoImg"
    });
    $.__views.photo.add($.__views.photoImg);
    $.__views.plate_container = Ti.UI.createView({
        left: 120,
        height: Ti.UI.SIZE,
        id: "plate_container"
    });
    $.__views.profile_container.add($.__views.plate_container);
    $.__views.name = Ti.UI.createLabel({
        color: "#fff",
        left: 10,
        font: {
            fontSize: 20
        },
        opacity: .8,
        id: "name"
    });
    $.__views.plate_container.add($.__views.name);
    $.__views.cars_container = Ti.UI.createView({
        top: 240,
        height: Ti.UI.SIZE,
        layout: "vertical",
        bottom: 10,
        id: "cars_container"
    });
    $.__views.scroll.add($.__views.cars_container);
    $.__views.profile_businness_info = Alloy.createController("profile/profile_businness_info", {
        id: "profile_businness_info",
        __parentSymbol: $.__views.cars_container
    });
    $.__views.profile_businness_info.setParent($.__views.cars_container);
    $.__views.cars_container_inner = Ti.UI.createTableView({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        borderRadius: 4,
        scrollable: false,
        id: "cars_container_inner"
    });
    $.__views.cars_container.add($.__views.cars_container_inner);
    $.__views.rides = Ti.UI.createView({
        backgroundColor: "#fff",
        height: Ti.UI.SIZE,
        layout: "vertical",
        borderRadius: 4,
        left: 10,
        right: 10,
        bottom: 10,
        top: 10,
        id: "rides"
    });
    $.__views.cars_container.add($.__views.rides);
    $.__views.header = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        left: 10,
        top: 5,
        bottom: 10,
        color: "#ccc",
        height: "Ti.UI.SIZE",
        text: "Ride Alongs",
        id: "header"
    });
    $.__views.rides.add($.__views.header);
    $.__views.feed = Ti.UI.createView({
        id: "feed",
        height: Ti.UI.SIZE
    });
    $.__views.cars_container.add($.__views.feed);
    $.__views.pull_to_refresh = Alloy.createController("components/pull_to_refresh/pull_to_refresh", {
        id: "pull_to_refresh",
        __parentSymbol: $.__views.scroll
    });
    $.__views.pull_to_refresh.setParent($.__views.scroll);
    $.__views.header = Alloy.createController("header/header", {
        font: {
            fontSize: 12
        },
        left: 10,
        top: 5,
        bottom: 10,
        color: "#ccc",
        height: "Ti.UI.SIZE",
        id: "header",
        __parentSymbol: $.__views.profile
    });
    $.__views.header.setParent($.__views.profile);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    $.pull_to_refresh.init($.scroll, function() {
        $.cars_container_inner.removeAllChildren();
        $.rides.removeAllChildren();
        load(_data);
    }, $.ride_along);
    $.name.setText(_data.name);
    $.header.openWindow($.profile);
    load(_data);
    $.photoImg.addEventListener("load", function() {
        $.photoImg.size.width > $.photoImg.size.height ? $.photoImg.setHeight(100) : $.photoImg.setWidth(100);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;