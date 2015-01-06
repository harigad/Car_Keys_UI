var login = require('Login');
var fb = require('Friends');
var args = arguments[0] || {};
var _data = args._data || {};

$.name.setText(_data.year);
$.header.openWindow($.year);		

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
	fb.filter("year",_data.year,function(friends){
		$.main.setData(friends);
	},function(){
		
	},"a " + _data.year + " model");
}

function showPleaseWait(){
	$.main.setData([]);
}