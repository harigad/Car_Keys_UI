var login = require('Login');
var _colors = ["ffce87","ffba25","fda75a","f6c65f","ffce87","e2b26b"];
var mycarsObj =  Alloy.createController("mycars/mycars");
draw();
function draw(){
var i = 0;
var cars = login.getCars();

if(cars.length){
	for(var c=0;c<cars.length;c++){
		var car_btn =  Alloy.createController("home/home_square",{_obj:cars[c],_data:{image:"logos/48/" + cars[c].logo,title:cars[c].model,bg:_colors[i]},_callBack:function(obj){
			var carObj =  Alloy.createController("car/car",{
				_data:obj,_callBack:function(){}
			});
		}});
		$.main.add(car_btn.getView());
		i++;
	}
}else{
	var no_car =  Alloy.createController("home/home_square",{_data:{title:"Add Car",bg:_colors[i]},_callBack:noCar});
	$.main.add(no_car.getView());
	i++;
}

var rides_btn =  Alloy.createController("home/home_square",{_data:{title:"Ride Alongs",bg:_colors[i]},_callBack:rides});
$.main.add(rides_btn.getView());
i++;
var testdrives_btn =  Alloy.createController("home/home_square",{_data:{title:"Test Drives",bg:_colors[i]},_callBack:testdrives});
$.main.add(testdrives_btn.getView());
i++;
var media_btn =  Alloy.createController("home/home_square",{_data:{title:"Media",bg:_colors[i]},_callBack:media});
$.main.add(media_btn.getView());
i++;
var messages_btn =  Alloy.createController("home/home_square",{_data:{title:"Messages",bg:_colors[i]},_callBack:messages});
$.main.add(messages_btn.getView());
i++;
var invite_btn =  Alloy.createController("home/home_square",{_data:{title:"Invite",bg:_colors[i]},_callBack:invite});
$.main.add(invite_btn.getView());
i++;
}

function noCar(){
  	var signup =  Alloy.createController("signup/signup",{_callBack:function(){
		refresh();
	}});	
}

function refresh(){
	$.main.removeAllChildren();
	draw();
}

function cars(){
	mycarsObj.open(true);
}

function rides(){
	
}

function testdrives(){
	
}

function media(){
	
}

function messages(){
	
}

function invite(){
	
}
