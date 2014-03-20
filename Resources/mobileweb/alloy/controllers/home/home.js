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
        plate && "" !== plate ? $.plate.setText(login.getPlate()) : $.plate.setText("create your own plate");
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
        backgroundColor: "#ccc",
        navBarHidden: true,
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.scroll = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "scroll",
        top: "50"
    });
    $.__views.home.add($.__views.scroll);
    $.__views.profile_container = Ti.UI.createView({
        top: 0,
        left: 0,
        width: Ti.UI.FILL,
        height: 150,
        backgroundColor: "#eee",
        id: "profile_container"
    });
    $.__views.scroll.add($.__views.profile_container);
    $.__views.plate_container = Ti.UI.createView({
        top: 40,
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
        color: "#333",
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        text: "create your own plate",
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
        left: 10,
        right: 10,
        top: 90,
        id: "main"
    });
    $.__views.scroll.add($.__views.main);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        height: 20,
        left: 10,
        bottom: 10,
        color: "#999",
        font: {
            fontSize: 12
        },
        shadowColor: "#fff",
        shadowOffset: {
            x: 2,
            y: 2
        },
        shadowRadius: 3,
        text: "rides",
        id: "__alloyId28"
    });
    $.__views.main.add($.__views.__alloyId28);
    $.__views.mycars = Alloy.createController("mycars/mycars", {
        id: "mycars",
        __parentSymbol: $.__views.main
    });
    $.__views.mycars.setParent($.__views.main);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        height: 20,
        left: 10,
        bottom: 10,
        color: "#999",
        font: {
            fontSize: 12
        },
        shadowColor: "#fff",
        shadowOffset: {
            x: 2,
            y: 2
        },
        shadowRadius: 3,
        text: "friends",
        id: "__alloyId29"
    });
    $.__views.main.add($.__views.__alloyId29);
    $.__views.feed = Alloy.createController("feed/feed", {
        id: "feed",
        __parentSymbol: $.__views.main
    });
    $.__views.feed.setParent($.__views.main);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.home
    });
    $.__views.header.setParent($.__views.home);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    onPlateChanged();
    $.header.setHome();
    __defers["$.__views.plate_container!click!editPlate"] && $.__views.plate_container.addEventListener("click", editPlate);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;