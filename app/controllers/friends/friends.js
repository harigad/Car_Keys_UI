var login = require('Login');
var loaded = false;

load();

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
	
	var url = "http://flair.me/carkey/search.php";	
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
		
	for(var i=0;i<data.length;i++){
		
		if(currentMake!==data[i].make){
			var separator =  Alloy.createController("friends/friend_separator",{_data:data[i]});
			$.main.add(separator.getView());
			
			var feed_item_left =  Alloy.createController("friends/friend",{_data:data[i]});
			$.main.add(feed_item_left.getView());
			currentItem="left";
		}else{
			if(currentItem==="left"){
				var feed_item_right =  Alloy.createController("friends/friend",{_data:data[i]});
				$.main.add(feed_item_right.getView());
				currentItem="right";
			}else{
				var feed_item_left =  Alloy.createController("friends/friend",{_data:data[i]});
				$.main.add(feed_item_left.getView());
				currentItem="left";	
			}
		}
		currentMake = data[i].make;
		
	}
}


function showPleaseWait(){
	//$.main.removeAllChildren();
	var len = $.main.children.length;
	for(var i=0;i<len;i++){
			$.main.remove($.main.children[0]);
	}
}
