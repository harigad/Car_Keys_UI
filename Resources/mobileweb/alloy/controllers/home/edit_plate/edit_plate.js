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
        var url = "http://flair.me/carkey/search.php";
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
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.edit_plate = Ti.UI.createWindow({
        backgroundColor: "#ffa633",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "edit_plate"
    });
    $.__views.edit_plate && $.addTopLevelView($.__views.edit_plate);
    onFocus ? $.__views.edit_plate.addEventListener("focus", onFocus) : __defers["$.__views.edit_plate!focus!onFocus"] = true;
    $.__views.__alloyId44 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId44"
    });
    $.__views.edit_plate.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#f49033",
        top: "0",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ffa633",
        borderRadius: 4,
        left: "10",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    onCancel ? $.__views.__alloyId46.addEventListener("click", onCancel) : __defers["$.__views.__alloyId46!click!onCancel"] = true;
    $.__views.__alloyId47 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "cancel",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.question = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#fff",
        opacity: .5,
        text: "RideAlong",
        id: "question"
    });
    $.__views.__alloyId45.add($.__views.question);
    $.__views.__alloyId48 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ffa633",
        borderRadius: 4,
        right: "10",
        id: "__alloyId48"
    });
    $.__views.__alloyId45.add($.__views.__alloyId48);
    onEdit ? $.__views.__alloyId48.addEventListener("click", onEdit) : __defers["$.__views.__alloyId48!click!onEdit"] = true;
    $.__views.__alloyId49 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "send",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
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
    $.__views.__alloyId44.add($.__views.plate);
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
    __defers["$.__views.__alloyId46!click!onCancel"] && $.__views.__alloyId46.addEventListener("click", onCancel);
    __defers["$.__views.__alloyId48!click!onEdit"] && $.__views.__alloyId48.addEventListener("click", onEdit);
    __defers["$.__views.plate!return!onEdit"] && $.__views.plate.addEventListener("return", onEdit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;