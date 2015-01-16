function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function test_drive() {
        Alloy.createController("testdrives/request/testdrive_find_car");
    }
    function add_car() {
        Alloy.createController("signup/signup", {
            animate: true
        });
    }
    function form() {
        debugger;
        Alloy.createController("form/form", {
            _ask: this.ask
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu/menu";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.menu = Ti.UI.createWindow({
        backgroundColor: "#40a3ff",
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    $.__views.menu_container = Ti.UI.createScrollView({
        id: "menu_container",
        layout: "vertical",
        top: "30"
    });
    $.__views.menu.add($.__views.menu_container);
    $.__views.__alloyId99 = Ti.UI.createView({
        left: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId99"
    });
    $.__views.menu_container.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createView({
        width: 30,
        height: 30,
        backgroundColor: "#eee",
        borderRadius: 15,
        left: 0,
        id: "__alloyId100"
    });
    $.__views.__alloyId99.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 10,
        color: "#fff",
        font: {
            fontSize: 18
        },
        text: "check-in",
        id: "__alloyId101"
    });
    $.__views.__alloyId99.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: 30,
        left: 5,
        opacity: .5,
        color: "#fff",
        font: {
            fontSize: 12
        },
        text: "(30 points)",
        id: "__alloyId102"
    });
    $.__views.__alloyId99.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createView({
        left: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId103"
    });
    $.__views.menu_container.add($.__views.__alloyId103);
    test_drive ? $.__views.__alloyId103.addEventListener("click", test_drive) : __defers["$.__views.__alloyId103!click!test_drive"] = true;
    $.__views.__alloyId104 = Ti.UI.createView({
        width: 30,
        height: 30,
        backgroundColor: "#eee",
        borderRadius: 15,
        left: 0,
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 10,
        color: "#fff",
        font: {
            fontSize: 18
        },
        text: "test drive",
        id: "__alloyId105"
    });
    $.__views.__alloyId103.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: 30,
        left: 5,
        opacity: .5,
        color: "#fff",
        font: {
            fontSize: 12
        },
        text: "(150 points)",
        id: "__alloyId106"
    });
    $.__views.__alloyId103.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createView({
        left: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        ask: "oil_change",
        id: "__alloyId107"
    });
    $.__views.menu_container.add($.__views.__alloyId107);
    form ? $.__views.__alloyId107.addEventListener("click", form) : __defers["$.__views.__alloyId107!click!form"] = true;
    $.__views.__alloyId108 = Ti.UI.createView({
        width: 30,
        height: 30,
        backgroundColor: "#eee",
        borderRadius: 15,
        left: 0,
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 10,
        color: "#fff",
        font: {
            fontSize: 18
        },
        text: "oil change",
        id: "__alloyId109"
    });
    $.__views.__alloyId107.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: 30,
        left: 5,
        opacity: .5,
        color: "#fff",
        font: {
            fontSize: 12
        },
        text: "(75 points)",
        id: "__alloyId110"
    });
    $.__views.__alloyId107.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createView({
        left: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        ask: "air_filter",
        id: "__alloyId111"
    });
    $.__views.menu_container.add($.__views.__alloyId111);
    form ? $.__views.__alloyId111.addEventListener("click", form) : __defers["$.__views.__alloyId111!click!form"] = true;
    $.__views.__alloyId112 = Ti.UI.createView({
        width: 30,
        height: 30,
        backgroundColor: "#eee",
        borderRadius: 15,
        left: 0,
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 10,
        color: "#fff",
        font: {
            fontSize: 18
        },
        text: "new air filter",
        id: "__alloyId113"
    });
    $.__views.__alloyId111.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: 30,
        left: 5,
        opacity: .5,
        color: "#fff",
        font: {
            fontSize: 12
        },
        text: "(30 points)",
        id: "__alloyId114"
    });
    $.__views.__alloyId111.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createView({
        left: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        ask: "tire_pressure",
        id: "__alloyId115"
    });
    $.__views.menu_container.add($.__views.__alloyId115);
    form ? $.__views.__alloyId115.addEventListener("click", form) : __defers["$.__views.__alloyId115!click!form"] = true;
    $.__views.__alloyId116 = Ti.UI.createView({
        width: 30,
        height: 30,
        backgroundColor: "#eee",
        borderRadius: 15,
        left: 0,
        id: "__alloyId116"
    });
    $.__views.__alloyId115.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 10,
        color: "#fff",
        font: {
            fontSize: 18
        },
        text: "tire pressure check",
        id: "__alloyId117"
    });
    $.__views.__alloyId115.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: 30,
        left: 5,
        opacity: .5,
        color: "#fff",
        font: {
            fontSize: 12
        },
        text: "(20 points)",
        id: "__alloyId118"
    });
    $.__views.__alloyId115.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createView({
        left: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        ask: "wheel_balance",
        id: "__alloyId119"
    });
    $.__views.menu_container.add($.__views.__alloyId119);
    form ? $.__views.__alloyId119.addEventListener("click", form) : __defers["$.__views.__alloyId119!click!form"] = true;
    $.__views.__alloyId120 = Ti.UI.createView({
        width: 30,
        height: 30,
        backgroundColor: "#eee",
        borderRadius: 15,
        left: 0,
        id: "__alloyId120"
    });
    $.__views.__alloyId119.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 10,
        color: "#fff",
        font: {
            fontSize: 18
        },
        text: "wheel balancing",
        id: "__alloyId121"
    });
    $.__views.__alloyId119.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: 30,
        left: 5,
        opacity: .5,
        color: "#fff",
        font: {
            fontSize: 12
        },
        text: "(60 points)",
        id: "__alloyId122"
    });
    $.__views.__alloyId119.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createView({
        left: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        ask: "wheel_alignment",
        id: "__alloyId123"
    });
    $.__views.menu_container.add($.__views.__alloyId123);
    form ? $.__views.__alloyId123.addEventListener("click", form) : __defers["$.__views.__alloyId123!click!form"] = true;
    $.__views.__alloyId124 = Ti.UI.createView({
        width: 30,
        height: 30,
        backgroundColor: "#eee",
        borderRadius: 15,
        left: 0,
        id: "__alloyId124"
    });
    $.__views.__alloyId123.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 10,
        color: "#fff",
        font: {
            fontSize: 18
        },
        text: "wheel alignment",
        id: "__alloyId125"
    });
    $.__views.__alloyId123.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: 30,
        left: 5,
        opacity: .5,
        color: "#fff",
        font: {
            fontSize: 12
        },
        text: "(90 points)",
        id: "__alloyId126"
    });
    $.__views.__alloyId123.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createView({
        left: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        ask: "new_tire",
        id: "__alloyId127"
    });
    $.__views.menu_container.add($.__views.__alloyId127);
    form ? $.__views.__alloyId127.addEventListener("click", form) : __defers["$.__views.__alloyId127!click!form"] = true;
    $.__views.__alloyId128 = Ti.UI.createView({
        width: 30,
        height: 30,
        backgroundColor: "#eee",
        borderRadius: 15,
        left: 0,
        id: "__alloyId128"
    });
    $.__views.__alloyId127.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 10,
        color: "#fff",
        font: {
            fontSize: 18
        },
        text: "new tires",
        id: "__alloyId129"
    });
    $.__views.__alloyId127.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: 30,
        left: 5,
        opacity: .5,
        color: "#fff",
        font: {
            fontSize: 12
        },
        text: "(120 points)",
        id: "__alloyId130"
    });
    $.__views.__alloyId127.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createView({
        left: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        ask: "brake_fluid",
        id: "__alloyId131"
    });
    $.__views.menu_container.add($.__views.__alloyId131);
    form ? $.__views.__alloyId131.addEventListener("click", form) : __defers["$.__views.__alloyId131!click!form"] = true;
    $.__views.__alloyId132 = Ti.UI.createView({
        width: 30,
        height: 30,
        backgroundColor: "#eee",
        borderRadius: 15,
        left: 0,
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 10,
        color: "#fff",
        font: {
            fontSize: 18
        },
        text: "new brake fluid",
        id: "__alloyId133"
    });
    $.__views.__alloyId131.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: 30,
        left: 5,
        opacity: .5,
        color: "#fff",
        font: {
            fontSize: 12
        },
        text: "(120 points)",
        id: "__alloyId134"
    });
    $.__views.__alloyId131.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createView({
        left: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId135"
    });
    $.__views.menu_container.add($.__views.__alloyId135);
    add_car ? $.__views.__alloyId135.addEventListener("click", add_car) : __defers["$.__views.__alloyId135!click!add_car"] = true;
    $.__views.__alloyId136 = Ti.UI.createView({
        width: 30,
        height: 30,
        backgroundColor: "#eee",
        borderRadius: 15,
        left: 0,
        id: "__alloyId136"
    });
    $.__views.__alloyId135.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 10,
        color: "#fff",
        font: {
            fontSize: 18
        },
        text: "add new car",
        id: "__alloyId137"
    });
    $.__views.__alloyId135.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: 30,
        left: 5,
        opacity: .5,
        color: "#fff",
        font: {
            fontSize: 12
        },
        text: "(250 points)",
        id: "__alloyId138"
    });
    $.__views.__alloyId135.add($.__views.__alloyId138);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menu.open();
    __defers["$.__views.__alloyId103!click!test_drive"] && $.__views.__alloyId103.addEventListener("click", test_drive);
    __defers["$.__views.__alloyId107!click!form"] && $.__views.__alloyId107.addEventListener("click", form);
    __defers["$.__views.__alloyId111!click!form"] && $.__views.__alloyId111.addEventListener("click", form);
    __defers["$.__views.__alloyId115!click!form"] && $.__views.__alloyId115.addEventListener("click", form);
    __defers["$.__views.__alloyId119!click!form"] && $.__views.__alloyId119.addEventListener("click", form);
    __defers["$.__views.__alloyId123!click!form"] && $.__views.__alloyId123.addEventListener("click", form);
    __defers["$.__views.__alloyId127!click!form"] && $.__views.__alloyId127.addEventListener("click", form);
    __defers["$.__views.__alloyId131!click!form"] && $.__views.__alloyId131.addEventListener("click", form);
    __defers["$.__views.__alloyId135!click!add_car"] && $.__views.__alloyId135.addEventListener("click", add_car);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;