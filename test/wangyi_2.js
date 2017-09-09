function getNum(str){
	var result = 0.00;
	var num = 0.00;
	var index = 1;
	var len = str.length;
	for(var i=0;i<len-1;i++){
		if(str[i]===str[i+1]){
			index++;
		} else {
			// console.log(index)
			result+=index;
			index = 1;
			num++;
		}
	}
	if(str[len-2]===str[len-1]){
		result+=index;
		index = 1;
		num++;
	} else {
		result++;
		num++;
	}
	// console.log(result);
	// console.log(num);
	return (result/num).toFixed(2);
}

console.log(getNum("aaabbaaac"));