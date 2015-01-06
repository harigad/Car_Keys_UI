var args = arguments[0] || {};
var _callBack = args._callBack;

$.help.open({transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});

function close(){
	$.help.close();
	_callBack();
}
