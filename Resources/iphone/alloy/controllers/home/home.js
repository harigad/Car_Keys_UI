function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function editPlate() {
        Alloy.createController("home/edit_plate/notes", {
            _callBack: function() {
                onPlateChanged();
            }
        });
    }
    function onPlateChanged() {
        var plate = login.getPlate();
        plate && "" !== plate ? $.plate.setText(login.getPlate()) : $.plate.setText("Create your Bumper Sticker");
    }
    function onRideAlong() {
        Alloy.createController("ridealong/ridealong", {
            _callBack: function(success) {
                success;
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home/home";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home = Ti.UI.createView({
        height: Ti.UI.FILL,
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.scroll = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "scroll",
        top: "-40"
    });
    $.__views.home.add($.__views.scroll);
    $.__views.profile_container = Ti.UI.createView({
        top: "0",
        left: 0,
        width: Ti.UI.FILL,
        height: "0",
        backgroundColor: "#ffa633",
        id: "profile_container",
        visible: "false"
    });
    $.__views.scroll.add($.__views.profile_container);
    $.__views.plate_container = Ti.UI.createView({
        top: 90,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "plate_container"
    });
    $.__views.profile_container.add($.__views.plate_container);
    editPlate ? $.__views.plate_container.addEventListener("click", editPlate) : __defers["$.__views.plate_container!click!editPlate"] = true;
    $.__views.plate = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 22,
        color: "#fff",
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        text: "Create your Bumer Sticker",
        id: "plate"
    });
    $.__views.plate_container.add($.__views.plate);
    $.__views.edit_icon = Ti.UI.createView({
        width: 22,
        height: 22,
        backgroundImage: "common/edit_icon.png",
        id: "edit_icon"
    });
    $.__views.plate_container.add($.__views.edit_icon);
    $.__views.main = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: 95,
        id: "main"
    });
    $.__views.scroll.add($.__views.main);
    $.__views.requests = Alloy.createController("ridealong/requests", {
        id: "requests",
        __parentSymbol: $.__views.main
    });
    $.__views.requests.setParent($.__views.main);
    $.__views.feed = Alloy.createController("feed/feed", {
        id: "feed",
        top: "100",
        __parentSymbol: $.__views.main
    });
    $.__views.feed.setParent($.__views.main);
    $.__views.pull_to_refresh = Alloy.createController("components/pull_to_refresh/pull_to_refresh", {
        id: "pull_to_refresh",
        __parentSymbol: $.__views.scroll
    });
    $.__views.pull_to_refresh.setParent($.__views.scroll);
    $.__views.__alloyId68 = Ti.UI.createView({
        height: "20",
        backgroundColor: "#ffa633",
        top: "0",
        id: "__alloyId68"
    });
    $.__views.home.add($.__views.__alloyId68);
    $.__views.home_menu = Alloy.createController("ridealong/home_menu", {
        id: "home_menu",
        top: "0",
        __parentSymbol: $.__views.home
    });
    $.__views.home_menu.setParent($.__views.home);
    $.__views.ride_along = Ti.UI.createView({
        id: "ride_along",
        width: "111",
        height: "66",
        borderRadius: "4",
        backgroundImage: "common/ridealong_blue_text.png",
        top: "20"
    });
    $.__views.home.add($.__views.ride_along);
    onRideAlong ? $.__views.ride_along.addEventListener("click", onRideAlong) : __defers["$.__views.ride_along!click!onRideAlong"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    onPlateChanged();
    $.pull_to_refresh.init($.scroll, function() {}, $.ride_along);
    __defers["$.__views.plate_container!click!editPlate"] && $.__views.plate_container.addEventListener("click", editPlate);
    __defers["$.__views.ride_along!click!onRideAlong"] && $.__views.ride_along.addEventListener("click", onRideAlong);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;