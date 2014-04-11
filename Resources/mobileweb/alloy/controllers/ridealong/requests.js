function Controller() {
    function draw() {
        var requests = login.getRequests();
        if (requests.length > 0) for (var i = 0; requests.length > i; i++) {
            var request = Alloy.createController("ridealong/request", {
                _data: requests[i],
                _callBack: function() {
                    refresh();
                }
            });
            $.main.add(request.getView());
            requests.length - 1 > i && $.main.add(Ti.UI.createView({
                height: 1,
                backgroundColor: "#fff",
                opacity: .2
            }));
        }
    }
    function refresh() {
        clear();
        draw();
    }
    function clear() {
        var len = $.main.children.length;
        for (var i = 0; len > i; i++) $.main.remove($.main.children[0]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ridealong/requests";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createView({
        id: "main",
        height: Ti.UI.SIZE,
        backgroundColor: "#2179ca",
        borderRadius: "4",
        top: "30",
        layout: "vertical"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    draw();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;