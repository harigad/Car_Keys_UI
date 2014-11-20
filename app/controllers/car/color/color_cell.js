	var args = arguments[0] || {};
	var _hex = args._hex || false;
	var _selected = args._selected || false;	
	var _logo = args._logo;

if(_hex){
	$.cell.setBackgroundColor("#" + _hex);
}


function onClick(){
	if(_selected){
		$.cell.setBorderWidth(1);
		$.cell.setBorderRadius(4);
		$.logo.setBackgroundImage("");
		_selected = false;
	}else{
		$.cell.setBorderWidth(10);
		$.cell.setBorderRadius(4);
		$.logo.setBackgroundImage("logos/48/" + _logo);
		_selected = true;
	}
	
}
