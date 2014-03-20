function Controller() {
    function onChange() {
        loadPlacesTimeout && clearTimeout(loadPlacesTimeout);
        pleaseWaitTimeout && clearTimeout(pleaseWaitTimeout);
        pleaseWaitTimeout = setTimeout(function() {
            showPleaseWait();
            pleaseWaitTimeout = null;
        }, 1e3);
    }
    function showPleaseWait() {
        var rs = [];
        rs.push({
            _type: "searching..",
            color: "#999",
            leftImage: "",
            _word: "searching..",
            title: "  searching.."
        });
        for (var i = 0; 15 > i; i++) rs.push({});
        _updateTable(rs);
        loadPlacesTimeout = setTimeout(function() {
            loadPlaces();
            loadPlacesTimeout = null;
        }, 1e3);
    }
    function loadPlaces() {
        var txt = $._textField.getValue();
        var url = "http://flair.me/search.php";
        var _data = {
            type: "search",
            search: txt,
            accessToken: login.getAccessToken()
        };
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var _response = JSON.parse(this.responseText);
                var _tableData = [];
                for (var i = 0; _response.length > i; i++) {
                    var row = Alloy.createController("search/search_row", {
                        _data: _response[i],
                        _closeFn: onCancel
                    });
                    _tableData.push(row.getView());
                }
                $.table.setData(_tableData);
            },
            onerror: function(e) {
                Ti.API.error("User.load error " + e);
            }
        });
        client.open("POST", url);
        client.send(_data);
    }
    function _updateTable(_arr) {
        $.table.setData(_arr);
    }
    function onCancel() {
        $.search.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "search/search";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.search = Ti.UI.createWindow({
        id: "search"
    });
    $.__views.search && $.addTopLevelView($.__views.search);
    $.__views.bgImage = Ti.UI.createImageView({
        image: "mobileweb/bg.png",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: 0,
        top: 0,
        id: "bgImage"
    });
    $.__views.search.add($.__views.bgImage);
    $.__views.container = Ti.UI.createView({
        top: 20,
        width: Ti.UI.FILL,
        id: "container"
    });
    $.__views.search.add($.__views.container);
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
    $.__views._textFieldOuterRing = Ti.UI.createView({
        layout: "horizontal",
        left: 0,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "_textFieldOuterRing"
    });
    $.__views._textField_container.add($.__views._textFieldOuterRing);
    $.__views._searchIcon = Ti.UI.createView({
        width: 30,
        height: 30,
        top: 10,
        left: 10,
        backgroundImage: "search_icon.png",
        id: "_searchIcon"
    });
    $.__views._textFieldOuterRing.add($.__views._searchIcon);
    $.__views._textField = Ti.UI.createTextField({
        height: "50",
        left: 10,
        width: 455,
        borderRadius: 4,
        backgroundColor: "#eee",
        borderStyle: "INPUT_BORDERSTYLE_NONE",
        font: {
            fontSize: "18"
        },
        id: "_textField"
    });
    $.__views._textFieldOuterRing.add($.__views._textField);
    onChange ? $.__views._textField.addEventListener("change", onChange) : __defers["$.__views._textField!change!onChange"] = true;
    $.__views._join_btn = Ti.UI.createView({
        backgroundColor: "#333",
        right: 0,
        width: 200,
        height: 50,
        id: "_join_btn"
    });
    $.__views._textField_container.add($.__views._join_btn);
    onCancel ? $.__views._join_btn.addEventListener("click", onCancel) : __defers["$.__views._join_btn!click!onCancel"] = true;
    $.__views._join_btn_label = Ti.UI.createLabel({
        color: "#fff",
        text: "cancel",
        id: "_join_btn_label"
    });
    $.__views._join_btn.add($.__views._join_btn_label);
    $.__views.mainContainer = Ti.UI.createView({
        top: 65,
        width: 620,
        bottom: 10,
        id: "mainContainer"
    });
    $.__views.container.add($.__views.mainContainer);
    $.__views.main = Ti.UI.createView({
        top: 0,
        left: 0,
        width: 420,
        layout: "vertical",
        backgroundColor: "#eee",
        borderRadius: 4,
        id: "main"
    });
    $.__views.mainContainer.add($.__views.main);
    $.__views.__alloyId13 = Ti.UI.createScrollView({
        top: 0,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "__alloyId13"
    });
    $.__views.main.add($.__views.__alloyId13);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.__alloyId13.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var pleaseWaitTimeout;
    var loadPlacesTimeout;
    exports.init = function() {
        $.search.open();
        $._textField.focus();
    };
    __defers["$.__views._textField!change!onChange"] && $.__views._textField.addEventListener("change", onChange);
    __defers["$.__views._join_btn!click!onCancel"] && $.__views._join_btn.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;