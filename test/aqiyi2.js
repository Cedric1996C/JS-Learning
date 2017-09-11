var a = "GGGGR";

function getLength(num){
    var zero = 0;
    var one = 0;
    for(var i=0;i<num.length;i++){
      if(num[i]==='R')
          zero++;
    }
    var result = zero;
    for(var i=0;i<num.length;i++){
      if(num[i]==='R')
        zero--;
      else 
        one++;
      result = Math.min(result,zero+one)
    }
    return result;
}

console.log(getLength(a));