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
        backgroundColor: "#ccc",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "edit_plate"
    });
    $.__views.edit_plate && $.addTopLevelView($.__views.edit_plate);
    onFocus ? $.__views.edit_plate.addEventListener("focus", onFocus) : __defers["$.__views.edit_plate!focus!onFocus"] = true;
    $.__views.__alloyId42 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId42"
    });
    $.__views.edit_plate.add($.__views.__alloyId42);
    $.__views.plate = Ti.UI.createTextField({
        height: 100,
        left: 10,
        right: 10,
        top: 10,
        color: "#333",
        font: {
            fontSize: 60,
            fontWeight: "bold"
        },
        id: "plate"
    });
    $.__views.__alloyId42.add($.__views.plate);
    onEdit ? $.__views.plate.addEventListener("return", onEdit) : __defers["$.__views.plate!return!onEdit"] = true;
    $.__views.__alloyId43 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: "20",
        right: "20",
        top: "30",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#2179ca",
        height: Ti.UI.SIZE,
        bottom: "5",
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    onEdit ? $.__views.__alloyId44.addEventListener("click", onEdit) : __defers["$.__views.__alloyId44!click!onEdit"] = true;
    $.__views.__alloyId45 = Ti.UI.createLabel({
        text: "SAVE CARKEY#",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        borderRadius: "4",
        backgroundColor: "#999",
        height: Ti.UI.SIZE,
        top: "5",
        id: "__alloyId46"
    });
    $.__views.__alloyId43.add($.__views.__alloyId46);
    onCancel ? $.__views.__alloyId46.addEventListener("click", onCancel) : __defers["$.__views.__alloyId46!click!onCancel"] = true;
    $.__views.__alloyId47 = Ti.UI.createLabel({
        text: "CANCEL",
        color: "#fff",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _callBack = args._callBack || {};
    var plateText = login.getPlate() || "";
    plateText && $.plate.setValue(plateText.toUpperCase());
    $.edit_plate.open();
    __defers["$.__views.edit_plate!focus!onFocus"] && $.__views.edit_plate.addEventListener("focus", onFocus);
    __defers["$.__views.plate!return!onEdit"] && $.__views.plate.addEventListener("return", onEdit);
    __defers["$.__views.__alloyId44!click!onEdit"] && $.__views.__alloyId44.addEventListener("click", onEdit);
    __defers["$.__views.__alloyId46!click!onCancel"] && $.__views.__alloyId46.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;