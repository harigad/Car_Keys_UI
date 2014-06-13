var args = arguments[0] || {};
var _callBack = args._callBack;
var login = require('Login');

$.header.setTitle("my vehichles");

exports.open = function(refresh){
	if(refresh){
		_refresh();
	}
	$.header.openWindow($.mycars,"common/plus.png",addNew);	
};

init();
function init(){
	var cars = login.getCars(); 

	if(cars.length > 0 ){
		build(cars);	
	}else{
		var _new = {logo:"logo.png",model:"ADD NEW CAR",new:true};
		var car =  Alloy.createController("car/newcar",{_editable:true,_data:_new,_callBack:function(){
			_refresh();
		}});
		$.main.add(car.getView());
	}

}

function addNew(){
	var signup =  Alloy.createController("signup/signup",{_callBack:function(){
		_refresh();
	}});
}

function build(cars){
	for(var i=0;i<cars.length;i++){
		var car =  Alloy.createController("car/car",{_editable:true,_data:cars[i],_callBack:function(){
			_refresh();
		}});
		$.main.add(car.getView());
	}
}

exports.refresh = function(){
	_refresh();
};

function _refresh(){
	try{
		//$.main.removeAllChildren();
		clear();
	}catch(e){}
	init();
}

function clear(){
	var len = $.main.children.length;
	for(var i=0;i<len;i++){
			$.main.remove($.main.children[0]);
	}
}