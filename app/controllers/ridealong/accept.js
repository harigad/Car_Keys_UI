		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;
		
var request =  Alloy.createController("ridealong/request",{_data:_data});
$.request.add(request.getView());

$.accept.open();

function onAccept(){
	process("approve");
}

function onDelete(){
	process("reject");
}

function process(action){
	send_to_server(action);
	
	var requests = login.getRequests();
	for(var i=0;i<requests.length;i++){
		if(requests[i].checkin_request_id == _data.checkin_request_id){
			requests.splice(i,1);
			break;
		}
	}
	login.setRequests(requests);
	_callBack();
	$.accept.close();
}

function send_to_server(action){
	var url = "http://services.ridealong.mobi/search.php";	
	var _postData = {type:"checkin",action:action,checkin_request_id:_data.checkin_request_id,accessToken:login.getAccessToken()};
	
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
