var _scroll,_callBack;
var _status;

_status = false;

exports.init = function(scroll,callBack,optionalOverlay){
	_scroll = scroll;
	_callBack = callBack;	
	
	_scroll.addEventListener("scroll",function(e){
		Ti.API.debug(e.y);
	if(optionalOverlay){
			if(e.y < -10 && e.dragging){
				optionalOverlay.setOpacity(0.1);
			}else{
				optionalOverlay.setOpacity(1.0);
			}
	}
	
	if(e.dragging){
		if (e.y <= -80 && _status === false) {
				$.txt.setColor("#fff");
          		$.txt.setText("release to refresh");
          		_status = true;
    	}else if (e.y > -80 && _status === true) {
    			$.txt.setColor("#aaa");
          		$.txt.setText("pull to refresh");
          		_status = false;	
        }
     }
     
	});
	
	_scroll.addEventListener('dragend',function(e){
		if(optionalOverlay){
			optionalOverlay.setOpacity(1.0);
		}		
		
		if(_status === true){
			_callBack();
		}
				$.txt.setColor("#aaa");
          		$.txt.setText("pull to refresh");
          		_status = false;	
	});	
};