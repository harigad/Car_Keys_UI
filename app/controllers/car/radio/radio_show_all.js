var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data;

var _created;
_created = null;

load();

$.header.openWindow($.radio_show_all);

exports.refresh = function(){
	load();
};

function more(){
	$.more.setText("please wait...");
	load(_created);
}

function load(created){
	var url = Alloy.Globals._search;	
	var data = {type:"checkin",action:"showall",cid:_data.cid,accessToken:login.getAccessToken()};
	
	if(created){
		data.created = created;
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
 		client.send(data);
}

function build(data,created){
	var left=false;

	for(var i=0;i<data.length;i++){
		var feed_item =  Alloy.createController("car/radio/radio_show_all_item",{_data:data[i]});
		if(!left){
			$.left.add(feed_item.getView());
			left = true;
		}else{
			$.right.add(feed_item.getView());
			left = false;
		}
	}
}

function clear(){
	var len = $.main.children.length;
	for(var i=0;i<len;i++){
			$.main.remove($.main.children[0]);
	}
}
