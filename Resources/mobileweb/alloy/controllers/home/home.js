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
        plate && "" !== plate ? $.plate.setText(login.getPlate()) : $.plate.setText("create your CARKEY");
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
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home = Ti.UI.createWindow({
        backgroundColor: "#eee",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.scroll = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "scroll",
        top: "-120"
    });
    $.__views.home.add($.__views.scroll);
    $.__views.profile_container = Ti.UI.createView({
        top: "120",
        left: 0,
        width: Ti.UI.FILL,
        height: 200,
        backgroundColor: "#ffa633",
        id: "profile_container"
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
        text: "create your CARKEY#",
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
        top: 260,
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
        __parentSymbol: $.__views.main
    });
    $.__views.feed.setParent($.__views.main);
    $.__views.pull_to_refresh = Alloy.createController("components/pull_to_refresh/pull_to_refresh", {
        id: "pull_to_refresh",
        __parentSymbol: $.__views.scroll
    });
    $.__views.pull_to_refresh.setParent($.__views.scroll);
    $.__views.ride_along = Ti.UI.createView({
        id: "ride_along",
        width: "111",
        height: "66",
        borderRadius: "4",
        backgroundImage: "common/ridealong_blue_text.png",
        top: "0"
    });
    $.__views.home.add($.__views.ride_along);
    onRideAlong ? $.__views.ride_along.addEventListener("click", onRideAlong) : __defers["$.__views.ride_along!click!onRideAlong"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    onPlateChanged();
    $.pull_to_refresh.init($.scroll, function() {
        $.feed.refresh();
    }, $.ride_along);
    __defers["$.__views.plate_container!click!editPlate"] && $.__views.plate_container.addEventListener("click", editPlate);
    __defers["$.__views.ride_along!click!onRideAlong"] && $.__views.ride_along.addEventListener("click", onRideAlong);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;