function loggedIn() {
    return user ? true : false;
}

function _getAccessToken() {
    return fb.getAccessToken();
}

function preLoad() {
    fb.getFriends(function() {
        Ti.API.info("friends loaded");
    }, function() {});
}

function loadUser(_callBack) {
    Ti.API.debug("login.loadUser");
    var url = Alloy.Globals._search;
    var _data;
    _data = {
        type: "user",
        id: "me",
        accessToken: _getAccessToken()
    };
    Ti.API.debug("User.load sending data : " + JSON.stringify(_data));
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.debug("User.load recieved data " + this.responseText);
            var response = JSON.parse(this.responseText);
            user = response;
            if (user) {
                Ti.App.Properties.setObject("user", user);
                preLoad();
                _callBack();
            }
        },
        onerror: function(e) {
            Ti.API.error("User.load error " + e);
        }
    });
    client.open("POST", url);
    client.send(_data);
}

function saveUserToCache() {
    Ti.App.Properties.setObject("user", user);
}

function logout() {
    Ti.App.Properties.removeProperty("user");
    fb.logout();
}

function _ownsModel(moid) {
    var cars = _getCars();
    for (var i = 0; cars.length > i; i++) if (cars[i].moid == moid) return true;
    return false;
}

function hasCars() {
    return _getCars().length > 0 ? true : false;
}

function _getCars() {
    return user.cars || [];
}

var fb = require("Friends");

var user;

var login_screen;

var _openWin;

var _closeWin;

var pleaseWait = Alloy.createController("components/pleasewait");

var user = Ti.App.Properties.getObject("user") || null;

user && preLoad();

exports.init = function(_callBack, openWin, closeWin) {
    if (openWin) {
        _openWin = openWin;
        _closeWin = closeWin;
    }
    loggedIn() ? _callBack() : fb.login(function() {
        loadUser(function() {
            _callBack();
        });
    }, function() {
        logout();
    });
};

exports.isUser = function(obj) {
    return user.uid === obj.uid ? true : false;
};

exports.isLoggedIn = function() {
    return loggedIn();
};

exports.getAccessToken = function() {
    return _getAccessToken();
};

exports.openWindow = function(win) {
    _openWin(win);
};

exports.closeWindow = function(win) {
    _closeWin(win);
};

exports.ownsModel = function(moid) {
    return _ownsModel(moid);
};

exports.ownsCar = function(car) {
    var cars = _getCars();
    for (var i = 0; cars.length > i; i++) if (cars[i].cid == car.cid) return true;
    return false;
};

exports.getCars = function() {
    return _getCars();
};

exports.setUser = function(_user) {
    user = _user;
    saveUserToCache();
};

exports.getPoints = function(type) {
    var points = user.points || {
        friends: 20,
        rides: 70,
        testdrives: 150,
        questions: 60
    };
    return points[type];
};

exports.getUser = function() {
    return user;
};

exports.setCars = function(cars) {
    user.cars = cars || [];
    saveUserToCache();
    Ti.App.fireEvent("cars_updated", cars);
};

exports.openPleaseWait = function() {
    pleaseWait.open();
};

exports.closePleaseWait = function() {
    pleaseWait.close();
};