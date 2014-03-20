function Controller() {
    function onFocus() {}
    function onClick() {
        Ti.App.fireEvent("openSearch");
    }
    function doClick() {}
    function setRegion() {}
    function goHome() {
        Ti.App.fireEvent("goHome");
    }
    function buildFlairs(data) {
        _data = data;
        $.place_data_container.remove($.loading_label);
        var cast_view = Alloy.createController("cast/main", {
            _data: data
        });
        $.place_data_container.add(cast_view.getView());
    }
    function load() {
        var url = "http://flair.me/search.php";
        var _dataStr = {};
        _dataStr.type = "search";
        _dataStr.searchMode = "place";
        _dataStr.pid = _data.pid;
        _dataStr.accessToken = login.getAccessToken();
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var _response = JSON.parse(this.responseText);
                buildFlairs(_response);
            },
            onerror: function() {
                Ti.API.error("error loading data for Place -> " + _data.pid);
            },
            timeout: 5e3
        });
        client.open("POST", url);
        client.send(_dataStr);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "place/place";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.place = Ti.UI.createWindow({
        id: "place"
    });
    $.__views.place && $.addTopLevelView($.__views.place);
    onFocus ? $.__views.place.addEventListener("focus", onFocus) : __defers["$.__views.place!focus!onFocus"] = true;
    $.__views.bgImage = Ti.UI.createImageView({
        image: "mobileweb/bg.png",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: 0,
        top: 0,
        id: "bgImage"
    });
    $.__views.place.add($.__views.bgImage);
    $.__views.__alloyId8 = Ti.UI.createScrollView({
        top: 0,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "__alloyId8"
    });
    $.__views.place.add($.__views.__alloyId8);
    $.__views.container = Ti.UI.createView({
        top: 20,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "container"
    });
    $.__views.__alloyId8.add($.__views.container);
    $.__views.header = Ti.UI.createView({
        top: 0,
        width: 620,
        height: 75,
        id: "header"
    });
    $.__views.container.add($.__views.header);
    $.__views._textField_container = Ti.UI.createView({
        left: 0,
        right: 0,
        top: 0,
        height: Ti.UI.SIZE,
        borderRadius: 4,
        backgroundColor: "#eee",
        id: "_textField_container"
    });
    $.__views.header.add($.__views._textField_container);
    $.__views._textField = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 0,
        width: 600,
        layout: "horizontal",
        id: "_textField"
    });
    $.__views._textField_container.add($.__views._textField);
    onClick ? $.__views._textField.addEventListener("click", onClick) : __defers["$.__views._textField!click!onClick"] = true;
    $.__views._searchIcon = Ti.UI.createView({
        width: 30,
        height: 30,
        top: 10,
        left: 10,
        backgroundImage: "mobileweb/place_icon.png",
        id: "_searchIcon"
    });
    $.__views._textField.add($.__views._searchIcon);
    $.__views._textField_label_container = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        id: "_textField_label_container"
    });
    $.__views._textField.add($.__views._textField_label_container);
    $.__views._textField_label = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        top: 7,
        left: 10,
        color: "#111",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "_textField_label"
    });
    $.__views._textField_label_container.add($.__views._textField_label);
    $.__views._address_label = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        left: 10,
        color: "#999",
        id: "_address_label"
    });
    $.__views._textField_label_container.add($.__views._address_label);
    $.__views._join_btn = Ti.UI.createView({
        backgroundColor: "#2179ca",
        right: 0,
        width: 200,
        height: 50,
        id: "_join_btn"
    });
    $.__views._textField_container.add($.__views._join_btn);
    goHome ? $.__views._join_btn.addEventListener("click", goHome) : __defers["$.__views._join_btn!click!goHome"] = true;
    $.__views._join_btn_label = Ti.UI.createLabel({
        color: "#fff",
        height: Ti.UI.SIZE,
        text: "home",
        id: "_join_btn_label"
    });
    $.__views._join_btn.add($.__views._join_btn_label);
    $.__views.main = Ti.UI.createView({
        top: 65,
        width: 620,
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "main"
    });
    $.__views.container.add($.__views.main);
    $.__views.mapViewContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "mapViewContainer"
    });
    $.__views.main.add($.__views.mapViewContainer);
    $.__views.profileInfo = Ti.UI.createView({
        left: 0,
        top: 0,
        width: 415,
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "profileInfo"
    });
    $.__views.mapViewContainer.add($.__views.profileInfo);
    $.__views.place_data_container = Ti.UI.createView({
        top: 0,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "place_data_container"
    });
    $.__views.profileInfo.add($.__views.place_data_container);
    $.__views.loading_label = Ti.UI.createLabel({
        top: 75,
        font: {
            fontSize: 40
        },
        color: "#eee",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: "loading..please wait",
        id: "loading_label"
    });
    $.__views.place_data_container.add($.__views.loading_label);
    $.__views.leftView = Ti.UI.createView({
        left: 10,
        top: 0,
        layout: "vertical",
        width: 190,
        height: Ti.UI.SIZE,
        id: "leftView"
    });
    $.__views.mapViewContainer.add($.__views.leftView);
    var __alloyId9 = [];
    $.__views.mapView = Ti.Map.createView({
        top: 0,
        left: 0,
        width: Ti.UI.FILL,
        borderRadius: 4,
        height: 200,
        annotations: __alloyId9,
        id: "mapView",
        ns: Ti.Map,
        animate: "true",
        regionFit: "true",
        userLocation: "false",
        mapType: Ti.Map.STANDARD_TYPE
    });
    $.__views.leftView.add($.__views.mapView);
    doClick ? $.__views.mapView.addEventListener("click", doClick) : __defers["$.__views.mapView!click!doClick"] = true;
    setRegion ? $.__views.mapView.addEventListener("complete", setRegion) : __defers["$.__views.mapView!complete!setRegion"] = true;
    $.__views._address_view = Ti.UI.createView({
        top: 10,
        bottom: 10,
        left: 0,
        borderRadius: 4,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#fff",
        id: "_address_view"
    });
    $.__views.leftView.add($.__views._address_view);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data;
    exports.init = function() {
        login.updateUrl("place", _data);
        $._textField_label.setText(_data.placename);
        $._address_label.setText(_data.vicinity);
        $.place.open();
        load();
        Ti.App.addEventListener("goHome", function() {
            $.place.close();
        });
    };
    __defers["$.__views.place!focus!onFocus"] && $.__views.place.addEventListener("focus", onFocus);
    __defers["$.__views._textField!click!onClick"] && $.__views._textField.addEventListener("click", onClick);
    __defers["$.__views._join_btn!click!goHome"] && $.__views._join_btn.addEventListener("click", goHome);
    __defers["$.__views.mapView!click!doClick"] && $.__views.mapView.addEventListener("click", doClick);
    __defers["$.__views.mapView!complete!setRegion"] && $.__views.mapView.addEventListener("complete", setRegion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;