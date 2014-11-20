		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _editable = args._editable;
		var _callBack = args._callBack;
		var _colors = ["ffce87","ff8d87","87a0ff","dda9ee","a6d690","e2b26b"];

$.header.openWindow($.car);
//$.header.setTitle("Hari's" + _data.model);
draw();

function draw(){
 $.logo_image.setImage("logos/48/" + _data.logo);
 $.year_name.setText(_data.year);
 $.model_name.setText(_data.model);
 $.photo_image.setImage("http://www.autoguide.com/auto-news/wp-content/uploads//2013/03/2014-infiniti-q50.jpg");
}


function printContainer(title,content){
	var c = Alloy.createController("car/car_label_container");
	c.setTitle(title);
	c.add(content);
	$.data_container.add(c.getView());
}	
	
function getContainer(){
	var c = Alloy.createController("car/car_data_container");
	return c;
}	
	
function goToModel(){
	if(login.canSeeModel(_data.moid)){
		var model =  Alloy.createController("model/model",{_data:_data});
	}else{
		goToMake();
	}
}

function goToMake(){
	var make =  Alloy.createController("make/make",{_data:_data});
}

function onEdit(){
	
}

function explain_expires(){
	
}
