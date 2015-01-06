var login = require('Login');
		
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _cid = args._cid;
		var _delete = args._delete;
		var _callBack = args._callBack;

	$.share_send_to_server.open();

	var url = Alloy.Globals._search;	
	var _postData = {type:"editshare",cid:_cid,accessToken:login.getAccessToken()};
	
	if(_delete){
		_postData.uid = _data.uid;//deleting record
	}else{
		_postData.fbid = _data.id;//adding new record
	}	
		
	Ti.API.debug("adding share " + _data);
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	Ti.API.debug("share added");
 	 	 var response = JSON.parse(this.responseText);
      	 login.setCars(response.cars);
      	 _callBack();
      	 $.share_send_to_server.close();
 	 },
 	 onerror: function(e){
 		 	Ti.API.error("add share error " + e);
 	 }
 	});
 	
 	// Prepare the connection.
 		client.open("POST", url);
 	// Send the request.
 		client.send(_postData);