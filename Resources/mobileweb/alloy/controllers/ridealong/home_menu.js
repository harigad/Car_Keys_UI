function Controller() {
    function goToMyCars() {
        0 === login.getCars().length ? Alloy.createController("signup/signup", {
            _callBack: function() {
                login.getCars().length > 0 && mycarsObj.open(true);
            }
        }) : mycarsObj.open();
    }
    function goToFriends() {
        friendsObj.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/home_menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home_menu = Ti.UI.createView({
        backgroundColor: "#f49033",
        height: Ti.UI.SIZE,
        bottom: "5",
        id: "home_menu"
    });
    $.__views.home_menu && $.addTopLevelView($.__views.home_menu);
    $.__views.__alloyId88 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#fff",
        width: "1",
        opacity: "0.3",
        id: "__alloyId88"
    });
    $.__views.home_menu.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createView({
        width: "150",
        height: Ti.UI.SIZE,
        left: "0",
        id: "__alloyId89"
    });
    $.__views.home_menu.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        layout: "horizontal",
        height: "Ti.UI.SIZE",
        width: "Ti.UI.SIZE",
        top: 5,
        bottom: 5,
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    goToMyCars ? $.__views.__alloyId90.addEventListener("click", goToMyCars) : __defers["$.__views.__alloyId90!click!goToMyCars"] = true;
    $.__views.__alloyId91 = Ti.UI.createView({
        height: 20,
        opacity: .8,
        backgroundImage: "common/car.png",
        width: "23",
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
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
    $.__views.__alloyId90.add($.__views.cars);
    $.__views.__alloyId92 = Ti.UI.createView({
        width: "150",
        height: Ti.UI.SIZE,
        right: "0",
        id: "__alloyId92"
    });
    $.__views.home_menu.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createView({
        layout: "horizontal",
        height: "Ti.UI.SIZE",
        width: "Ti.UI.SIZE",
        top: 5,
        bottom: 5,
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    goToFriends ? $.__views.__alloyId93.addEventListener("click", goToFriends) : __defers["$.__views.__alloyId93!click!goToFriends"] = true;
    $.__views.__alloyId94 = Ti.UI.createView({
        height: 20,
        opacity: .8,
        backgroundImage: "common/friends.png",
        width: "29",
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
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
    $.__views.__alloyId93.add($.__views.friends);
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
    __defers["$.__views.__alloyId90!click!goToMyCars"] && $.__views.__alloyId90.addEventListener("click", goToMyCars);
    __defers["$.__views.__alloyId93!click!goToFriends"] && $.__views.__alloyId93.addEventListener("click", goToFriends);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;