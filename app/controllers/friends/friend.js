		var args = arguments[0] || {};
		var _data = args._data || {};

$.icon.setImage(_data.photo);
$.title.setText(_data.name.split(" ")[0]);
if(_data.cars){
	for(var i=0;i<_data.cars.length;i++){
		var car = Ti.UI.createLabel({
			text:_data.cars[i].model + " by " + _data.cars[i].make,
			left:0,
			font:{
				fontSize:14
			},
			color:"#7f7f7f"
		});
		$.model.add(car);
	}
	$.icon.setTop(0);
}else{
		var car = Ti.UI.createLabel({
			text:_data.model + " by " + _data.make,
			left:0,
			font:{
				fontSize:14
			},
			color:"#7f7f7f"
		});
		$.model.add(car);
}
function onClick(){
	var profile =  Alloy.createController("profile/profile",{_data:_data});
}
