		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};

$.pull_to_refresh.init($.scroll,function(){
	$.cars_container_inner.removeAllChildren();
	$.rides.removeAllChildren();
	load(_data);
},$.ride_along);

$.name.setText(_data.name);
$.header.openWindow($.profile);

//$.photoImg.setImage(_data.photo_big);
//$.photo.setBackgroundImage(_data.photo_big);
//$.plate.setText(_data.plate);
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
	
	var url = "http://services.ridealong.mobi/search.php";	
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
	var carRows = [];
	for(var i=0;i<cars.length;i++){
		var car =  Alloy.createController("car/car",{_data:cars[i]});
		carRows.push(car.getView());
	}
	
	$.cars_container_inner.setData(carRows);
	
	var rides = data.rides || [];
	for(var i=0;i<rides.length;i++){
		var ride =  Alloy.createController("feed/feed_rides",{_data:rides[i]});
		$.rides.add(ride.getView());
	}
	
	if(rides.length === 0 ){
		var lbl = Ti.UI.createLabel({top:25,bottom:25,height:Ti.UI.SIZE,width:Ti.UI.SIZE,color:"#cecece",font:{fontWeight:"bold"},text:"No Ride Alongs Yet!!!"});
		$.rides.add(lbl);
	}
	
	//var feed =  Alloy.createController("feed/feed",{_id:_data.uid,_feed:_data.feed});
	//$.feed.add(feed.getView());
}

function goToPhoto(){
	var photo =  Alloy.createController("photo/photo",{_data:_data.photo_big});
}

function showPleaseWait(){
	
}
