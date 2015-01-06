var login = require('Login');
var fb = require('Friends');
var args = arguments[0] || {};
var _data = args._data || {};

$.name.setText(_data.make);
$.photo.setBackgroundImage("logos/48/" + _data.logo);
$.header.openWindow($.make);		

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
	fb.filter("mid",_data.mid,function(friends){
		$.main.setData(friends);
	},function(){
		
	},_data.make);
}

function showPleaseWait(){
	$.main.setData([]);
}