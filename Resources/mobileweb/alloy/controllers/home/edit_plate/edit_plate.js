function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onFocus() {
        $.plate.focus();
    }
    function onEdit() {
        process();
    }
    function onCancel() {
        _callBack();
        $.edit_plate.close();
    }
    function process() {
        if ("" !== $.plate.getValue()) {
            login.setPlate($.plate.getValue().toUpperCase());
            send_to_server();
        }
        $.edit_plate.close();
        _callBack();
    }
    function send_to_server() {
        var url = Alloy.Globals._search;
        var _postData = {
            type: "editplate",
            plate: $.plate.getValue().toUpperCase(),
            accessToken: login.getAccessToken()
        };
        Ti.API.debug("editing plate " + $.plate.getValue());
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.debug("plate changed");
            },
            onerror: function(e) {
                Ti.API.error("plate change error" + e);
            }
        });
        client.open("POST", url);
        client.send(_postData);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home/edit_plate/edit_plate";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.edit_plate = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        navBarHidden: true,
        id: "edit_plate"
    });
    $.__views.edit_plate && $.addTopLevelView($.__views.edit_plate);
    onFocus ? $.__views.edit_plate.addEventListener("focus", onFocus) : __defers["$.__views.edit_plate!focus!onFocus"] = true;
    $.__views.__alloyId70 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId70"
    });
    $.__views.edit_plate.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "#f49033",
        layout: "vertical",
        id: "__alloyId71"
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createView({
        height: "50",
        top: "10",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ffa633",
        borderRadius: 4,
        left: "10",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    onCancel ? $.__views.__alloyId73.addEventListener("click", onCancel) : __defers["$.__views.__alloyId73!click!onCancel"] = true;
    $.__views.__alloyId74 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "cancel",
        id: "__alloyId74"
    });
    $.__views.__alloyId73.add($.__views.__alloyId74);
    $.__views.question = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#fff",
        opacity: .5,
        text: "Create Bumper Sticker",
        id: "question"
    });
    $.__views.__alloyId72.add($.__views.question);
    $.__views.__alloyId75 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ffa633",
        borderRadius: 4,
        right: "10",
        id: "__alloyId75"
    });
    $.__views.__alloyId72.add($.__views.__alloyId75);
    onEdit ? $.__views.__alloyId75.addEventListener("click", onEdit) : __defers["$.__views.__alloyId75!click!onEdit"] = true;
    $.__views.__alloyId76 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "save",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.plate = Ti.UI.createTextField({
        height: 100,
        left: 10,
        right: 10,
        top: 10,
        color: "#fff",
        font: {
            fontSize: 60,
            fontWeight: "bold"
        },
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        id: "plate",
        hintText: ""
    });
    $.__views.__alloyId70.add($.__views.plate);
    onEdit ? $.__views.plate.addEventListener("return", onEdit) : __defers["$.__views.plate!return!onEdit"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _callBack = args._callBack || {};
    var plateText = login.getPlate() || "";
    plateText && $.plate.setValue(plateText.toUpperCase());
    $.edit_plate.open();
    __defers["$.__views.edit_plate!focus!onFocus"] && $.__views.edit_plate.addEventListener("focus", onFocus);
    __defers["$.__views.__alloyId73!click!onCancel"] && $.__views.__alloyId73.addEventListener("click", onCancel);
    __defers["$.__views.__alloyId75!click!onEdit"] && $.__views.__alloyId75.addEventListener("click", onEdit);
    __defers["$.__views.plate!return!onEdit"] && $.__views.plate.addEventListener("return", onEdit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;