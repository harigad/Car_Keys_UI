var args = arguments[0] || {};
		var animation = Titanium.UI.createAnimation();
		animation.opacity = 1;
		animation.duration = 300;
animation.addEventListener("complete",function(){
	args._callBack();
	setTimeout(function(){
		 $.points.setText("");
		 $.points.setFont({
		 	fontSize:70
		 });
		 $.points.setText("250 points earned");
		// $.title.hide();
	},500);
});
$.form_save.open(animation);
Ti.App.fireEvent("closeMenu",true);
setTimeout(function(){
	   
		var animation = Titanium.UI.createAnimation();
		animation.opacity = 0;
		animation.duration = 1000;
	
	animation.addEventListener("complete",function(){
		$.form_save.close();
	});
	$.layer.animate(animation);
},2500);