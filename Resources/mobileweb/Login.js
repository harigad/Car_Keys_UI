function loggedIn() {
    return user ? true : false;
}

function _getAccessToken() {
    user.accessToken;
    return user.accessToken ? user.accessToken + "||" + Titanium.Platform.id : "";
}

function loadUser(_callBack, username, password) {
    Ti.API.debug("login.loadUser");
    var url = Alloy.Globals._search;
    var _data;
    _data = user ? {
        type: "user",
        id: "me",
        accessToken: _getAccessToken()
    } : {
        type: "user",
        id: "me",
        username: username,
        password: password
    };
    Ti.API.debug("User.load sending data : " + JSON.stringify(_data));
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            debugger;
            Ti.API.debug("User.load recieved data " + this.responseText);
            var response = JSON.parse(this.responseText);
            user = response;
            if (user) {
                Ti.App.Properties.setObject("user", user);
                _callBack();
                if (login_screen) {
                    login_screen.getView().close();
                    login_screen = null;
                }
            }
        },
        onerror: function(e) {
            Ti.API.error("User.load error " + e);
        }
    });
    client.open("POST", url);
    client.send(_data);
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

function show(callBack) {
    loadUser(callBack, "username", "password");
    return;
}

function launchSignup(_callBack) {
    Alloy.createController("signup/signup", {
        _callBack: _callBack
    });
}

function logout() {
    Ti.App.Properties.removeProperty("user");
}

var user;

var login_screen;

var _openWin;

var _closeWin;

var pleaseWait = Alloy.createController("components/pleasewait");

logout();

var user = Ti.App.Properties.getObject("user") || null;

exports.openWindow = function(win) {
    _openWin(win);
};

exports.closeWindow = function(win) {
    _closeWin(win);
};

exports.init = function(_callBack, openWin, closeWin) {
    if (openWin) {
        _openWin = openWin;
        _closeWin = closeWin;
    }
    if (loggedIn()) {
        _callBack();
        if (login_screen) {
            login_screen.getView().close();
            login_screen = null;
        }
    } else show(_callBack);
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

exports.ownsModel = function(moid) {
    return _ownsModel(moid);
};

exports.getCars = function() {
    return _getCars();
};

exports.setUser = function(_user) {
    user = _user;
};

exports.getUser = function() {
    return user;
};

exports.setCars = function(cars) {
    user.cars = cars || [];
    Ti.App.fireEvent("cars_updated", cars);
};

exports.openPleaseWait = function() {
    pleaseWait.open();
};

exports.closePleaseWait = function() {
    pleaseWait.close();
};