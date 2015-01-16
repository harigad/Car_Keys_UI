var login = require('Login');
var fb = require('Friends');
var _colors = ["ffce87","ffba25","fda75a","f6c65f","ffce87","e2b26b"];
var friends =  Alloy.createController("friends/friends");
var i = 0;

draw();
function draw(){

var cars = login.getCars();
var rows = [];

		//for(var c=0;c<cars.length;c++){
		var car_btn =  Alloy.createController("friends/friend",{_data:login.getUser()});
		rows.push(car_btn.getView());
		i++;

/*
var rides_btn =  Alloy.createController("home/home_square",{_data:{subtext:login.getPoints("friends"),image:"common/fb.png",title:"friends",bg:_colors[i]},_event:"friends_cars_updated",
_callBack:function(){
	friends.open();
}});
rows.push(rides_btn.getView());
i++;
var rides_btn =  Alloy.createController("home/home_square",{_data:{subtext:login.getPoints("rides"),image:"common/ride_along_36_36.png",title:"rides",bg:_colors[i]},_callBack:rides});
rows.push(rides_btn.getView());
i++;
var testdrives_btn =  Alloy.createController("home/home_square",{_data:{subtext:login.getPoints("testdrives"),image:"common/steering_36_36.png",title:"test drives",bg:_colors[i]},_callBack:testdrives});
rows.push(testdrives_btn.getView());
i++;
//var media_btn =  Alloy.createController("home/home_square",{_data:{image:"common/camera_36_36.png",title:"photos",bg:_colors[i]},_callBack:media});
//rows.push(media_btn.getView());
//i++;

var question_btn =  Alloy.createController("home/home_square",{_data:{subtext:login.getPoints("questions"),image:"common/question_36_36.png",title:"questions",bg:_colors[i]},_callBack:questions});
rows.push(question_btn.getView());
i++;

var question_btn =  Alloy.createController("home/home_square",{_data:{image:"common/help_36_36.png",title:"help",bg:_colors[i]},_callBack:questions});
rows.push(question_btn.getView());
i++;
//var invite_btn =  Alloy.createController("home/home_square",{_data:{subtext:24,image:"common/invite_36_36.png",title:"invite",bg:_colors[i]},_callBack:help});
//rows.push(invite_btn.getView());
//i++;

var no_car =  Alloy.createController("home/home_square",{_data:{image:"common/plus_with_10_margin.png",title:"Add Car",bg:_colors[i]},_callBack:addCar});

	if(cars.length === 0){
		rows.unshift(no_car.getView());
	}else{
		rows.push(no_car.getView());
	}
*/
//var invite_btn =  Alloy.createController("home/home_square",{_data:{title:"invite",bg:_colors[i]},_callBack:invite});
//rows.push(invite_btn.getView());
//i++;

$.main.setData(rows);
	load_friends();
}

var _menu_state = true;
function toggle(){
	Ti.App.fireEvent("openMenu");return;
}

function addCar(){
  	var signup =  Alloy.createController("signup/signup",{_callBack:function(){
		refresh();
	}});	
}

function refresh(){
	$.main.removeAllChildren();
	draw();
}

function rides(){
	var rides =  Alloy.createController("ridealong/rides",{_callBack:function(){
		refresh();
	}});	
}

function testdrives(){
	var rides =  Alloy.createController("testdrives/testdrives",{_callBack:function(){
		refresh();
	}});
}

function questions(){
	
}

function invite(){
	
}

function help(){
	
}
//###############################################################################################
function load_friends(){
	//showPleaseWait();	
	fb.getFriends(function(friends){
		build_friends(friends);
	},function(){
		
	});
}
var _friends_loaded = false;
function build_friends(data){
	_friends_loaded = true;
	var currentMake;
	var currentItem;
		
	var rows = [];	
	for(var i=0;i<data.length;i++){
		if(currentMake!==data[i].make){
			var separator =  Alloy.createController("friends/friend_separator",{_data:data[i]});
			rows.push(separator.getView());
			currentMake = data[i].make;
		}	
			var feed_item_left =  Alloy.createController("friends/friend",{_data:data[i]});
			rows.push(feed_item_left.getView());
	}

$.main.appendRow(rows);	
}
