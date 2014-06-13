function Controller() {
    function goToUser() {
        Alloy.createController("profile/profile", {
            _data: _data
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "model/model_friend";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.model_friend = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        top: "5",
        bottom: "5",
        id: "model_friend"
    });
    $.__views.model_friend && $.addTopLevelView($.__views.model_friend);
    goToUser ? $.__views.model_friend.addEventListener("click", goToUser) : __defers["$.__views.model_friend!click!goToUser"] = true;
    $.__views.photo = Ti.UI.createView({
        width: 35,
        height: 35,
        borderRadius: 17.5,
        borderColor: "#cecece",
        borderWidth: 2,
        backgroundColor: "#cecece",
        id: "photo"
    });
    $.__views.model_friend.add($.__views.photo);
    $.__views.__alloyId57 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId57"
    });
    $.__views.model_friend.add($.__views.__alloyId57);
    $.__views.name = Ti.UI.createLabel({
        left: 10,
        color: "#ffa633",
        text: "NAME",
        id: "name"
    });
    $.__views.__alloyId57.add($.__views.name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _data = args._data || {};
    $.photo.setBackgroundImage(_data.photo);
    $.name.setText(_data.name);
    __defers["$.__views.model_friend!click!goToUser"] && $.__views.model_friend.addEventListener("click", goToUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;