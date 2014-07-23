function Controller() {
    function goToUser() {
        Alloy.createController("profile/profile", {
            _data: {
                uid: _data.uid,
                photo: _data.photo,
                photo_big: _data.photo_big,
                name: _data.name,
                plate: _data.plate
            }
        });
    }
    function goToPoll() {
        Alloy.createController("poll/poll_profile/poll_profile", {
            _data: _data
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feed/feed_poll_answer";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.topView = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        top: 0,
        bottom: 0,
        id: "topView"
    });
    $.__views.main.add($.__views.topView);
    goToUser ? $.__views.topView.addEventListener("click", goToUser) : __defers["$.__views.topView!click!goToUser"] = true;
    $.__views.photo = Ti.UI.createView({
        top: 10,
        bottom: 10,
        left: 10,
        width: 35,
        height: 35,
        borderRadius: 17.5,
        borderColor: "#cecece",
        borderWidth: 2,
        id: "photo"
    });
    $.__views.topView.add($.__views.photo);
    $.__views.topRight = Ti.UI.createView({
        left: 10,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "topRight"
    });
    $.__views.topView.add($.__views.topRight);
    $.__views.__alloyId49 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId49"
    });
    $.__views.topRight.add($.__views.__alloyId49);
    $.__views.name = Ti.UI.createLabel({
        left: "0",
        height: Ti.UI.SIZE,
        color: "#ffa633",
        font: {
            fontSize: 18
        },
        id: "name"
    });
    $.__views.__alloyId49.add($.__views.name);
    $.__views.date = Ti.UI.createLabel({
        right: 10,
        height: Ti.UI.SIZE,
        color: "#ccc",
        font: {
            fontSize: 10
        },
        id: "date"
    });
    $.__views.__alloyId49.add($.__views.date);
    $.__views.title = Ti.UI.createLabel({
        left: 0,
        height: Ti.UI.SIZE,
        color: "#aaa",
        font: {
            fontSize: 12
        },
        id: "title"
    });
    $.__views.topRight.add($.__views.title);
    $.__views.bottomView = Ti.UI.createView({
        left: 55,
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: -5,
        id: "bottomView",
        bottom: "10"
    });
    $.__views.main.add($.__views.bottomView);
    goToPoll ? $.__views.bottomView.addEventListener("click", goToPoll) : __defers["$.__views.bottomView!click!goToPoll"] = true;
    $.__views.question = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        left: 0,
        color: "#333",
        id: "question",
        width: "200",
        right: "10"
    });
    $.__views.bottomView.add($.__views.question);
    $.__views.answer = Ti.UI.createLabel({
        left: 0,
        font: {
            fontSize: 12
        },
        id: "answer",
        width: "200",
        height: Ti.UI.SIZE,
        right: "10"
    });
    $.__views.bottomView.add($.__views.answer);
    $.__views.__alloyId50 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#cecece",
        id: "__alloyId50"
    });
    $.__views.main.add($.__views.__alloyId50);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var poll_data = JSON.parse(_data.data);
    var gender;
    gender = "1" === _data.gender ? "her" : "his";
    new Date(_data.created);
    $.photo.setBackgroundImage(_data.photo);
    $.name.setText(_data.name);
    $.title.setText("answered a survey about " + gender + " " + poll_data.model);
    $.question.setText(poll_data.question);
    $.answer.setText('Answered: "' + poll_data.answer + '"');
    __defers["$.__views.topView!click!goToUser"] && $.__views.topView.addEventListener("click", goToUser);
    __defers["$.__views.bottomView!click!goToPoll"] && $.__views.bottomView.addEventListener("click", goToPoll);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;