function IsPopOrder(pushV, popV)
{
    var stack = [];
    for(var i=0,j=0;i<pushV.length;i++){
      stack.push(pushV[i]);
      while( j<popV.length && stack[stack.length-1] === popV[0]){
          popV.shift();
          stack.pop();
      }
    }
   return stack.length===0;
    // write code here
}


console.log(IsPopOrder([1,2,3,4,5],[4,5,3,2,1]));

module.exports = {
    IsPopOrder : IsPopOrder
};

/*
解题思路: 复原整个序列进栈出栈的过程
*/