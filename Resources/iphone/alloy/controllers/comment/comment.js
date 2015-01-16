function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onCancel() {
        $.comment.close();
        if (_errBack) {
            _errBack();
            _errBack = null;
        }
    }
    function onSave() {
        $.comment.close();
        var usr = login.getUser();
        var data = {};
        data.uid = usr.uid;
        data.name = usr.name;
        data.photo = usr.photo;
        data.photo_big = usr.photo_big;
        data.plate = usr.plate;
        data.data = $.text.getValue();
        var comment_item = Alloy.createController("comment/comment_item", {
            _data: data,
            _pollid: _pollid
        });
        if (_callBack) {
            _callBack(comment_item);
            _callBack = null;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "comment/comment";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.comment = Ti.UI.createWindow({
        backgroundColor: "#fff",
        width: "320",
        height: "500",
        id: "comment"
    });
    $.__views.comment && $.addTopLevelView($.__views.comment);
    $.__views.__alloyId33 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#f49033",
        top: "0",
        id: "__alloyId33"
    });
    $.__views.comment.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ffa633",
        borderRadius: 4,
        left: "10",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    onCancel ? $.__views.__alloyId34.addEventListener("click", onCancel) : __defers["$.__views.__alloyId34!click!onCancel"] = true;
    $.__views.__alloyId35 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "cancel",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.question = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#fff",
        opacity: .5,
        text: "add comment",
        id: "question"
    });
    $.__views.__alloyId33.add($.__views.question);
    $.__views.__alloyId36 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#ffa633",
        borderRadius: 4,
        right: "10",
        id: "__alloyId36"
    });
    $.__views.__alloyId33.add($.__views.__alloyId36);
    onSave ? $.__views.__alloyId36.addEventListener("click", onSave) : __defers["$.__views.__alloyId36!click!onSave"] = true;
    $.__views.__alloyId37 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "save",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.main = Ti.UI.createView({
        id: "main",
        top: "60"
    });
    $.__views.comment.add($.__views.main);
    $.__views.text = Ti.UI.createTextArea({
        id: "text",
        height: "150",
        top: "0",
        left: "10",
        right: "10"
    });
    $.__views.main.add($.__views.text);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _pollid = args._pollid;
    var _callBack = args._callBack;
    var _errBack = args._errBack;
    $.comment.open();
    $.text.focus();
    __defers["$.__views.__alloyId34!click!onCancel"] && $.__views.__alloyId34.addEventListener("click", onCancel);
    __defers["$.__views.__alloyId36!click!onSave"] && $.__views.__alloyId36.addEventListener("click", onSave);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;