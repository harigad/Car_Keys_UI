		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;
		var _obj = args._obj;
		var _event = args._event || null;

if(_event){
	/*debugger;
	Ti.App.addEventListener(_event,function(e){
		debugger;
		$.subtext.setText(e.data.length || "");
	});*/
}
	
var matches = _data.title.match(/\d+/g);
if (matches != null) {
    $.title.setText(_data.title);
}else{
	$.title.setText(_data.title.toLowerCase());
}

if(_data.color){
	$.title.setColor(_data.color);
}	
	
//}else{
	$.main.remove($.title);
//}

if(_data.subtext){
	$.subtext.setText("(" + _data.subtext + " points)");
}

//if(_data.image){
	$.icon.setImage(_data.image);
	if(_data.width)$.icon.setWidth(_data.width);
	if(_data.height)$.icon.setWidth(_data.height);
//}

//$.icon_bg.setBackgroundColor("#" + _data.bg);

function onClick(){
	if(_callBack){
		_callBack(_obj);
	}
}
