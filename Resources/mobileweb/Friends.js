function _getAccessToken() {
    return "CAAFUdLLK0SEBAFNrAfaVAVgqsJYtqlK6UGXjV4NQIrVbISFlu62A0CWAFIK9ZAFipnegz2rlD8fztzrdiC0aaHrZAMJZClb7GXzZCDTqPQZCJeNqDk7xNB8CG0TBBz07ZC2aa9QwhcNsZB1PJotQmaWlE1BZBGcol8AVx9RTopF2IitCcDqRX6eokT8kkuUFGBh0kn3EhYXCoOyLTOZCEvq2i";
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

function _getFriends(callBack, errBack) {
    if (friendsCars.length > 0) {
        callBack(friendsCars);
        return;
    }
    var url = Alloy.Globals._search;
    var _data = {
        type: "friends",
        accessToken: "fb.getAccessToken()"
    };
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.debug("friends loaded " + this.responseText);
            var response = JSON.parse(this.responseText);
            response.length > 0 && (friendsCars = response);
            callBack(friendsCars);
        },
        onerror: function() {
            errBack();
        }
    });
    client.open("POST", url);
    client.send(_data);
}

var friendsCars = [];

var fb = {};

exports.filter = function(prop, val, callBack, errBack, inviteText) {
    _getFriends(function(friends) {
        debugger;
        var rows = [];
        for (var i = 0; friends.length > i; i++) {
            var propVal = friends[i][prop];
            debugger;
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
    _getFriends(callBack, errBack, refresh);
};