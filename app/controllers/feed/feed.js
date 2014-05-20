var login = require('Login');

load();

exports.refresh = function(){
	load();
};

function load(){
	showPleaseWait();	
	
	var url = "http://flair.me/carkey/search.php";	
	var _data = {type:"feed",accessToken:login.getAccessToken()};
		
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
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

	for(var i=0;i<data.length;i++){
		var feed_item;
		switch(data[i].typeid) {
		case "0":
			feed_item =  Alloy.createController("feed/feed_car_new",{_data:data[i]});break;
		case "1":
			feed_item =  Alloy.createController("feed/feed_car_added",{_data:data[i]});break;
		case "2":
			feed_item =  Alloy.createController("feed/feed_plate",{_data:data[i]});break;
		case "3":
			feed_item =  Alloy.createController("feed/feed_share",{_data:data[i]});break;
		case "4":
			feed_item =  Alloy.createController("feed/feed_ridealong",{_data:data[i]});break;
		}
		$.main.add(feed_item.getView());
	}
}

function showPleaseWait(){
	//$.main.removeAllChildren();
	var len = $.main.children.length;
	for(var i=0;i<len;i++){
			$.main.remove($.main.children[0]);
	}
}
