var login = require('Login');
var fb = require('Friends');
var args = arguments[0] || {};
var _data = args._data || {};

$.name.setText("V." + _data.cylinder);
$.header.openWindow($.cylinder);		

load();

exports.open = function(){
	if(!loaded){
		load();	
	}
	$.header.openWindow($.friends);	
};

exports.refresh = function(){
	load();
};

function load(){
	showPleaseWait();	
	fb.filter("cylinder",_data.cylinder,function(friends){
		$.main.setData(friends);
	},function(){
		
	},"a V." + _data.cylinder + " engine");
}

function showPleaseWait(){
	$.main.setData([]);
}