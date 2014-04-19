var user;
var main;
var fb = Ti.Facebook;
var login_screen;

	fb.appid = '374335169286433';
	fb.permissions = ['email'];

exports.init = function(_callBack){
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
	window.location.hash = url;
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
	return fb.getAccessToken();
};

function loadUser(_callBack){
	Ti.API.debug("login.loadUser");

	var url = "http://flair.me/carkey/search.php";	
	var _data = {type:"user",id:"me",accessToken:fb.getAccessToken()};
		
	Ti.API.debug("User.load sending data " + _data);
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
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
		fb.logout();
	}
}	

function show(callBack){
	login_screen =  Alloy.createController("login/login_screen",{_callBack:function(){
		fb.authorize();
	}});
	fb.addEventListener("login",function(){
   			onLogin(callBack);
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