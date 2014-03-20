function User(id, _callBack, _data) {
    Ti.API.debug("User.init " + id);
    this.id = id;
    if (_data) {
        var that = this;
        this._data = _data;
        this.id = this._data.id;
        setTimeout(function() {
            _callBack(that);
        }, 10);
    } else this.load(_callBack);
}

var login = require("Login");

User.prototype.load = function(_callBack) {
    Ti.API.debug("User.load " + this.id);
    var that = this;
    var url = "http://flair.me/search.php";
    var _data = {
        type: "user",
        id: this.id,
        accessToken: login.getAccessToken()
    };
    Ti.API.debug("User.load sending data " + _data);
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.debug("User.load recieved data " + this.responseText);
            var response = JSON.parse(this.responseText);
            if (response.status) {
                that._data = response;
                that.id = that._data.id;
            }
            _callBack(that);
        },
        onerror: function(e) {
            Ti.API.error("User.load error " + e);
        }
    });
    client.open("POST", url);
    client.send(_data);
};

User.prototype.getId = function() {
    return this.id;
};

User.prototype.setPlace = function() {
    this._data.places = _places;
};

User.prototype.getPlaces = function() {
    return this._data.places ? this._data.places : false;
};

User.prototype.setData = function(data) {
    this._data = data;
};

User.prototype.getName = function() {
    return this._data.name;
};

User.prototype.getPhoto = function() {
    return this._data.photo;
};

User.prototype.getPhotoBig = function() {
    return this._data.photo_big;
};

User.prototype.setFeed = function(_feed) {
    Ti.API.info("user.setFeed " + _feed.length);
    this._data.feed = _feed;
};

User.prototype.isInvited = function() {
    return this._data.invited;
};

User.prototype.feed = function() {
    return this._data.feed;
};

User.prototype.isAdmin = function() {
    var Login = require("Login");
    var user = Login.getUser();
    return user.getId() == this.getId() ? true : false;
};

User.prototype.loadFriends = function() {
    var that = this;
    Ti.Facebook.requestWithGraphPath("me/friends", {
        fields: "first_name,last_name,id,photo"
    }, "GET", function(e) {
        if (e.success) {
            Ti.API.debug("friends loaded");
            var d = JSON.parse(e.result);
            var rows = d.data;
            that.friends = rows;
        }
    });
    var url = "http://flair.me/search.php";
    var _data = {
        type: "friends",
        accessToken: login.getAccessToken()
    };
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            var response = JSON.parse(this.responseText);
            that.friendsUsing = response.cars;
            that.friendsUsingString = response.friendsStr;
        },
        onerror: function(e) {
            Ti.API.error(e.error);
        },
        timeout: 5e3
    });
    client.open("POST", url);
    client.send(_data);
};

User.prototype.getAllFriends = function() {
    return this.friends;
};

User.prototype.getUserFriends = function() {
    return this.friendsUsing;
};

User.prototype.setDirty = function() {};

module.exports = User;