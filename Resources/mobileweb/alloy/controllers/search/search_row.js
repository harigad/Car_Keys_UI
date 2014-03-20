function Controller() {
    function onClick() {
        login.go("place", _data);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "search/search_row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.search_row = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "search_row"
    });
    $.__views.search_row && $.addTopLevelView($.__views.search_row);
    $.__views.main = Ti.UI.createView({
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "main"
    });
    $.__views.search_row.add($.__views.main);
    onClick ? $.__views.main.addEventListener("click", onClick) : __defers["$.__views.main!click!onClick"] = true;
    $.__views.__alloyId14 = Ti.UI.createView({
        layout: "horizontal",
        top: "0",
        bottom: "0",
        height: Ti.UI.SIZE,
        id: "__alloyId14"
    });
    $.__views.main.add($.__views.__alloyId14);
    $.__views.title = Ti.UI.createLabel({
        left: 0,
        right: 3,
        width: Ti.UI.SIZE,
        color: "#2179ca",
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        text: "Bucca De Beppo",
        id: "title"
    });
    $.__views.__alloyId14.add($.__views.title);
    $.__views.person = Ti.UI.createLabel({
        left: 0,
        right: 3,
        width: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        id: "person"
    });
    $.__views.__alloyId14.add($.__views.person);
    $.__views.address = Ti.UI.createLabel({
        left: 0,
        width: Ti.UI.SIZE,
        color: "#999",
        font: {
            fontSize: 12
        },
        id: "address"
    });
    $.__views.main.add($.__views.address);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    args._closeFn;
    $.title.setText(_data.placename);
    $.address.setText(_data.vicinity);
    _data.founder && $.person.setText(" by " + _data.founder);
    __defers["$.__views.main!click!onClick"] && $.__views.main.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;