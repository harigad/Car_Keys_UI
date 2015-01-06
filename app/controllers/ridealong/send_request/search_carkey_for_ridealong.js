		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || "";
		var _callBack = args._callBack;

send_to_server();
$.search_carkey_for_ridealong.open();

function isMultipleUsersReturned(data){
	var len = 0;
	var id = "";
	
	for(var i=0;i<data.length;i++){
		if(data[i].id != id)
		{
			id = data[i].id;
			len++;
		}
		if(len>1){
			return true;
		}
	}
	
	return false;
}

function send_to_server(){
	var url = Alloy.Globals._search;	
	var _postData = {type:"checkin",action:"find",carkey:_data,accessToken:login.getAccessToken()};
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	 var response = JSON.parse(this.responseText);
 	 	 var multipleUsersReturned = isMultipleUsersReturned(response);
 	 	 if(response && response.length > 0 && multipleUsersReturned === false){
 	 	 	var select_car =  Alloy.createController("ridealong/send_request/select_car_for_ridealong",{_data:response,_callBack:function(success){
 	 	 		_callBack(success);
 	 	 		$.search_carkey_for_ridealong.close();
 	 	 	}});
 	 	 }else if(response && multipleUsersReturned){
 	 	 	var select_car =  Alloy.createController("ridealong/send_request/show_search_carkey_results_for_ridealong",{_data:response,_callBack:function(success){
 	 	 		//if(success){
 	 	 			_callBack(success);
 	 	 		//}
 	 	 		$.search_carkey_for_ridealong.close();
 	 	 	}});
 	 	 }else{
 	 		$.pleasewait.setText("Sorry! We could not find a user with the CarKey " + _data);
 	 		$.close_btn_label.setText("OK");
 	 	 }
 	 },
 	 onerror: function(e){
 		 	//do nothing
 	 }
 	});
 	
 	// Prepare the connection.
 		client.open("POST", url);
 	// Send the request.
 		client.send(_postData);
}


function onCancel(){
	_callBack(false);
 	$.search_carkey_for_ridealong.close();
}
