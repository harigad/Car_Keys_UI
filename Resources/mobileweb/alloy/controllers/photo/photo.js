function Controller() {
    function onClick() {
        $.photo.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "photo/photo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.photo = Ti.UI.createWindow({
        modal: "true",
        id: "photo"
    });
    $.__views.photo && $.addTopLevelView($.__views.photo);
    onClick ? $.__views.photo.addEventListener("click", onClick) : __defers["$.__views.photo!click!onClick"] = true;
    $.__views.img = Ti.UI.createImageView({
        id: "img",
        borderRadius: "4",
        bubbleParent: "false"
    });
    $.__views.photo.add($.__views.img);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _data = args._data || {};
    $.img.setImage(_data);
    $.photo.open();
    __defers["$.__views.photo!click!onClick"] && $.__views.photo.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;