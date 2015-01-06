var login = require('Login');
var args = arguments[0] || {};
var _callBack = args._callBack || {};

var plateText = login.getPlate() || "";

if(plateText){
	$.plate.setValue(plateText.toUpperCase());
}

$.edit_plate.open();

function onFocus(){
	$.plate.focus();
}

function onEdit(){
	process();
}

function onCancel(){
	_callBack();
	$.edit_plate.close();
}

function process(){
	if($.plate.getValue() !=="" ){
		login.setPlate($.plate.getValue().toUpperCase());
		send_to_server();
	}
	$.edit_plate.close();
	_callBack();
}


function send_to_server(){
	var url = Alloy.Globals._search;	
	var _postData = {type:"editplate",plate:$.plate.getValue().toUpperCase(),accessToken:login.getAccessToken()};
		
	Ti.API.debug("editing plate " + $.plate.getValue());
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	Ti.API.debug("plate changed");
 	 },
 	 onerror: function(e){
 		 	Ti.API.error("plate change error" + e);
 	 }
 	});
 	
 	client.open("POST", url);
 	client.send(_postData);
}
