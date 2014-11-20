var login = require('Login');
var args = arguments[0] || {};
var _data = args._data || {};

$.make_name.setText(_data.make);
$.header.openWindow($.make);		
		
//$.logo.setBackgroundImage("logos/48/" + _data.logo);		
load(_data);

function load(data){
	showPleaseWait();	
	
	var url = "http://services.ridealong.mobi/search.php";	
	var _data = {type:"make",mid:data.mid,accessToken:login.getAccessToken()};
		
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

function showPleaseWait(){
	
}

function build(data){
	for(var i=0;i<data.length;i++){
		var model_item =  Alloy.createController("make/model_item",{_data:data[i]});
		$.main.add(model_item.getView());
		
		if(i<data.length-1){
				$.main.add(Ti.UI.createView({height:1,backgroundColor:"#eee"}));
		}
		
	}
}