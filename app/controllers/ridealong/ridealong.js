		var login = require('Login');
		var args = arguments[0] || {};
		var _callBack = args._callBack;
		var _people = [];
		$.ridealong.open();

function onWindowFocus(){
	$.search.focus();
}

var _friends;

login.getFriends(function(friends){
	_friends = friends;
});

function onSearch(){
	$.friends.setData(friends);
}

function onEdit(){
	var carkey = $.plate.getValue();
	if(carkey !== "" ){
		var confirm =  Alloy.createController("ridealong/send_request/search_carkey_for_ridealong",{_data:carkey,_callBack:function(success){
			_callBack(success);
			$.ridealong.close();
		}});
	}
}

function onCancel(){
	$.ridealong.close();
}

function onFocus(e){
	eval("$." + e.source.id + "_label").setOpacity(.6);
	
	if(e.source.getValue() === ""){
		eval("$." + e.source.id + "_label").setText(e.source.hint);
	}else{
		eval("$." + e.source.id + "_label").setText(""); 
	}
}

function onBlur(e){
	eval("$." + e.source.id + "_label").setOpacity(0);
}

function onChange(e){
	if(e.source.getValue() === ""){
		eval("$." + e.source.id + "_label").setText(e.source.hint);
	}else{
		eval("$." + e.source.id + "_label").setText(""); 
	}
}
