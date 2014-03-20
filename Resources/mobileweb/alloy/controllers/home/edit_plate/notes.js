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
        backgroundColor: "#ccc",
        id: "notes"
    });
    $.__views.notes && $.addTopLevelView($.__views.notes);
    $.__views.__alloyId30 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId30"
    });
    $.__views.notes.add($.__views.__alloyId30);
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
        text: "Few things about your Plate",
        id: "title"
    });
    $.__views.__alloyId30.add($.__views.title);
    $.__views.__alloyId31 = Ti.UI.createView({
        left: "10",
        right: "10",
        bottom: "10",
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        bottom: 10,
        top: "10",
        font: {
            color: "#333",
            fontSize: 14
        },
        shadowColor: "#fff",
        shadowOffset: {
            x: 2,
            y: 2
        },
        shadowRadius: 3,
        text: "* Your Plate is unique..ie no one else can have the same plate while you still have it",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        bottom: 10,
        top: 10,
        font: {
            color: "#333",
            fontSize: 14
        },
        shadowColor: "#fff",
        shadowOffset: {
            x: 2,
            y: 2
        },
        shadowRadius: 3,
        text: "* You can change your Plate at any time",
        id: "__alloyId33"
    });
    $.__views.__alloyId31.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        bottom: 10,
        top: 10,
        font: {
            color: "#333",
            fontSize: 14
        },
        shadowColor: "#fff",
        shadowOffset: {
            x: 2,
            y: 2
        },
        shadowRadius: 3,
        text: "* Plates can be upto 10 digits long..not including the spaces",
        id: "__alloyId34"
    });
    $.__views.__alloyId31.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        bottom: 10,
        top: 10,
        font: {
            color: "#333",
            fontSize: 14
        },
        shadowColor: "#fff",
        shadowOffset: {
            x: 2,
            y: 2
        },
        shadowRadius: 3,
        text: "* You must have at least one vehichle before you can add a Plate",
        id: "__alloyId35"
    });
    $.__views.__alloyId31.add($.__views.__alloyId35);
    $.__views.continue_btn = Ti.UI.createView({
        backgroundColor: "#999",
        borderRadius: 4,
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        id: "continue_btn"
    });
    $.__views.__alloyId30.add($.__views.continue_btn);
    onOk ? $.__views.continue_btn.addEventListener("click", onOk) : __defers["$.__views.continue_btn!click!onOk"] = true;
    $.__views.continue_btn_label = Ti.UI.createLabel({
        top: 20,
        bottom: 20,
        height: Ti.UI.SIZE,
        color: "#eee",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        shadowColor: "#666",
        shadowOffset: {
            x: 2,
            y: 2
        },
        shadowRadius: 3,
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