var login = require('Login');
		var args = arguments[0] || {};
		var _cid = args._cid || {};
		var _callBack = args._callBack;
	
$.share_add_edit.open();

function onSuccess(friends){
	for(var i=0;i<friends.length;i++){
		var friend =  Alloy.createController("car/share/share_friend",{_cid:_cid,_data:friends[i],_callBack:function(){
			_callBack();
			$.share_add_edit.close();
		}});
		$.friends.add(friend.getView());
	}
}


function onError(){
	
}

login.getFriends(onSuccess,onError);


