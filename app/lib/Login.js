var fb = require('Friends');
var user;
var login_screen;
var _openWin;
var _closeWin;
var pleaseWait = Alloy.createController("components/pleasewait");
//logout();
var user = Ti.App.Properties.getObject('user') || null;
if(user){
	preLoad();
}
exports.init = function(_callBack,openWin,closeWin){
	if(openWin){
		_openWin = openWin;
		_closeWin = closeWin;
	}
	
	if(loggedIn()){
		_callBack();
	}else{
		fb.login(function(){
			loadUser(function(){
				_callBack();
			});
		},function(){
			logout();
		});
	}
};

exports.isUser = function(obj){
	if(user.uid === obj.uid){
		return true;
	}else{
		return false;
	}
};

exports.isLoggedIn = function(){
	return loggedIn();	
};

function loggedIn(){
			if(user){
				return true;
			}else{
				return false;
			}
};

exports.getAccessToken = function(){
	return _getAccessToken();
};

function _getAccessToken(){
	return fb.getAccessToken();
}

function preLoad(){
	fb.getFriends(function(){
		Ti.API.info("friends loaded");
	},function(){
		
	});
}

function loadUser(_callBack){
	Ti.API.debug("login.loadUser");

	var url = Alloy.Globals._search;
	var _data;
	
	_data = {type:"user",id:"me",accessToken:_getAccessToken()};
		
	Ti.API.debug("User.load sending data : " + JSON.stringify(_data));
	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	Ti.API.debug("User.load recieved data " + this.responseText);
 	 	 var response = JSON.parse(this.responseText);
      	 user = response;
      	 if(user){
      	 	Ti.App.Properties.setObject('user',user);
      	 	preLoad();
      	    _callBack();
      	 }
      	 
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


function saveUserToCache(){
	Ti.App.Properties.setObject('user',user);
}

function logout(){
	Ti.App.Properties.removeProperty('user');
	fb.logout();
}
//###############################################################################################################
exports.openWindow = function(win){
	_openWin(win);
};

exports.closeWindow = function(win){
	_closeWin(win);
};

exports.ownsModel = function(moid){
	return _ownsModel(moid);
};

exports.ownsCar = function(car){
	var cars = _getCars();
	for(var i=0;i<cars.length;i++){
		if(cars[i].cid == car.cid){
			return true;
		}
	}
	return false;
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

exports.setUser = function(_user){
	user = _user;
	saveUserToCache();
};

exports.getPoints = function(type){
	var points = user.points || {
		"friends":20,
		"rides":70,
		"testdrives":150,
		"questions":60
	};
	return points[type];
};

exports.getUser = function(){
	return user;
};

exports.setCars = function(cars){
	user.cars = cars || [];
	saveUserToCache();
	Ti.App.fireEvent('cars_updated',cars);
};

exports.openPleaseWait = function(){
	pleaseWait.open();
};	

exports.closePleaseWait = function(){
	pleaseWait.close();
};