function Controller() {
    function onVerify() {
        step_4({});
    }
    function step_1() {
        var _answer = parseInt(_data.year);
        var _question = "What year model is your " + _data.make + "?";
        var _answer1, _answer2, _answer3, _answer4, _answer5;
        _answer1 = _answer;
        _answer2 = _answer;
        _answer3 = _answer;
        _answer4 = _answer;
        _answer5 = _answer;
        while (_answer1 == _answer) _answer1 = Math.round(5 * Math.random() + (_answer - 2));
        while (_answer2 == _answer || _answer2 == _answer1) _answer2 = Math.round(5 * Math.random() + (_answer - 2));
        while (_answer3 == _answer || _answer3 == _answer2 || _answer3 == _answer1) _answer3 = Math.round(5 * Math.random() + (_answer - 2));
        while (_answer4 == _answer || _answer4 == _answer3 || _answer4 == _answer2 || _answer4 == _answer1) _answer4 = Math.round(5 * Math.random() + (_answer - 2));
        while (_answer5 == _answer || _answer5 == _answer4 || _answer5 == _answer3 || _answer5 == _answer2 || _answer5 == _answer1) _answer5 = Math.round(5 * Math.random() + (_answer - 2));
        eval("_answer" + (Math.round(4 * Math.random()) + 1) + "=_answer");
        var signup = Alloy.createController("signup/signup_multiple_choice", {
            _data: {
                step: 1,
                logo: _data.logo,
                question: _question,
                answer1: _answer1,
                answer2: _answer2,
                answer3: _answer3,
                answer4: _answer4,
                answer5: _answer5
            },
            _callBack: function(answer) {
                step_2({
                    year: answer
                });
            }
        });
    }
    function step_2(answerObj) {
        var colors = [ "red", "white", "marroon", "blue", "black", "green", "yellow", "brown", "silver", "pink", "purple" ];
        var _answer = _data.color || "red";
        var _question = "What color is your " + _data.make + "?";
        var _answer1, _answer2, _answer3, _answer4, _answer5;
        _answer1 = _answer2 = _answer3 = _answer4 = _answer5 = _answer;
        while (_answer1 == _answer) _answer1 = colors[Math.round(10 * Math.random())];
        while (_answer2 == _answer || _answer2 == _answer1) _answer2 = colors[Math.round(10 * Math.random())];
        while (_answer3 == _answer || _answer3 == _answer2 || _answer3 == _answer1) _answer3 = colors[Math.round(10 * Math.random())];
        while (_answer4 == _answer || _answer4 == _answer3 || _answer4 == _answer2 || _answer4 == _answer1) _answer4 = colors[Math.round(10 * Math.random())];
        while (_answer5 == _answer || _answer5 == _answer4 || _answer5 == _answer3 || _answer5 == _answer2 || _answer5 == _answer1) _answer5 = colors[Math.round(10 * Math.random())];
        eval("_answer" + (Math.round(4 * Math.random()) + 1) + "=_answer");
        var signup = Alloy.createController("signup/signup_multiple_choice", {
            _data: {
                step: 2,
                logo: _data.logo,
                question: _question,
                answer1: _answer1,
                answer2: _answer2,
                answer3: _answer3,
                answer4: _answer4,
                answer5: _answer5
            },
            _callBack: function(answer) {
                answerObj.color = answer;
                step_4(answerObj);
            }
        });
    }
    function step_3(answerObj) {
        var _answer = _data.titleYear || 2014;
        _answer = parseInt(_answer);
        var _question = "When did you BUY your " + _data.make + "?";
        var _answer1, _answer2, _answer3, _answer4, _answer5;
        _answer1 = _answer;
        _answer2 = _answer;
        _answer3 = _answer;
        _answer4 = _answer;
        _answer5 = _answer;
        while (_answer1 == _answer) _answer1 = Math.round(5 * Math.random() + (_answer - 2));
        while (_answer2 == _answer || _answer2 == _answer1) _answer2 = Math.round(5 * Math.random() + (_answer - 2));
        while (_answer3 == _answer || _answer3 == _answer2 || _answer3 == _answer1) _answer3 = Math.round(5 * Math.random() + (_answer - 2));
        while (_answer4 == _answer || _answer4 == _answer3 || _answer4 == _answer2 || _answer4 == _answer1) _answer4 = Math.round(5 * Math.random() + (_answer - 2));
        while (_answer5 == _answer || _answer5 == _answer4 || _answer5 == _answer3 || _answer5 == _answer2 || _answer5 == _answer1) _answer5 = Math.round(5 * Math.random() + (_answer - 2));
        eval("_answer" + (Math.round(4 * Math.random()) + 1) + "=_answer");
        var signup = Alloy.createController("signup/signup_multiple_choice", {
            _data: {
                step: 3,
                logo: _data.logo,
                question: _question,
                answer1: _answer1,
                answer2: _answer2,
                answer3: _answer3,
                answer4: _answer4,
                answer5: _answer5
            },
            _callBack: function(answer) {
                answerObj.titleYear = answer;
                step_4(answerObj);
            }
        });
    }
    function step_4(answerObj) {
        Alloy.createController("signup/signup_verify_address", {
            _data: _data,
            _callBack: function(answer) {
                if (answer) {
                    answerObj.address = answer;
                    send_to_server(answerObj);
                } else onCancel();
            }
        });
    }
    function send_to_server(answerObj) {
        Alloy.createController("signup/send_to_server", {
            _data: _data,
            _answerObj: answerObj,
            _callBack: function() {
                $.found_car.close();
                _callBack();
            }
        });
    }
    function onCancel() {
        _callBack();
        $.found_car.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup/found_car";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.found_car = Ti.UI.createWindow({
        backgroundColor: "#333",
        navBarHidden: true,
        width: 320,
        height: 500,
        id: "found_car"
    });
    $.__views.found_car && $.addTopLevelView($.__views.found_car);
    $.__views.bgImage = Ti.UI.createImageView({
        id: "bgImage"
    });
    $.__views.found_car.add($.__views.bgImage);
    $.__views.main = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "main"
    });
    $.__views.found_car.add($.__views.main);
    $.__views.logo_container = Ti.UI.createView({
        top: 10,
        width: 50,
        height: 50,
        backgroundColor: "#333",
        borderRadius: 25,
        borderColor: "#ccc",
        borderWidth: 3,
        id: "logo_container"
    });
    $.__views.main.add($.__views.logo_container);
    $.__views.logo = Ti.UI.createView({
        width: 30,
        height: 30,
        id: "logo"
    });
    $.__views.logo_container.add($.__views.logo);
    $.__views.model = Ti.UI.createLabel({
        top: 5,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 36
        },
        color: "#2179ca",
        text: "Murano",
        id: "model"
    });
    $.__views.main.add($.__views.model);
    $.__views.btn_container = Ti.UI.createView({
        top: 20,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#2179ca",
        borderRadius: 4,
        borderWidth: .5,
        borderColor: "#fff",
        id: "btn_container"
    });
    $.__views.main.add($.__views.btn_container);
    onVerify ? $.__views.btn_container.addEventListener("click", onVerify) : __defers["$.__views.btn_container!click!onVerify"] = true;
    $.__views.__alloyId80 = Ti.UI.createLabel({
        left: 20,
        right: 20,
        top: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        color: "#eee",
        text: "Verify My Ownership",
        id: "__alloyId80"
    });
    $.__views.btn_container.add($.__views.__alloyId80);
    $.__views.cancel_container = Ti.UI.createView({
        top: 20,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#aaa",
        borderRadius: 4,
        borderWidth: .5,
        borderColor: "#fff",
        id: "cancel_container"
    });
    $.__views.main.add($.__views.cancel_container);
    onCancel ? $.__views.cancel_container.addEventListener("click", onCancel) : __defers["$.__views.cancel_container!click!onCancel"] = true;
    $.__views.cancel_btn = Ti.UI.createLabel({
        left: 20,
        right: 20,
        top: 10,
        bottom: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        font: {
            fontSize: 11
        },
        color: "#eee",
        text: "This is not my car!",
        id: "cancel_btn"
    });
    $.__views.cancel_container.add($.__views.cancel_btn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login = require("Login");
    var args = arguments[0] || {};
    var _data = args._data || {};
    var _callBack = args._callBack;
    $.found_car.open();
    $.logo.setBackgroundImage("logos/48/" + _data.logo);
    $.model.setText(_data.model);
    __defers["$.__views.btn_container!click!onVerify"] && $.__views.btn_container.addEventListener("click", onVerify);
    __defers["$.__views.cancel_container!click!onCancel"] && $.__views.cancel_container.addEventListener("click", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;