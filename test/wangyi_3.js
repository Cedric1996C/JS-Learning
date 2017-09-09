var str = "(())()"

function getArray(str){
	var arr = [];
	for(var i=0;i<str.length;i++){
		if(str[i]==='(')
			arr.push(0)
		else if(str[i]===')')
			arr.push(1)
	}
	return arr;
}

function getNum(arr){
	var len = arr.length;
	var match = 0;
	var part = 0;
	for(var i=1;i<len;i++){
		if(arr===1)
			match++;
		else
			match--;
		if(match === 0)
			part++;
	}
	return part;
}

var arr = getArray(str);
console.log(getNum(arr));