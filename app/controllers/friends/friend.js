		var args = arguments[0] || {};
		var _data = args._data || {};

$.icon.setImage(_data.photo);
$.title.setText(_data.name.split(" ")[0]);
$.model.setText(_data.model + " by " + _data.make);

function onClick(){
	var profile =  Alloy.createController("car/car",{_data:_data});
}
