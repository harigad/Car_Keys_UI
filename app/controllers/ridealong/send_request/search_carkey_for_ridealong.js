		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || "";
		var _callBack = args._callBack;

send_to_server();
$.search_carkey_for_ridealong.open();

function send_to_server(){
	var url = "http://flair.me/carkey/search.php";	
	var _postData = {type:"checkin",action:"find",carkey:_data,accessToken:login.getAccessToken()};
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	 var response = JSON.parse(this.responseText);
 	 	 var select_car =  Alloy.createController("ridealong/send_request/select_car_for_ridealong",{_data:response,_callBack:function(success){
 	 	 	_callBack(success);
 	 	 	$.search_carkey_for_ridealong.close();
 	 	 }});
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

