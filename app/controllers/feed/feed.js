var login = require('Login');
var args = arguments[0] || {};
var _id = args._id || null;
var _created;
_created = null;
load();

exports.refresh = function(){
	load();
};

function more(){
	$.more.setText("please wait...");
	load(_created);
}

function load(created){
	var url = "http://flair.me/carkey/search.php";	
	var _data = {type:"feed",accessToken:login.getAccessToken()};
	
	if(_id){
		_data.uid = _id;
	}
	
	if(created){
		_data.created = created;
	}
	
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	 var response = JSON.parse(this.responseText);
 	 	 build(response,created);
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


function build(data,created){
	
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
		case "5":
			feed_item =  Alloy.createController("feed/feed_poll_answer",{_data:data[i]});break;
		}
		
		if(feed_item){
			$.main.add(feed_item.getView());
			_created = data[i].created;
		}
	}
	
	$.more.setText("load more");
}

function clear(){
	var len = $.main.children.length;
	for(var i=0;i<len;i++){
			$.main.remove($.main.children[0]);
	}
}
