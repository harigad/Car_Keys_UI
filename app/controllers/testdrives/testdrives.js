$.header.openWindow($.testdrives);	
$.header.setTitle("test drives");

var header_row = Ti.UI.createTableViewRow();
var header_label = Ti.UI.createLabel({
	height:Ti.UI.SIZE,
	left:20,
	text: "+ new test drive",
	color:"#40a3ff",
    font:{
    	fontSize:40
    }
});

header_row.addEventListener("click",function(){
	var signup =  Alloy.createController("testdrives/request/testdrive_find_car",{_callBack:function(){
		//refresh();
	}});
});

header_row.add(header_label);
$.main.setData([header_row]);
