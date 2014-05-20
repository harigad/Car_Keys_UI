		var args = arguments[0] || {};
		var _data = args._data || {};

$.logo.setImage("logos/48/" + _data.logo);

function goToMake(){
	var make =  Alloy.createController("make/make",{_data:_data});
} 		