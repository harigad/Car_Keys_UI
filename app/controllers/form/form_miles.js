var args = arguments[0] || {};
$.question.setText(args._ask.name);
$.form_miles.open();

function onWindowFocus(){
	$.plate.focus();
}

function onCancel(){
	$.form_miles.close();
}

function onNext(){
  var miles = $.plate.getValue();
  args._callBack(miles);	
}

function help(){
	
}

function onFocus(e){
	eval("$." + e.source.id + "_label").setOpacity(.6);
	
	if(e.value.length===0){
		eval("$." + e.source.id + "_label").setText(e.source.hint);
	}else{
		eval("$." + e.source.id + "_label").setText(""); 
	}
}

function onBlur(e){
	eval("$." + e.source.id + "_label").setOpacity(0);
}

function onChange(e){
	if(e.value.length===0){
		eval("$." + e.source.id + "_label").setText(e.source.hint);
	}else{
		eval("$." + e.source.id + "_label").setText(""); 
	}
}

exports.close = function(){
	$.form_miles.close();
};