		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;

$.cars.setText("(" + login.getCars().length + ")");
$.friends.setText("(" + login.getFriendsCars().length + ")");

var mycarsObj =  Alloy.createController("mycars/mycars");
var friendsObj =  Alloy.createController("friends/friends");

function goToMyCars(e){
	Ti.API.debug("goToMyCars 1");
	if(login.getCars().length===0){
		Ti.API.debug("goToMyCars 2");
		var signup =  Alloy.createController("signup/signup",{_callBack:function(){
			if(login.getCars().length > 0){
				mycarsObj.open(true);
			}
		}});
	}else{
		Ti.API.debug("goToMyCars 3");
		mycarsObj.open();	
	}
}

function goToFriends(e){
	Ti.API.debug("goToFriends 1");
	friendsObj.open();
	Ti.API.debug("goToFriends 2");
}

Ti.App.addEventListener('cars_updated',function(cars){
	$.cars.setText("(" + cars.length + ")");
});

Ti.App.addEventListener('friends_cars_updated',function(friendsCars){
	$.friends.setText("(" + friendsCars.length + ")");
});