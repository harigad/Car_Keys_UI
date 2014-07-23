function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feed/feed_date";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.feed_date = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "feed_date"
    });
    $.__views.feed_date && $.addTopLevelView($.__views.feed_date);
    $.__views.date = Ti.UI.createLabel({
        left: "10",
        height: Ti.UI.SIZE,
        color: "#aaa",
        id: "date",
        top: "5",
        bottom: "5"
    });
    $.__views.feed_date.add($.__views.date);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var _month = args._month || "";
    var _year = args._year || "";
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    $.date.setText(monthNames[_month] + ", " + _year);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;