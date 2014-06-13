		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;

$.cars.setText("(" + login.getCars().length + ")");
$.friends.setText("(" + login.getFriendsCars().length + ")");

var mycarsObj =  Alloy.createController("mycars/mycars");
var friendsObj =  Alloy.createController("friends/friends");

function goToMyCars(e){
	if(login.getCars().length===0){
		var signup =  Alloy.createController("signup/signup",{_callBack:function(){
			if(login.getCars().length > 0){
				mycarsObj.open(true);
			}
		}});
	}else{
		mycarsObj.open();	
	}
}

function goToFriends(e){
	friendsObj.open();
}

Ti.App.addEventListener('cars_updated',function(cars){
	$.cars.setText("(" + cars.length + ")");
});

Ti.App.addEventListener('friends_cars_updated',function(friendsCars){
	$.friends.setText("(" + friendsCars.length + ")");
});