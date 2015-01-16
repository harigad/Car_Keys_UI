function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onChange(e) {
        if (0 === e.value.length) eval("$." + e.source.id + "_label").setText(e.source.hint); else {
            eval("$." + e.source.id + "_label").setText("");
            if (e.value.indexOf(" ") > 2) {
                _pleaseWaitTimeout && clearTimeout(_pleaseWaitTimeout);
                _pleaseWaitTimeout = setTimeout(function() {
                    pleaseWait(e.value);
                }, 500);
            }
        }
    }
    function pleaseWait(query) {
        _fetchTimeout && clearTimeout(_fetchTimeout);
        _dontShowPleaseWait || $.results.setData([ makeRow({
            name: "searching..."
        }) ]);
        _fetchTimeout = setTimeout(function() {
            fetch(query);
        }, 2500);
    }
    function fetch(query) {
        var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?";
        url += "&key=AIzaSyAqYsZa6MJ97_Q-8NlafqfvIAki3W8pRQU";
        url += "&sensor=false&types=car_dealer|car_repair";
        url = url + "&query=" + query;
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var response = JSON.parse(this.responseText);
                Ti.API.info(this.responseText);
                Ti.API.info(response);
                var rows = [];
                for (var i = 0; response.results.length > i; i++) rows.push(makeRow(response.results[i]));
                $.results.setData(rows);
                rows.length > 4 && (_dontShowPleaseWait = true);
            },
            onerror: function(e) {
                Ti.API.error("User.load error " + e);
            }
        });
        client.open("GET", url);
        client.send({});
    }
    function makeRow(data) {
        var h = Ti.UI.createView({
            height: Ti.UI.SIZE,
            top: 5,
            bottom: 5,
            left: 5,
            layout: "horizontal"
        });
        var icon = Ti.UI.createImageView({
            image: "common/map_icon_25_25.png",
            width: 25,
            height: 25,
            borderRadius: 2,
            top: 0,
            backgroundColor: "#eee"
        });
        h.add(icon);
        var v = Ti.UI.createView({
            height: Ti.UI.SIZE,
            top: 0,
            bottom: 0,
            left: 5,
            layout: "vertical"
        });
        var l = Ti.UI.createLabel({
            color: "#333",
            left: 0,
            font: {
                fontSize: 14
            },
            text: data.name,
            height: Ti.UI.SIZE
        });
        v.add(l);
        if (data.formatted_address) {
            var s = Ti.UI.createLabel({
                color: "#777",
                left: 0,
                font: {
                    fontSize: 12
                },
                text: data.formatted_address,
                height: Ti.UI.SIZE
            });
            v.add(s);
        }
        h.add(v);
        var r = Ti.UI.createTableViewRow({
            height: Ti.UI.SIZE
        });
        r.add(h);
        r.addEventListener("click", function() {
            onNext();
        });
        return r;
    }
    function onCancel() {
        $.form_place.close();
    }
    function onNext() {
        var miles = $.plate.getValue();
        args._callBack(miles);
    }
    function help() {}
    function onFocus(e) {
        eval("$." + e.source.id + "_label").setOpacity(.6);
        0 === e.value.length ? eval("$." + e.source.id + "_label").setText(e.source.hint) : eval("$." + e.source.id + "_label").setText("");
    }
    function onBlur(e) {
        eval("$." + e.source.id + "_label").setOpacity(0);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "form/form_place";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        var __itemTemplate = __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.form_place = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "form_place"
    });
    $.__views.form_place && $.addTopLevelView($.__views.form_place);
    $.__views.bgImage = Ti.UI.createImageView({
        id: "bgImage"
    });
    $.__views.form_place.add($.__views.bgImage);
    $.__views.__alloyId70 = Ti.UI.createView({
        top: "0",
        height: "60",
        backgroundColor: "#f1f1f1",
        id: "__alloyId70"
    });
    $.__views.form_place.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createView({
        top: "10",
        height: "50",
        id: "__alloyId71"
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createView({
        top: 10,
        height: 30,
        width: 50,
        backgroundColor: "#40a3ff",
        borderRadius: 4,
        left: "10",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    onCancel ? $.__views.__alloyId72.addEventListener("click", onCancel) : __defers["$.__views.__alloyId72!click!onCancel"] = true;
    $.__views.__alloyId73 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#fff",
        text: "back",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.question = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 18
        },
        color: "#ccc",
        shadowColor: "#fff",
        shadowOffset: {
            x: 1,
            y: 1
        },
        shadowRadius: 3,
        text: "auto shop",
        id: "question"
    });
    $.__views.__alloyId71.add($.__views.question);
    $.__views.main = Ti.UI.createView({
        top: 60,
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "main"
    });
    $.__views.form_place.add($.__views.main);
    $.__views.__alloyId74 = Ti.UI.createView({
        left: 0,
        backgroundColor: "#f1f1f1",
        right: 0,
        height: Ti.UI.SIZE,
        id: "__alloyId74"
    });
    $.__views.main.add($.__views.__alloyId74);
    $.__views.plate = Ti.UI.createTextField({
        left: 20,
        right: 20,
        top: 0,
        color: "#000",
        backgroundColor: "#f1f1f1",
        font: {
            fontSize: 36
        },
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        id: "plate",
        hint: "where did you get this done?"
    });
    $.__views.__alloyId74.add($.__views.plate);
    onFocus ? $.__views.plate.addEventListener("focus", onFocus) : __defers["$.__views.plate!focus!onFocus"] = true;
    onChange ? $.__views.plate.addEventListener("change", onChange) : __defers["$.__views.plate!change!onChange"] = true;
    onBlur ? $.__views.plate.addEventListener("blur", onBlur) : __defers["$.__views.plate!blur!onBlur"] = true;
    $.__views.plate_label = Ti.UI.createLabel({
        left: 23,
        right: 0,
        top: 0,
        color: "#aaa",
        font: {
            fontSize: 16
        },
        height: 36,
        id: "plate_label"
    });
    $.__views.__alloyId74.add($.__views.plate_label);
    $.__views.results = Ti.UI.createTableView({
        id: "results",
        height: "300",
        backgroundColor: "#fff"
    });
    $.__views.main.add($.__views.results);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.question.setText(args._ask.name);
    $.form_place.open();
    $.plate.focus();
    $.results.setData([ makeRow({
        name: "example: firestone dallas"
    }) ]);
    var _pleaseWaitTimeout = null;
    var _fetchTimeout = null;
    var _dontShowPleaseWait = false;
    exports.close = function() {
        $.form_place.close();
    };
    __defers["$.__views.__alloyId72!click!onCancel"] && $.__views.__alloyId72.addEventListener("click", onCancel);
    __defers["$.__views.plate!focus!onFocus"] && $.__views.plate.addEventListener("focus", onFocus);
    __defers["$.__views.plate!change!onChange"] && $.__views.plate.addEventListener("change", onChange);
    __defers["$.__views.plate!blur!onBlur"] && $.__views.plate.addEventListener("blur", onBlur);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;