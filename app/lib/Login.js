var user;
var main;
var fb = require('facebook');
fb.appid = '374335169286433';
fb.permissions = ['email'];
fb.forceDialogAuth = false;
fb.logout();
	
var login_screen;
var friendsCars;
var _openWin;
var _closeWin;
var pleaseWait = Alloy.createController("components/pleasewait");

exports.openWindow = function(win){
	_openWin(win);
};

exports.closeWindow = function(win){
	_closeWin(win);
};

exports.init = function(_callBack,openWin,closeWin){
	if(openWin){
		_openWin = openWin;
		_closeWin = closeWin;
	}
	
	if(loggedIn()){
		_callBack();
		if(login_screen){
      			login_screen.getView().close();
      			login_screen = null;
      	}
	}else{
		show(_callBack);
	}
};

exports.go = function(_type,_data){
	var url = "";
	var _dataStr = "";
	try{
		_dataStr = JSON.stringify(_data);
	}catch(e){
		_dataStr = "";
	}
	
	url = "page=" + _type + "&data=" + _dataStr;
	//window.location.hash = url;
};

exports.updateUrl = function(_type,_data){
	var url = "";
	var _dataStr = "";
	try{
		_dataStr = JSON.stringify(_data);
	}catch(e){
		_dataStr = "";
	}
	
	url = "page=" + _type + "&data=" + _dataStr;
	Ti.App.currentHash = url;
};


exports.url = function(){
	return;
	var hash = window.location.hash;
		hash = hash.replace("#","");
	var vars = hash.split("&");
	var output = {};
		for(var i=0;i<vars.length;i++){
			var splits = vars[i].split("=");
			if(splits.length>1){
				output[splits[0]] = splits[1]; 
			}
		}
	return output;
};


exports.isUser = function(obj){
	if(user.uid === obj.uid){
		return true;
	}else{
		return false;
	}
};

exports.isAdmin = function(pid){
	if(loggedIn() && user){
		var places = user.places;
			for(var i=0;i<places.length;i++){
				if(pid == places[i].pid){//} && places[i].role_id == 1){
					return true;
				}	
			}
	}
	return false;
};

exports.isLoggedIn = function(){
	return loggedIn();	
};


function loggedIn(){
		if(fb.loggedIn){
			if(user){
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}	
};

exports.getAccessToken = function(){
	//return "CAAFUdLLK0SEBAKK3zXZB9fi9K2l8Sti3o2rbpA27oZAZBLRTI1lZAhzWzrBl2xIChZB8ZAJvGbcnBXNM1gaXfWOHOAAMizMQfkYaSieKyeh1O86rpc7Kd3j40i2RwUGxZBCBkVdN0aKEpkLbwZCDUmqJ7EHcDHJbyw0hdJytG3jaSIZBSAWZCJp95efQL14ezvF95q1Lms0f0woBAZC2cTYXkD2";
	return fb.getAccessToken();
};

function loadUser(_callBack){
	Ti.API.debug("login.loadUser");

	var url = "http://services.ridealong.mobi/search.php";	
	var _data = {type:"user",id:"me",accessToken:fb.getAccessToken()};
	debugger;	
		
	Ti.API.debug("User.load sending data : " + JSON.stringify(_data));
	debugger;
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	debugger;
 	 	Ti.API.debug("User.load recieved data " + this.responseText);
 	 	 var response = JSON.parse(this.responseText);
      	 user = response;
      	// if(hasCars()){
      		_callBack();
      		if(login_screen){
      			login_screen.getView().close();
      			login_screen = null;
      		}
      	 //}else{
      	 //	launchSignup(_callBack);
      	// }
 	 },
 	 onerror: function(e){
 		 	Ti.API.error("User.load error " + e);
 	 }
 	});
 	
 	// Prepare the connection.
 		client.open("POST", url);
 	// Send the request.
 		client.send(_data);
}

exports.ownsModel = function(moid){
	return _ownsModel(moid);
};

function _ownsModel(moid){
	var cars = _getCars();
	for(var i=0;i<cars.length;i++){
		if(cars[i].moid == moid){
			return true;
		}
	}
	return false;
};

function hasCars(){
	if(_getCars().length >0){
		return true;
	}else{
		return false;
	} 
}

exports.getCars = function(){
	return _getCars();
};

function _getCars(){
	return user.cars || [];
};

function onLogin(_callBack){
	if(fb.getAccessToken()){
		if(login_screen){
			login_screen.loading();
		}
		loadUser(_callBack);
	}else{
		login_screen.lock();
		fb.logout();
	}
}	

function show(callBack){
	login_screen =  Alloy.createController("login/login_screen",{_callBack:function(){
		fb.authorize();
	}});
	fb.addEventListener('login', function(e) {
		debugger;
    Ti.API.debug('Returned from Facebook.');

    if (e.success) {
        Ti.API.debug('Authorized with Facebook, yeeey!');
        // Query Graph now that we're authorized...
    }
    else if (e.error) {
        Ti.API.debug('Error logging in with Facebook: ' + e.error);
    }
    else if (e.cancelled) {
        Ti.API.debug('Cancelled logging in with Facebook.');
    }
    else {
        Ti.API.debug('Something else. May actually be logged out.');
    }
});

 }

exports.setUser = function(_user){
	user = _user;
};

exports.getUser = function(){
	return user;
};

exports.setFeed = function(_flairs){
	Ti.API.info("login.setFeed");
	user.setFeed(_flairs);
};

exports.setCars = function(cars){
	user.cars = cars || [];
	Ti.App.fireEvent('cars_updated',cars);
};

exports.getPlate = function(){
	return user.plate;	
};

exports.setPlate = function(plate){
	user.plate = plate;
};

exports.getPlate = function(){
	return user.plate;	
};

function launchSignup(_callBack){
	var signup =  Alloy.createController("signup/signup",{_callBack:_callBack});
}

exports.getFriends = function(callBack,errBack){
	fb.requestWithGraphPath('me/friends', {}, 'GET', function(e) {
		debugger;
    if (e.success) {
    	var friends = JSON.parse(e.result);
        callBack(friends.data);
    } else if (e.error) {
        errBack(e.error);
    } else {
        errBack('Unknown response');
    }
});

};

exports.getRequests = function(){
	return user.requests || [];
};

exports.setRequests = function(requests){
	user.requests = requests;
};

exports.getNotices = function(){
	return user.notices || [];
};

exports.setNotices = function(notices){
	user.notices = notices;
};

exports.setFriendsCars = function(cars){
	friendsCars = cars || [];
	Ti.App.fireEvent('friends_cars_updated',friendsCars);
};

exports.getFriendsCars = function() {
	return friendsCars || [];
};

exports.getFriendsWithModel = function(moid){
	var counts = [];
	for(var i=0;i<friendsCars.length;i++){
		if(moid == friendsCars[i].moid){
			counts.push(friendsCars[i]);
		}
	}
	
	return counts;
};

exports.canSeeModel = function(moid){
	return true;
	if(_ownsModel(moid)){
		return true;
	}

	for(var i=0;i<friendsCars.length;i++){
		if(moid == friendsCars[i].moid){
			return true;
		}
	}
	
	return false;
};

exports.openPleaseWait = function(){
	pleaseWait.open();
};	

exports.closePleaseWait = function(){
	pleaseWait.close();
};