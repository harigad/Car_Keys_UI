		var args = arguments[0] || {};
		var _data = args._data || {};

$.img.setImage(_data);
$.photo.open();

function onClick(){
	$.photo.close();
}
