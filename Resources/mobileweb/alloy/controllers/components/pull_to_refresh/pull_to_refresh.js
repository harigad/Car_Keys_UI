function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "components/pull_to_refresh/pull_to_refresh";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createView({
        id: "main",
        height: "120",
        backgroundColor: "#ffa633",
        width: Ti.UI.FILL,
        top: "0",
        left: "0"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.txt = Ti.UI.createLabel({
        text: "pull to refresh",
        id: "txt",
        color: "#fff",
        bottom: "10"
    });
    $.__views.main.add($.__views.txt);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _scroll, _callBack;
    var _status;
    _status = false;
    exports.init = function(scroll, callBack, optionalOverlay) {
        _scroll = scroll;
        _callBack = callBack;
        _scroll.addEventListener("scroll", function(e) {
            optionalOverlay && (-20 > e.y && e.dragging ? optionalOverlay.setOpacity(.1) : optionalOverlay.setOpacity(1));
            if (e.dragging) if (-80 >= e.y && false === _status) {
                $.txt.setText("release to refresh");
                _status = true;
            } else if (e.y > -80 && true === _status) {
                $.txt.setText("pull to refresh");
                _status = false;
            }
        });
        _scroll.addEventListener("dragend", function() {
            optionalOverlay && optionalOverlay.setOpacity(1);
            true === _status && _callBack();
            $.txt.setText("pull to refresh");
            _status = false;
        });
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;