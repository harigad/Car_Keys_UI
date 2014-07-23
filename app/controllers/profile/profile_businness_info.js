
var _data;

exports.init = function(data){
	if(data.data){
		_data = data;
		$.main.setHeight(Ti.UI.SIZE);
		$.main.setVisible(true);
		$.main.setBottom(5);
		
		$.address_line.setText(data.address_line);
		$.city_state.setText(data.city + ", " + data.state);
		
	}else{
		$.main.setHeight(0);
		$.main.setVisible(false);
		$.main.setBottom(0);
	}
};


function call(){
	Ti.Platform.openURL('tel:' + _data.phone);
}

function openMap(){
	var mapWin =  Alloy.createController("map/map",{_data:_data});
}
