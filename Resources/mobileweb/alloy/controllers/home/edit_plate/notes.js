function Controller() {
    function onOk() {
        Alloy.createController("home/edit_plate/edit_plate", {
            _callBack: function() {
                _callBack();
                $.notes.close();
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home/edit_plate/notes";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.notes = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "notes"
    });
    $.__views.notes && $.addTopLevelView($.__views.notes);
    $.__views.__alloyId50 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId50"
    });
    $.__views.notes.add($.__views.__alloyId50);
    $.__views.title = Ti.UI.createLabel({
        top: 20,
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        bottom: 10,
        font: {
            color: "#fff",
            fontSize: 18
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        shadowColor: "#999",
        shadowOffset: {
            x: 2,
            y: 2
        },
        shadowRadius: 3,
        text: "Few things about your Bumper Sticker",
        id: "title"
    });
    $.__views.__alloyId50.add($.__views.title);
    $.__views.__alloyId51 = Ti.UI.createView({
        left: "10",
        right: "10",
        bottom: "10",
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        bottom: 10,
        top: "10",
        font: {
            color: "#fff",
            fontSize: 14
        },
        text: "* Your Bumper Sticker is unique..ie no one else can have the same plate while you still have it",
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        bottom: 10,
        top: 10,
        font: {
            color: "#fff",
            fontSize: 14
        },
        text: "* You can change your Bumper Sticker at any time",
        id: "__alloyId53"
    });
    $.__views.__alloyId51.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        bottom: 10,
        top: 10,
        font: {
            color: "#fff",
            fontSize: 14
        },
        text: "* Stickers can be upto 10 digits long..not including the spaces",
        id: "__alloyId54"
    });
    $.__views.__alloyId51.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        bottom: 10,
        top: 10,
        font: {
            color: "#fff",
            fontSize: 14
        },
        text: "* You must have at least one vehichle before you can create your Bumper Sticker",
        id: "__alloyId55"
    });
    $.__views.__alloyId51.add($.__views.__alloyId55);
    $.__views.continue_btn = Ti.UI.createView({
        backgroundColor: "#f49033",
        borderRadius: 4,
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        id: "continue_btn"
    });
    $.__views.__alloyId50.add($.__views.continue_btn);
    onOk ? $.__views.continue_btn.addEventListener("click", onOk) : __defers["$.__views.continue_btn!click!onOk"] = true;
    $.__views.continue_btn_label = Ti.UI.createLabel({
        top: 20,
        bottom: 20,
        height: Ti.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        text: "I knew that!",
        id: "continue_btn_label"
    });
    $.__views.continue_btn.add($.__views.continue_btn_label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _callBack = args._callBack || {};
    login.getPlate() ? onOk() : $.notes.open();
    __defers["$.__views.continue_btn!click!onOk"] && $.__views.continue_btn.addEventListener("click", onOk);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;