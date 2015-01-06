		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;
		
$.logo.setBackgroundImage("logos/48/" + _data.logo);		
$.model.setText(_data.model);

function onSelect(){
	send_to_server();
	_callBack(true);
}

function send_to_server(){
	var url = Alloy.Globals._search;	
	var _postData = {type:"checkin",action:"process",oid:_data.oid,accessToken:login.getAccessToken()};
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	   //do nothing
 	 },
 	 onerror: function(e){
 		 	//do nothing
 	 }
 	});
 	
 	// Prepare the connection.
 		client.open("POST", url);
 	// Send the request.
 		client.send(_postData);
}
