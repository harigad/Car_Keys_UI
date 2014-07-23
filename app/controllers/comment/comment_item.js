var login = require('Login');
var args = arguments[0] || {};
var _data = args._data;
var _pollid = args._pollid;

$.photo.setBackgroundImage(_data.photo);
$.name.setText(_data.name);
$.text.setText(_data.data);

if(_data.coid){
	
}else{
	save();
}

if(login.isUser(_data)){
	$.delete_btn.setVisible(true);
}

function goToUser(){
	//var profile =  Alloy.createController("profile/profile",{_data:_data});
}

function save(){
	var url = "http://flair.me/carkey/search.php";	
	var data = {type:"comments",fid:_pollid,data:_data.data,action:"add",accessToken:login.getAccessToken()};

 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	 var response = JSON.parse(this.responseText);
 	 	
 	 },
 	 onerror: function(e){
 		 	Ti.API.error("User.load error " + e);
 	 }
 	});
 	
 	// Prepare the connection.
 		client.open("POST", url);
 	// Send the request.
 		client.send(data);
	
}

function onDelete(){
	debugger;
	$.main.setHeight(0);
	$.main.setVisible(false);
	
	var url = "http://flair.me/carkey/search.php";	
	var data = {type:"comments",fid:_pollid,coid:_data.coid,action:"delete",accessToken:login.getAccessToken()};

 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 
 	 },
 	 onerror: function(e){
 		 	Ti.API.error("User.load error " + e);
 	 }
 	});
 	
 	// Prepare the connection.
 		client.open("POST", url);
 	// Send the request.
 		client.send(data);
}