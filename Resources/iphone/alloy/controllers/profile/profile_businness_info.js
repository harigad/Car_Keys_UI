function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

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
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
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
    $.__views.__alloyId97 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "200",
        left: "10",
        top: "10",
        id: "__alloyId97"
    });
    $.__views.main.add($.__views.__alloyId97);
    openMap ? $.__views.__alloyId97.addEventListener("click", openMap) : __defers["$.__views.__alloyId97!click!openMap"] = true;
    $.__views.address_line = Ti.UI.createLabel({
        left: 0,
        color: "#ffa633",
        font: {
            fontSize: 12
        },
        id: "address_line"
    });
    $.__views.__alloyId97.add($.__views.address_line);
    $.__views.city_state = Ti.UI.createLabel({
        left: 0,
        color: "#ffa633",
        font: {
            fontSize: 12
        },
        id: "city_state"
    });
    $.__views.__alloyId97.add($.__views.city_state);
    $.__views.__alloyId98 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: "10",
        top: "10",
        bottom: "10",
        id: "__alloyId98"
    });
    $.__views.main.add($.__views.__alloyId98);
    $.__views.map = Ti.UI.createView({
        backgroundImage: "common/map_pin_50.png",
        left: "0",
        id: "map",
        height: "30",
        width: "30",
        backgroundColor: "#ffa633",
        borderRadius: "2"
    });
    $.__views.__alloyId98.add($.__views.map);
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
    $.__views.__alloyId98.add($.__views.map);
    call ? $.__views.map.addEventListener("click", call) : __defers["$.__views.map!click!call"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _data;
    exports.init = function(data) {
        if (data.info) {
            _data = data.info;
            $.main.setHeight(Ti.UI.SIZE);
            $.main.setVisible(true);
            $.main.setBottom(5);
            $.address_line.setText(_data.address);
            $.city_state.setText(_data.city + ", " + _data.state);
        } else {
            $.main.setHeight(0);
            $.main.setVisible(false);
            $.main.setBottom(0);
        }
    };
    __defers["$.__views.__alloyId97!click!openMap"] && $.__views.__alloyId97.addEventListener("click", openMap);
    __defers["$.__views.map!click!openMap"] && $.__views.map.addEventListener("click", openMap);
    __defers["$.__views.map!click!call"] && $.__views.map.addEventListener("click", call);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;