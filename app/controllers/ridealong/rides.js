$.header.openWindow($.rides);	
$.header.setTitle("rides");
var header_row = Ti.UI.createTableViewRow();
var header_label = Ti.UI.createLabel({
	height:Ti.UI.SIZE,
	left:20,
	text: "+ ride request",
	color:"#40a3ff",
    font:{
    	fontSize:40
    }
});
header_row.add(header_label);
$.main.setData([header_row]);
