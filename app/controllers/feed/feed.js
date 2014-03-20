var login = require('Login');
load();

function load(){
	showPleaseWait();	
	
	var url = "http://flair.me/carkey/search.php";	
	var _data = {type:"friends",accessToken:login.getAccessToken()};
		
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	Ti.API.debug("User.load recieved data " + this.responseText);
 	 	 var response = JSON.parse(this.responseText);
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
	var currentMake;
	var currentItem;	
		
	for(var i=0;i<data.length;i++){
		
		if(currentMake!==data[i].make){
			var separator =  Alloy.createController("feed/separator",{_data:data[i]});
			$.main.add(separator.getView());
			
			var feed_item_left =  Alloy.createController("feed/feed_item_left",{_data:data[i]});
			$.main.add(feed_item_left.getView());
			currentItem="left";
		}else{
			if(currentItem==="left"){
				var feed_item_right =  Alloy.createController("feed/feed_item_left",{_data:data[i]});
				$.main.add(feed_item_right.getView());
				currentItem="right";
			}else{
				var feed_item_left =  Alloy.createController("feed/feed_item_left",{_data:data[i]});
				$.main.add(feed_item_left.getView());
				currentItem="left";	
			}
		}
		currentMake = data[i].make;
		
	}
}


function showPleaseWait(){
	//$.main.removeAllChildren();
	
	
}
