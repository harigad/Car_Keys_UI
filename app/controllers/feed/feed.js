var login = require('Login');
var args = arguments[0] || {};
var _id = args._id || null;
var _feed = args._feed || null;
var _dontBuild = args._dontBuild || false;
var _created;

_created = null;

if(!_feed){
	load();
}else{
	build(_feed);
}

exports.refresh = function(){
	load();
};

function more(){
	$.more.setText("please wait...");
	load(_created);
}

function load(created){
	var url = "http://services.ridealong.mobi/search.php";	
	var _data = {type:"feed",accessToken:login.getAccessToken()};
	
	if(_id){
		_data.uid = _id;
	}
	
	if(created){
		_data.created = created;
	}
	
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 		Ti.API.debug(this.responseText);
 	 	 var response = JSON.parse(this.responseText);
 	 	 if(!_dontBuild){
 	 	 	build(response,created);
 	 	 }
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
	var rows = [];
	
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
			rows.push(feed_item.getView());
			_created = data[i].created;
		}
	}
	
	//if(!created){
		$.main.appendRow(rows);
	//}
	//setTimeout(function(){
		$.more.setText("load more");
	//},3000);
	
}

function clear(){
	$.main.setData([]);
}
