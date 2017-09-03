function copyObject(org){
	var copy = Object.create(Object.getPrototypeOf(org));
	copyProperties(copy,org);
	return copy;
}

function copyProperties(copy,org){
	Object
	.getOwnPropertyNames(org)
	.forEach(function(pro){
		var value = Object.getOwnPropertyDescriptor(org,pro);
		Object.defineProperty(copy,pro,value);
	});
	return copy;
}

var module = (function(){
	var _count = 0;
	var m1 = function(){
		_count++;
	}

	var m2 = function(){
		_count--;
	} 

	return {
		m1:m1,
		m2:m2
	};
})();