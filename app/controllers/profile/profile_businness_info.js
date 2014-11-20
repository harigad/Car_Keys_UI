
var _data;

exports.init = function(data){
	if(data.info){
		_data = data.info;
		$.main.setHeight(Ti.UI.SIZE);
		$.main.setVisible(true);
		$.main.setBottom(5);
		
		$.address_line.setText(_data.address);
		$.city_state.setText(_data.city + ", " + _data.state);
		
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
