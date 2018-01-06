function  mergeSort(arrA, arrB){
    if(arrA.length<1 && arrB.length>0)
        return arrB;
    else if(arrB.length<1 && arrA.length>0)
        return arrA;

    var result = [];
    var a = 0, b = 0;
    while(a<arrA.length && b<arrB.length){
        if(arrA[a]<arrB[b]){
            result.push(arrA[a]);
            a++;
        } else {
            result.push(arrB[b])
            b++;
        }
    }
    if(a === arrA.length){
        console.log(b, arrB.slice(b))
        result = result.concat(arrB.slice(b))
    } else {
        result = result.concat(arrA.slice(a))
    }
    return result;
}

var arrA = [1,2,3,4,5]
var arrB = [2,4,5,6,7]
console.log(mergeSort(arrA, arrB));