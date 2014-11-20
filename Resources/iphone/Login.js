function loggedIn() {
    return fb.loggedIn ? user ? true : false : false;
}

function loadUser(_callBack) {
    Ti.API.debug("login.loadUser");
    var url = "http://services.ridealong.mobi/search.php";
    var _data = {
        type: "user",
        id: "me",
        accessToken: fb.getAccessToken()
    };
    debugger;
    Ti.API.debug("User.load sending data : " + JSON.stringify(_data));
    debugger;
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            debugger;
            Ti.API.debug("User.load recieved data " + this.responseText);
            var response = JSON.parse(this.responseText);
            user = response;
            _callBack();
            if (login_screen) {
                login_screen.getView().close();
                login_screen = null;
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

function onLogin(_callBack) {
    if (fb.getAccessToken()) {
        login_screen && login_screen.loading();
        loadUser(_callBack);
    } else {
        login_screen.lock();
        fb.logout();
    }
}

function show() {
    login_screen = Alloy.createController("login/login_screen", {
        _callBack: function() {
            fb.authorize();
        }
    });
    fb.addEventListener("login", function(e) {
        debugger;
        Ti.API.debug("Returned from Facebook.");
        e.success ? Ti.API.debug("Authorized with Facebook, yeeey!") : e.error ? Ti.API.debug("Error logging in with Facebook: " + e.error) : e.cancelled ? Ti.API.debug("Cancelled logging in with Facebook.") : Ti.API.debug("Something else. May actually be logged out.");
    });
}

function launchSignup(_callBack) {
    Alloy.createController("signup/signup", {
        _callBack: _callBack
    });
}

var user;

var main;

var fb = require("facebook");

fb.appid = "374335169286433";

fb.permissions = [ "email" ];

fb.forceDialogAuth = false;

fb.logout();

var login_screen;

var friendsCars;

var _openWin;

var _closeWin;

var pleaseWait = Alloy.createController("components/pleasewait");

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

exports.go = function(_type, _data) {
    var url = "";
    var _dataStr = "";
    try {
        _dataStr = JSON.stringify(_data);
    } catch (e) {
        _dataStr = "";
    }
    url = "page=" + _type + "&data=" + _dataStr;
};

exports.updateUrl = function(_type, _data) {
    var url = "";
    var _dataStr = "";
    try {
        _dataStr = JSON.stringify(_data);
    } catch (e) {
        _dataStr = "";
    }
    url = "page=" + _type + "&data=" + _dataStr;
    Ti.App.currentHash = url;
};

exports.url = function() {
    return;
};

exports.isUser = function(obj) {
    return user.uid === obj.uid ? true : false;
};

exports.isAdmin = function(pid) {
    if (loggedIn() && user) {
        var places = user.places;
        for (var i = 0; places.length > i; i++) if (pid == places[i].pid) return true;
    }
    return false;
};

exports.isLoggedIn = function() {
    return loggedIn();
};

exports.getAccessToken = function() {
    return fb.getAccessToken();
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

exports.setFeed = function(_flairs) {
    Ti.API.info("login.setFeed");
    user.setFeed(_flairs);
};

exports.setCars = function(cars) {
    user.cars = cars || [];
    Ti.App.fireEvent("cars_updated", cars);
};

exports.getPlate = function() {
    return user.plate;
};

exports.setPlate = function(plate) {
    user.plate = plate;
};

exports.getPlate = function() {
    return user.plate;
};

exports.getFriends = function(callBack, errBack) {
    fb.requestWithGraphPath("me/friends", {}, "GET", function(e) {
        debugger;
        if (e.success) {
            var friends = JSON.parse(e.result);
            callBack(friends.data);
        } else e.error ? errBack(e.error) : errBack("Unknown response");
    });
};

exports.getRequests = function() {
    return user.requests || [];
};

exports.setRequests = function(requests) {
    user.requests = requests;
};

exports.getNotices = function() {
    return user.notices || [];
};

exports.setNotices = function(notices) {
    user.notices = notices;
};

exports.setFriendsCars = function(cars) {
    friendsCars = cars || [];
    Ti.App.fireEvent("friends_cars_updated", friendsCars);
};

exports.getFriendsCars = function() {
    return friendsCars || [];
};

exports.getFriendsWithModel = function(moid) {
    var counts = [];
    for (var i = 0; friendsCars.length > i; i++) moid == friendsCars[i].moid && counts.push(friendsCars[i]);
    return counts;
};

exports.canSeeModel = function(moid) {
    return true;
};

exports.openPleaseWait = function() {
    pleaseWait.open();
};

exports.closePleaseWait = function() {
    pleaseWait.close();
};