var login = require('Login');
var mycars =  Alloy.createController("mycars/mycars");
var friends =  Alloy.createController("friends/friends");

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
			//if(i<requests.length-1){
				$.main.add(Ti.UI.createView({height:1,backgroundColor:"#fff",opacity:0.2}));
			//}
		}
	}
	
	//----------------------MENU
	/*hasItems = true;
			var menuA =  Alloy.createController("ridealong/home_menu_item",{_data:{},_callBack:function(){
				mycars.open();
			}});
			$.main.add(menuA.getView());	
			$.main.add(Ti.UI.createView({height:1,backgroundColor:"#fff",opacity:0.2}));
			var menuB =  Alloy.createController("ridealong/home_menu_item",{_data:{},_callBack:function(){
				friends.open();
			}});
			$.main.add(menuB.getView());*/
	//---------------------END MENU
	
	
	
	
	if(hasItems){
		$.main.setTop(0);
		$.main.setBottom(0);
	}else{
		$.main.setTop(-5);
		$.main.setBottom(0);
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
