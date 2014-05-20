function Controller() {
    function load(data) {
        showPleaseWait();
        var url = "http://flair.me/carkey/search.php";
        var _data = {
            type: "user",
            id: data.id,
            accessToken: login.getAccessToken()
        };
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.debug("User.load recieved data " + this.responseText);
                var response = JSON.parse(this.responseText);
                _data = response;
                build(response);
            },
            onerror: function(e) {
                Ti.API.error("User.load error " + e);
            }
        });
        client.open("POST", url);
        client.send(_data);
    }
    function build(data) {
        var cars = data.cars || [];
        for (var i = 0; cars.length > i; i++) {
            var car = Alloy.createController("car/car", {
                _data: cars[i]
            });
            $.cars_container_inner.add(car.getView());
        }
    }
    function goToPhoto() {
        Alloy.createController("photo/photo", {
            _data: _data.photo_big
        });
    }
    function showPleaseWait() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile/profile";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.profile = Ti.UI.createWindow({
        backgroundColor: "#eee",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "profile"
    });
    $.__views.profile && $.addTopLevelView($.__views.profile);
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll",
        top: "50"
    });
    $.__views.profile.add($.__views.scroll);
    $.__views.profile_container = Ti.UI.createView({
        backgroundColor: "#ffa633",
        top: 0,
        height: 150,
        id: "profile_container"
    });
    $.__views.scroll.add($.__views.profile_container);
    $.__views.__alloyId53 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: "-10",
        id: "__alloyId53"
    });
    $.__views.profile_container.add($.__views.__alloyId53);
    $.__views.photo = Ti.UI.createView({
        backgroundColor: "#fff",
        left: 20,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#cecece",
        id: "photo"
    });
    $.__views.__alloyId53.add($.__views.photo);
    goToPhoto ? $.__views.photo.addEventListener("click", goToPhoto) : __defers["$.__views.photo!click!goToPhoto"] = true;
    $.__views.plate_container = Ti.UI.createView({
        left: 120,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "plate_container"
    });
    $.__views.__alloyId53.add($.__views.plate_container);
    $.__views.name = Ti.UI.createLabel({
        color: "#fff",
        left: 10,
        font: {
            fontSize: 20
        },
        opacity: .8,
        id: "name"
    });
    $.__views.plate_container.add($.__views.name);
    $.__views.__alloyId54 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#fff",
        right: "30",
        top: "5",
        bottom: "5",
        id: "__alloyId54"
    });
    $.__views.plate_container.add($.__views.__alloyId54);
    $.__views.plate = Ti.UI.createLabel({
        color: "#fff",
        left: 10,
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        id: "plate"
    });
    $.__views.plate_container.add($.__views.plate);
    $.__views.cars_container = Ti.UI.createView({
        top: 120,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "cars_container"
    });
    $.__views.scroll.add($.__views.cars_container);
    $.__views.cars_container_inner = Ti.UI.createView({
        left: 10,
        right: 10,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "cars_container_inner"
    });
    $.__views.cars_container.add($.__views.cars_container_inner);
    $.__views.header = Alloy.createController("header/header", {
        id: "header",
        __parentSymbol: $.__views.profile
    });
    $.__views.header.setParent($.__views.profile);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    $.name.setText(_data.name);
    $.header.openWindow($.profile);
    $.photo.setBackgroundImage(_data.photo);
    $.plate.setText(_data.plate);
    load(_data);
    __defers["$.__views.photo!click!goToPhoto"] && $.__views.photo.addEventListener("click", goToPhoto);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;