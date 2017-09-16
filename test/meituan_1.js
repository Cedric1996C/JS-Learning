var num = 4;
var str = ["abbccdd","ABCde0","ABCedf012345","0988763333333"];
var result = [];
for(var i=0;i<num;i++){
    // str.push(getline());
}

function confirm(str){
	var regHead = /^[a-zA-Z]/
	var regletter = /[a-z]/
	var regLetter = /[A-Z]/
	var regNum = /[0-9]/
	for(var i=0;i<str.length;i++){
		var match=0;
		if(!regHead.test(str[i]))
			console.log("NO");
		else if(str[i].length>100||str[i].length<8)
			console.log("NO");
		else {
			if(regletter.test(str[i]))
				match++;
			if(regLetter.test(str[i]))
				match++;
			if(regNum.test(str[i]))
				match++;
			if(match>=2)
				console.log("YES")
			else 
				console.log("NO")
		}
	}
	return 
}


console.log(confirm(str))