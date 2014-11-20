var login = require('Login');
		var args = arguments[0] || {};
		var _cid = args._cid || {};
		var _callBack = args._callBack;
		var _friends;
		var _searchTime;
		
$.share_add_edit.open();

function onSuccess(friends){
	clear();
	_friends = friends;
	var len = friends.length;
	if(friends.length > 20){
		//len = 20;
	}
	
	var friendsRows = [];
	for(var i=0;i<len;i++){
		var friend =  Alloy.createController("car/share/share_friend",{_cid:_cid,_data:friends[i],_callBack:function(){
			_callBack();
			$.share_add_edit.close();
		}});
		var x = friend.getView();
		friendsRows.push(x);
		//$.friends.add(friend.getView());
	}
	
	$.friends.setData(friendsRows);
}


function onSearch(){
	if(_searchTime){
		clearTimeout(_searchTime);
	}
	clear();	
	_searchTime = setTimeout(function(){
		_searchTime = null;
		search();
	},300);
}	

function search(){
	var val = $.search.getValue();
	if(val){
		val = val.toLowerCase();
	}
	for(var i=0;i<_friends.length;i++){
		var lowerName = _friends[i].name.toLowerCase();
		if(lowerName.indexOf(val) !== -1){
			var friend =  Alloy.createController("car/share/share_friend",{_cid:_cid,_data:_friends[i],_callBack:function(){
				_callBack();
				$.share_add_edit.close();
			}});
			$.friends.add(friend.getView());
		}
	}
}

function onCancel(){
	$.share_add_edit.close();
}

function onError(){
	
}

login.getFriends(onSuccess,onError);

function clear(){
	$.friends.removeAllChildren();
}