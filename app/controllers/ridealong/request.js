		var login = require('Login');
		var args = arguments[0] || {};
		var _data = args._data || {};
		var _callBack = args._callBack;
		
$.photo.setBackgroundImage(_data.photo);
$.name.setText(_data.name);

function onClick(){
			if(_callBack){
				var accept =  Alloy.createController("ridealong/accept",{_data:_data,_callBack:function(){
					var animation = Titanium.UI.createAnimation();
					animation.opacity = 0;
					animation.duration = 1500;
					var animationHandler = function() {
  						animation.removeEventListener('complete',animationHandler);
  					 _callBack();	
					};
					animation.addEventListener('complete',animationHandler);
					$.main.animate(animation);
				}});
			}
}
