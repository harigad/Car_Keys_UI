var login = require('Login');
var args = arguments[0] || {};
var _data = args._data;
var _created;
_created = null;

exports.init = function(data){
	_data = data;
	load();
};

exports.refresh = function(){
	load();
};

function more(){
	$.more.setText("please wait...");
	load(_created);
}

function load(created){
	var url = "http://services.ridealong.mobi/search.php";	
	var data = {type:"poll",moid:_data.moid,action:"get",accessToken:login.getAccessToken()};
	
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


function build(response,created){
	for(var i=0;i<response.length;i++){
		var feed_item = Alloy.createController("poll/poll",{_data:response[i]});
		$.main.add(feed_item.getView());
		_created = response[i].created;
	}
	
	$.more.setText("load more");
}

function clear(){
	var len = $.main.children.length;
	for(var i=0;i<len;i++){
			$.main.remove($.main.children[0]);
	}
}
