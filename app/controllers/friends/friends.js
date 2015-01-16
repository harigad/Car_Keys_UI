var login = require('Login');
var fb = require('Friends');
var _loaded = false;
$.header.setTitle("friends");
exports.open = function(){
	if(!_loaded){
		load();	
	}
	$.header.openWindow($.friends);	
};

exports.refresh = function(){
	load();
};

function load(){
	showPleaseWait();	
	fb.getFriends(function(friends){
		build(friends);
	},function(){
		
	});
}

function build(data){
	_loaded = true;
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
	
var header_row = Ti.UI.createTableViewRow();
var header_label = Ti.UI.createLabel({
	height:Ti.UI.SIZE,
	left:20,
	text: "+ invite a friend",
	color:"#40a3ff",
    font:{
    	fontSize:40
    }
});
	header_row.add(header_label);
	rows.unshift(header_row);
    $.main.setData(rows);	
}

function showPleaseWait(){
	$.main.setData([]);
}
