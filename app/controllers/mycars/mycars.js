var login = require('Login');

init();
function init(){
	var cars = login.getCars(); 

	if(cars.length > 0 ){
		build(cars);	
	}else{
		var _new = {logo:"common/blue_car.png",model:"ADD NEW RIDE",new:true};
		var car =  Alloy.createController("car/newcar",{_editable:true,_data:_new,_callBack:function(){
			refresh();
		}});
		$.main.add(car.getView());
	}

}

function build(cars){
	for(var i=0;i<cars.length;i++){
		var car =  Alloy.createController("car/car",{_editable:true,_data:cars[i],_callBack:function(){
			refresh();
		}});
		$.main.add(car.getView());
	}
}

function refresh(){
	try{
	$.main.removeAllChildren();
	}catch(e){}
	init();
}
