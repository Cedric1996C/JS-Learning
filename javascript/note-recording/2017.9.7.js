/*
subType: 子类型构造函数
superType: 超类型构造函数
*/
function inheritPrototype(subType,superType){
	var prototype = object(superType.prototype)//超类的原型副本
	prototype.constructor = subType;//重新constructor属性：因为重写原型而丢失
	subType.prototype = prototype;
}