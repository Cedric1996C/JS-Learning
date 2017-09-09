var str = "(()())"
var num = [];
for(var i=0;i<str.length;i++){
    if(str[i]==='(')
        num.push(0);
    else if(str[i]===')')
        num.push(1);
}


function getnum(num){
	var result = 1;
	var t = 0;
	for(var i=0;i<num.length;i++){
		if(num[i]===0)
			result *= ++t;
		else 
			t--; 
	}
	return result;
}


console.log(getnum(num));
console.log(getNum(num));