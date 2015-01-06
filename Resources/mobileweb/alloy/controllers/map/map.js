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
    this.__controllerPath = "map/map";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.map = Ti.UI.createWindow({
        navBarHidden: "true",
        id: "map"
    });
    $.__views.map && $.addTopLevelView($.__views.map);
    $.__views.main = Ti.UI.createView({
        id: "main",
        layout: "vertical",
        height: Ti.UI.FILL,
        top: "50"
    });
    $.__views.map.add($.__views.main);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.map
    });
    $.__views.header.setParent($.__views.map);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Map = require("ti.map");
    $.header.openWindow($.map);
    var mountainView = Map.createAnnotation({
        latitude: 37.390749,
        longitude: -122.081651,
        title: "Appcelerator Headquarters",
        subtitle: "Mountain View, CA",
        pincolor: Map.ANNOTATION_RED,
        myid: 1
    });
    var mapview = Map.createView({
        mapType: Map.NORMAL_TYPE,
        region: {
            latitude: 33.74511,
            longitude: -84.38993,
            latitudeDelta: .01,
            longitudeDelta: .01
        },
        animate: true,
        regionFit: true,
        userLocation: true,
        annotations: [ mountainView ]
    });
    $.main.add(mapview);
    mapview.addEventListener("click", function(evt) {
        Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
    });
    $.map.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;