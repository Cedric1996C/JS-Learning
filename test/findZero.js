function findZero(nums){
    let arr = [...new Set(nums)]
    let pos = [];
    let neg = [];
    arr.forEach( num => {
        num>0 ? pos.push(num):neg.push(num);
    })
    pos.sort((a,b) => b-a);
    neg.sort((a,b) => a-b);
    //获得两个数组，分别存储正数，非正数

    let result = [];
    for(var i=0;i<pos.length;i++){
        findPair(pos, neg, i, result);
    }
    return result;
}

//找到一对数，其和为pos[i]的相反数。有序数组，通过设计算法是能减少计算量
function findPair(pos, neg, i, result){
    let temp = pos.slice(i+1);
    let total = -pos[i];
    
}