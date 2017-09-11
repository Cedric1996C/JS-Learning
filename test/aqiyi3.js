var n = "1010 3 101010 2";
var num = n.split(' ');

function compare(num){
    var x1 = num[0];
    var k1 = parseInt(num[1]);
    var x2 = num[2];
    var k2 = parseInt(num[3]);
    if(x1.length*k1>x2.length*k2)
      return "Greater"
    else if(x1.length*k1<x2.length*k2)
      return "Less"
    else {
       var i=0;
       var nx1 = x1;
       var nx2 = x2;
       var len=x1.length*k1;
       while(i<len){
          if(i===nx1.length)
            nx1+=x1;
          else if(i===nx2.length)
            nx2+=x2;
          if(nx1[i]>nx2[i])
            return "Greater"
          else if(nx1[i]<nx2[i])
            return "Less"
          else
            i++;
       }
    }
    return "Eval"
}

console.log(compare(num));
// console.log('10'>'2')