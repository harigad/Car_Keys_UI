var fb = require('facebook');
fb.appid = '374335169286433';
fb.permissions = ['email'];
fb.forceDialogAuth = true;

var friendsCars = [];
var _callBack;
var _errBack;

fb.addEventListener('login', function(e) {
	debugger;
    if (e.success) {
    	if(_callBack){
       		_callBack();_callBack = null;
      	}
    } else if (e.error) {
    	if(_errBack){
       		 _errBack();_errBack = null;
       	}
    } else if (e.cancelled) {
        // do nothing.. call was cancelled
    }
});

function _logout(){
	fb.logout();
}

exports.logout = function(){
	_logout();
};

function _login(callback,errback){
	debugger;
	_callBack = callback;
	_errBack = errback;
	
	var login_screen = Alloy.createController("login/login_screen",{
		_callBack:function(){
			fb.authorize();
		}
	});
}

exports.login = function(callback,errback){
	_login(callback,errback);
};

exports.getAccessToken = function(){
	return _getAccessToken();
};

function _getAccessToken(){
	Ti.API.error(fb.getAccessToken());
	if(fb.getAccessToken()){
		return fb.getAccessToken();
	}else{
		return null;
	}
}

exports.filter = function(prop,val,callBack,errBack,inviteText){
	_getFriends(function(friends){
		debugger;
		var rows = [];
		for(var i=0;i<friends.length;i++){
			var friend = friends[i];
			var propVal = friend[prop];
			if( propVal == val){
				var feed_item_left =  Alloy.createController("friends/friend",{_data:friends[i]});
				rows.push(feed_item_left.getView());
			}
		}
		if(rows.length === 0){
		    var feed_item_left =  Alloy.createController("components/nofriends_invite",{_txt:inviteText});
			rows.push(feed_item_left.getView());
		}
		callBack(rows);
	},function(){
		errBack();
	});
};

exports.getFriends = function(callBack,errBack,refresh){
	 return _getFriends(callBack,errBack,refresh);
};

function _getFriends(callBack,errBack,refresh){
	if(!callBack){
		return friendsCars;
	}
	
	if(friendsCars.length > 0){
		callBack(friendsCars);
	}
	
	var url = Alloy.Globals._search;	
	var _data = {type:"friends",accessToken:_getAccessToken()};
		
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	Ti.API.debug("friends loaded " + this.responseText);
 	 	 var response = JSON.parse(this.responseText);
 	 	 if(response.length>0){
 	 	 	friendsCars = response;
 	 	 }
      	 callBack(friendsCars);
      	 Ti.App.fireEvent("friends_cars_updated",{data:friendsCars});
 	 },
 	 onerror: function(e){
 		 errBack();
 	 }
 	});
 	
 	// Prepare the connection.
 		client.open("POST", url);
 	// Send the request.
 		client.send(_data);
};

exports.invite = function(){
	fb.dialog("apprequests",
	{message:"Checkout my Infiniti G35 and Honda Civic"},
	function(response){
		var k = response;
		Ti.API.info(k);
		debugger;
	});
};
