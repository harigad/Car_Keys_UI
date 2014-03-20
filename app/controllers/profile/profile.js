		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};

$.name.setText(_data.name);
$.header.openWindow($.profile);

$.photo.setBackgroundImage(_data.photo);
$.plate.setText(_data.plate);
load(_data);

function load(data){
	showPleaseWait();	
	
	var url = "http://flair.me/carkey/search.php";	
	var _data = {type:"user",id:data.id,accessToken:login.getAccessToken()};
		
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
	var cars = data.cars || [];
	for(var i=0;i<cars.length;i++){
		var car =  Alloy.createController("car/car",{_data:cars[i]});
		$.cars_container_inner.add(car.getView());
	}
	
}

function showPleaseWait(){
	
}
