function Controller() {
    function call() {
        Ti.Platform.openURL("tel:" + _data.phone);
    }
    function openMap() {
        Alloy.createController("map/map", {
            _data: _data
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile/profile_businness_info";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        visible: false,
        id: "main",
        height: Ti.UI.SIZE,
        left: "10",
        right: "10",
        backgroundColor: "#fff",
        borderRadius: "4"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.__alloyId81 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "200",
        left: "10",
        top: "10",
        id: "__alloyId81"
    });
    $.__views.main.add($.__views.__alloyId81);
    openMap ? $.__views.__alloyId81.addEventListener("click", openMap) : __defers["$.__views.__alloyId81!click!openMap"] = true;
    $.__views.address_line = Ti.UI.createLabel({
        left: 0,
        color: "#ffa633",
        font: {
            fontSize: 12
        },
        id: "address_line"
    });
    $.__views.__alloyId81.add($.__views.address_line);
    $.__views.city_state = Ti.UI.createLabel({
        left: 0,
        color: "#ffa633",
        font: {
            fontSize: 12
        },
        id: "city_state"
    });
    $.__views.__alloyId81.add($.__views.city_state);
    $.__views.__alloyId82 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: "10",
        top: "10",
        bottom: "10",
        id: "__alloyId82"
    });
    $.__views.main.add($.__views.__alloyId82);
    $.__views.map = Ti.UI.createView({
        backgroundImage: "common/map_pin_50.png",
        left: "0",
        id: "map",
        height: "30",
        width: "30",
        backgroundColor: "#ffa633",
        borderRadius: "2"
    });
    $.__views.__alloyId82.add($.__views.map);
    openMap ? $.__views.map.addEventListener("click", openMap) : __defers["$.__views.map!click!openMap"] = true;
    $.__views.map = Ti.UI.createView({
        backgroundImage: "common/phone_50.png",
        left: "10",
        id: "map",
        height: "30",
        width: "30",
        backgroundColor: "#43b51f",
        borderRadius: "2"
    });
    $.__views.__alloyId82.add($.__views.map);
    call ? $.__views.map.addEventListener("click", call) : __defers["$.__views.map!click!call"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _data;
    exports.init = function(data) {
        if (data.data) {
            _data = data;
            $.main.setHeight(Ti.UI.SIZE);
            $.main.setVisible(true);
            $.main.setBottom(5);
            $.address_line.setText(data.address_line);
            $.city_state.setText(data.city + ", " + data.state);
        } else {
            $.main.setHeight(0);
            $.main.setVisible(false);
            $.main.setBottom(0);
        }
    };
    __defers["$.__views.__alloyId81!click!openMap"] && $.__views.__alloyId81.addEventListener("click", openMap);
    __defers["$.__views.map!click!openMap"] && $.__views.map.addEventListener("click", openMap);
    __defers["$.__views.map!click!call"] && $.__views.map.addEventListener("click", call);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;