var login = require('Login');
var friends;
var len = 2;

exports.init = function(moid){
	friends = login.getFriendsWithModel(moid);
	
	if(friends.length <= len){
		draw(0,friends.length);
	}else{
		draw(0,len);
		$.show_all.setVisible(true);
		$.show_all.setHeight("Ti.UI.SIZE");
		$.show_all_label.setText("show all " + friends.length + " friends");
	}
	
};

function show_all(){
	draw(len,friends.length);
	$.show_all.setVisible(false);
	$.show_all.setHeight(0);
}

function draw(start,end){
	for(var i=start;i<end;i++){
		var friend =  Alloy.createController("model/model_friend",{_data:friends[i]});
		$.list.add(friend.getView());	
		
		if(i<friends.length-1){
				$.list.add(Ti.UI.createView({height:1,backgroundColor:"#eee"}));
		}
		
	}
}
