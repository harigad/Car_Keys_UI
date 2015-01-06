var args = arguments[0] || {};
var _callBack = args._callBack;

$.testdrive_vin_help.open({transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});

function close(){
	$.testdrive_vin_help.close();
	_callBack();
}
