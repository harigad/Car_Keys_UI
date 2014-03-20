function Controller() {
    function onFocus() {
        $.plate.focus();
    }
    function onEdit() {
        process();
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
        backgroundColor: "#eee",
        id: "edit_plate"
    });
    $.__views.edit_plate && $.addTopLevelView($.__views.edit_plate);
    onFocus ? $.__views.edit_plate.addEventListener("focus", onFocus) : __defers["$.__views.edit_plate!focus!onFocus"] = true;
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
    $.__views.edit_plate.add($.__views.plate);
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
    __defers["$.__views.plate!return!onEdit"] && $.__views.plate.addEventListener("return", onEdit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;