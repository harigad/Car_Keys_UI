function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goToMyCars() {
        Ti.API.debug("goToMyCars 1");
        if (0 === login.getCars().length) {
            Ti.API.debug("goToMyCars 2");
            Alloy.createController("signup/signup", {
                _callBack: function() {
                    login.getCars().length > 0 && mycarsObj.open(true);
                }
            });
        } else {
            Ti.API.debug("goToMyCars 3");
            mycarsObj.open();
        }
    }
    function goToFriends() {
        Ti.API.debug("goToFriends 1");
        friendsObj.open();
        Ti.API.debug("goToFriends 2");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/home_menu";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home_menu = Ti.UI.createView({
        backgroundColor: "#ffa633",
        height: Ti.UI.SIZE,
        top: "20",
        id: "home_menu"
    });
    $.__views.home_menu && $.addTopLevelView($.__views.home_menu);
    $.__views.__alloyId107 = Ti.UI.createView({
        width: "150",
        height: "60",
        left: "0",
        "å": "å",
        id: "__alloyId107"
    });
    $.__views.home_menu.add($.__views.__alloyId107);
    goToMyCars ? $.__views.__alloyId107.addEventListener("click", goToMyCars) : __defers["$.__views.__alloyId107!click!goToMyCars"] = true;
    $.__views.__alloyId108 = Ti.UI.createView({
        layout: "horizontal",
        height: "Ti.UI.SIZE",
        width: "Ti.UI.SIZE",
        top: 20,
        bottom: 20,
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createView({
        height: 20,
        opacity: .8,
        backgroundImage: "common/car.png",
        width: "23",
        id: "__alloyId109"
    });
    $.__views.__alloyId108.add($.__views.__alloyId109);
    $.__views.cars = Ti.UI.createLabel({
        left: 5,
        top: 0,
        opacity: .5,
        height: 20,
        color: "#fff",
        width: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        id: "cars"
    });
    $.__views.__alloyId108.add($.__views.cars);
    $.__views.__alloyId110 = Ti.UI.createView({
        width: "150",
        height: "60",
        right: "0",
        layout: "vertical",
        id: "__alloyId110"
    });
    $.__views.home_menu.add($.__views.__alloyId110);
    goToFriends ? $.__views.__alloyId110.addEventListener("click", goToFriends) : __defers["$.__views.__alloyId110!click!goToFriends"] = true;
    $.__views.__alloyId111 = Ti.UI.createView({
        layout: "horizontal",
        height: "Ti.UI.SIZE",
        width: "Ti.UI.SIZE",
        top: 20,
        bottom: 20,
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createView({
        height: 20,
        opacity: .8,
        backgroundImage: "common/friends.png",
        width: "29",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.friends = Ti.UI.createLabel({
        left: 5,
        top: 0,
        opacity: .5,
        height: 20,
        color: "#fff",
        width: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        id: "friends"
    });
    $.__views.__alloyId111.add($.__views.friends);
    $.__views.__alloyId113 = Ti.UI.createView({
        width: "2",
        backgroundColor: "#fff",
        height: "60",
        opacity: "0.1",
        id: "__alloyId113"
    });
    $.__views.home_menu.add($.__views.__alloyId113);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    args._data || {};
    args._callBack;
    $.cars.setText("(" + login.getCars().length + ")");
    $.friends.setText("(" + login.getFriendsCars().length + ")");
    var mycarsObj = Alloy.createController("mycars/mycars");
    var friendsObj = Alloy.createController("friends/friends");
    Ti.App.addEventListener("cars_updated", function(cars) {
        $.cars.setText("(" + cars.length + ")");
    });
    Ti.App.addEventListener("friends_cars_updated", function(friendsCars) {
        $.friends.setText("(" + friendsCars.length + ")");
    });
    __defers["$.__views.__alloyId107!click!goToMyCars"] && $.__views.__alloyId107.addEventListener("click", goToMyCars);
    __defers["$.__views.__alloyId110!click!goToFriends"] && $.__views.__alloyId110.addEventListener("click", goToFriends);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;