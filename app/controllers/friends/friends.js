var login = require('Login');
var loaded = false;

load();

$.header.setTitle("my friends");

exports.open = function(){
	if(!loaded){
		load();	
	}
	$.header.openWindow($.friends);	
};

exports.refresh = function(){
	load();
};

function load(){
	showPleaseWait();	
	
	var url = "http://services.ridealong.mobi/search.php";	
	var _data = {type:"friends",accessToken:login.getAccessToken()};
		
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	Ti.API.debug("User.load recieved data " + this.responseText);
 	 	 var response = JSON.parse(this.responseText);
 	 	 if(response.length>0){
 	 	 	login.setFriendsCars(response);
 	 	 }
      	 build(response);
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


function build(data){
	loaded = true;
	var currentMake;
	var currentItem;
	
		
	var rows = [];	
	for(var i=0;i<data.length;i++){
		if(currentMake!==data[i].make){
			var separator =  Alloy.createController("friends/friend_separator",{_data:data[i]});
			rows.push(separator.getView());
			currentMake = data[i].make;
		}	
			var feed_item_left =  Alloy.createController("friends/friend",{_data:data[i]});
			rows.push(feed_item_left.getView());
	}
	$.main.setData(rows);	
}


function showPleaseWait(){
	$.main.setData([]);
}
