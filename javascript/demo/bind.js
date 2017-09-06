Function.prototype.bind = function(){
	var fn = this;
	var context = arguments[0];
	var args = Array.call(arguments,1);
	return function(){
		return fn.apply(context,args);
	}
}


var obj = {
	m:2
}

var newAdd = add.bind(obj);
var demo = newAdd()+5;

module.exports = {
	newAdd:newAdd
}