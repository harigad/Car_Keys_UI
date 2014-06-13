var login = require('Login');
var args = arguments[0] || {};
var _data = args._data || {};

$.header.openWindow($.model);

$.friends.init(_data.moid);	
		
$.logo.setBackgroundImage("logos/48/" + _data.logo);
$.plate.setText(_data.model);

if(!login.ownsModel(_data.moid)){
	$.post_btn.setBackgroundColor("#ddd");
	$.post_label.setColor("#eee");
	$.post_label.setText("READ ONLY");
}

$.model.open();

function goToMake(){
	var make =  Alloy.createController("make/make",{_data:_data});
}


