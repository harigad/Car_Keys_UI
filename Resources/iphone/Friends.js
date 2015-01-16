function _logout() {
    fb.logout();
}

function _login(callback, errback) {
    debugger;
    _callBack = callback;
    _errBack = errback;
    Alloy.createController("login/login_screen", {
        _callBack: function() {
            fb.authorize();
        }
    });
}

function _getAccessToken() {
    Ti.API.error(fb.getAccessToken());
    return fb.getAccessToken() ? fb.getAccessToken() : null;
}

function _getFriends(callBack, errBack) {
    if (!callBack) return friendsCars;
    friendsCars.length > 0 && callBack(friendsCars);
    var url = Alloy.Globals._search;
    var _data = {
        type: "friends",
        accessToken: _getAccessToken()
    };
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.debug("friends loaded " + this.responseText);
            var response = JSON.parse(this.responseText);
            response.length > 0 && (friendsCars = response);
            callBack(friendsCars);
            Ti.App.fireEvent("friends_cars_updated", {
                data: friendsCars
            });
        },
        onerror: function() {
            errBack();
        }
    });
    client.open("POST", url);
    client.send(_data);
}

var fb = require("facebook");

fb.appid = "374335169286433";

fb.permissions = [ "email" ];

fb.forceDialogAuth = true;

var friendsCars = [];

var _callBack;

var _errBack;

fb.addEventListener("login", function(e) {
    if (e.success) {
        if (_callBack) {
            _callBack();
            _callBack = null;
            $.login_screen.close();
        }
    } else if (e.error) {
        if (_errBack) {
            _errBack();
            _errBack = null;
        }
    } else e.cancelled;
});

exports.logout = function() {
    _logout();
};

exports.login = function(callback, errback) {
    _login(callback, errback);
};

exports.getAccessToken = function() {
    return _getAccessToken();
};

exports.filter = function(prop, val, callBack, errBack, inviteText) {
    _getFriends(function(friends) {
        debugger;
        var rows = [];
        for (var i = 0; friends.length > i; i++) {
            var friend = friends[i];
            var propVal = friend[prop];
            if (propVal == val) {
                var feed_item_left = Alloy.createController("friends/friend", {
                    _data: friends[i]
                });
                rows.push(feed_item_left.getView());
            }
        }
        if (0 === rows.length) {
            var feed_item_left = Alloy.createController("components/nofriends_invite", {
                _txt: inviteText
            });
            rows.push(feed_item_left.getView());
        }
        callBack(rows);
    }, function() {
        errBack();
    });
};

exports.getFriends = function(callBack, errBack, refresh) {
    return _getFriends(callBack, errBack, refresh);
};

exports.invite = function() {
    fb.dialog("apprequests", {
        message: "Checkout my Infiniti G35 and Honda Civic"
    }, function(response) {
        var k = response;
        Ti.API.info(k);
        debugger;
    });
};