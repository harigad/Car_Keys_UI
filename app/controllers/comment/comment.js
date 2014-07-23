var login = require('Login');
var args = arguments[0] || {};
var _pollid = args._pollid;
var _callBack = args._callBack;
var _errBack = args._errBack;
	
$.comment.open();
$.text.focus();

function onCancel(){
	$.comment.close();
	if(_errBack){
		_errBack();
		_errBack = null;		
	}
}

function onSave(){
	$.comment.close();
	var usr = login.getUser();
	var data = {};
		data.uid = usr.uid;
		data.name = usr.name;
		data.photo = usr.photo;
		data.photo_big = usr.photo_big;
		data.plate = usr.plate;
		data.data = $.text.getValue();
	
	var comment_item = Alloy.createController("comment/comment_item",{_data:data,_pollid:_pollid});
	
	if(_callBack){
		_callBack(comment_item);
		_callBack = null;		
	}
}



