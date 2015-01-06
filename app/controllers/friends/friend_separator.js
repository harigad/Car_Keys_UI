		var args = arguments[0] || {};
		var _data = args._data || {};

$.logo.setImage("logos/48/" + _data.logo);
$.name.setText(_data.make);

function goToMake(){
	var make =  Alloy.createController("make/make",{_data:_data});
} 		