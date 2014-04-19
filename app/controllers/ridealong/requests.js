var login = require('Login');

draw();

function draw(){
	var hasItems = false;
	
	var notices = login.getNotices();
	if(notices.length > 0 ){
		hasItems = true;
		for(var i=0;i<notices.length;i++){
			var notice =  Alloy.createController("ridealong/notice",{_data:notices[i],_callBack:function(){
				refresh();
			}});
			
			$.main.add(notice.getView());	
			if(i<notices.length-1){
				$.main.add(Ti.UI.createView({height:1,backgroundColor:"#fff",opacity:0.2}));
			}
		}
	}
	
	var requests = login.getRequests();
	if(requests.length > 0 ){
		hasItems = true;
		for(var i=0;i<requests.length;i++){
			var request =  Alloy.createController("ridealong/request",{_data:requests[i],_callBack:function(){
				refresh();
			}});
			$.main.add(request.getView());	
			if(i<requests.length-1){
				$.main.add(Ti.UI.createView({height:1,backgroundColor:"#fff",opacity:0.2}));
			}
		}
	}
	
	if(hasItems){
		$.main.setTop(30);
	}else{
		$.main.setTop(0);
	}
}

function refresh(){
	clear();
	draw();
}

function clear(){
	var len = $.main.children.length;
	for(var i=0;i<len;i++){
			$.main.remove($.main.children[0]);
	}
}
