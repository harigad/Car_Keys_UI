		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;
		
		debugger;
$.photo.setBackgroundImage(_data.photo);
$.name.setText(_data.name);
$.desc.setText("has accepted your ridealong request");

function onClose(){
	send_to_server();
	var notices = login.getNotices();
	
	for(var i=0;i<notices.length;i++){
		if(notices[i].checkin_id == _data.checkin_id){
			notices.splice(i,1);
			break;
		}
	}
	login.setNotices(notices);
	
				var animation = Titanium.UI.createAnimation();
					animation.opacity = 0;
					animation.duration = 1500;
					var animationHandler = function() {
  						animation.removeEventListener('complete',animationHandler);
  					 _callBack();	
					};
					animation.addEventListener('complete',animationHandler);
					$.main.animate(animation);
}


function send_to_server(){
	var url = "http://flair.me/carkey/search.php";	
	var _postData = {type:"checkin",action:"seen",checkin_id:_data.checkin_id,accessToken:login.getAccessToken()};
	
 	var client = Ti.Network.createHTTPClient({ 		
 	 onload : function(e) {
 	 	 //do nothing
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

