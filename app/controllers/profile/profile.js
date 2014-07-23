		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};

$.pull_to_refresh.init($.scroll,function(){
	load(_data);
},$.ride_along);

$.name.setText(_data.name);
$.header.openWindow($.profile);

$.photoImg.setImage(_data.photo_big);
//$.photo.setBackgroundImage(_data.photo_big);
$.plate.setText(_data.plate);
load(_data);

$.photoImg.addEventListener("load",function() {
    if($.photoImg.size.width > $.photoImg.size.height){
		$.photoImg.setHeight(100);
	}else{
		$.photoImg.setWidth(100);
	}
});

function load(data){
	showPleaseWait();	
	
	var url = "http://flair.me/carkey/search.php";	
	var _data = {type:"user",id:data.uid,accessToken:login.getAccessToken()};
		
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	Ti.API.debug("User.load recieved data " + this.responseText);
 	 	 var response = JSON.parse(this.responseText);
 	 	 _data = response;
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
	$.profile_businness_info.init(data);
	var cars = data.cars || [];
	for(var i=0;i<cars.length;i++){
		var car =  Alloy.createController("car/car",{_data:cars[i]});
		$.cars_container_inner.add(car.getView());
	}
	
	var feed =  Alloy.createController("feed/feed",{_id:_data.uid});
	$.feed.add(feed.getView());
	
}

function goToPhoto(){
	var photo =  Alloy.createController("photo/photo",{_data:_data.photo_big});
}

function showPleaseWait(){
	
}
