		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};

$.photo.setImage(_data.photo);
$.name.setText("loading..");
$.header.openWindow($.profile);

if(_data.cars){
	build(_data);
}else{
	load(_data);
}


function load(data){
	showPleaseWait();	
	
	var url = Alloy.Globals._search;	
	var dat = {type:"user",id:data.uid,accessToken:login.getAccessToken()};
		
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	Ti.API.debug("User.load recieved data " + this.responseText);
 	 	 var response = JSON.parse(this.responseText);
 	 	 _data = response;
 	 			    var animation = Titanium.UI.createAnimation();
					animation.top = 0;
					animation.duration = 200;
					var animationHandler = function() {
  						animation.removeEventListener('complete',animationHandler);
  						build(response);	
					};
					animation.addEventListener('complete',animationHandler);
					$.container.animate(animation);
 	 	 
 	 },
 	 onerror: function(e){
 		 	Ti.API.error("User.load error " + e);
 	 }
 	});
 	
 	// Prepare the connection.
 		client.open("POST", url);
 	// Send the request.
 		client.send(dat);
}

function build(data){
	 $.name.setText(data.name);
	var rows = [];
	var cars = data.cars || [];
	    for(var c=0;c<cars.length;c++){
			var carObj =  Alloy.createController("car/car",{
				_color:(c%2),_data:cars[c],_callBack:function(){}
			});
		rows.push(carObj.getView());
	}
	/*
var ridesLen = data.rides.length || "";

var rides_btn =  Alloy.createController("home/home_square",{_data:{image:"common/ride_along_36_36.png",subtext:ridesLen,title:"ride alongs"},_callBack:function(){
	
}});
rows.push(rides_btn.getView());

var testdrives_btn =  Alloy.createController("home/home_square",{_data:{image:"common/steering_36_36.png",subtext:11,title:"test drives"},_callBack:function(){
	
}});
rows.push(testdrives_btn.getView());

var media_btn =  Alloy.createController("home/home_square",{_data:{image:"common/camera_36_36.png",title:"photos"},_callBack:function(){
	
}});
rows.push(media_btn.getView());
*/
$.main.setData(rows);

}	
	

function showPleaseWait(){
	
}
