var args = arguments[0] || {};


$.logo_image.setImage("logos/48/" + args._car.logo);
$.model.setText(args._car.model);

function onClick(){
	args._callBack(args._car);
}
