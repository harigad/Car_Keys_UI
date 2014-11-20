var login = require('Login');
		var args = arguments[0] || {};
		var _signup = args._signup || false;
		var _cid = args._cid || null;
		var _colors = args._colors || false;
		var _callBack = args._callBack || null;
	    var _selected = args._selected || null;
	    var _logo = args._logo || "";
	
//$.color_add_edit.open();


function onLoad(){
if(_colors){
	var colorsArr = [];
	for (var hex in _colors){
		colorsArr.push(hex);	
	}	
	
	var pieSize = 100 / colorsArr.length;
	
	var data = [];
	
	for(var i=0;i<colorsArr.length;i++){
		
		var colorObj = {};
		colorObj.value = pieSize;
		colorObj.color = "#" + colorsArr[i];
		colorObj.label = "Select Exterior Color";
		data.push(colorObj);
		
	}
	
Ti.App.fireEvent("drawPie",{data:data});
}
}

function onCancel(){
	
}

function process(){
	
}
