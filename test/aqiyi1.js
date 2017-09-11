var a = "1 2 3"
var num = a.split(' ');

function getLength(num){
    var newNum = num.sort(function(a,b){
    	return a-b;
    })
  	.map(function(num){
  		return parseInt(num)
  	})

  	var a=newNum[0],b=newNum[1],c=newNum[2]; 
    if( a+b > c){
    	return a+b+c
    } else {
    	return 2*(a+b)-1
    }

}

console.log(getLength(num));