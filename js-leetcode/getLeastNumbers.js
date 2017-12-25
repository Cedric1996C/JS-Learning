function GetLeastNumbers_Solution(input, k)
{
    if(input.length<k)
        return 0
    var arr = [];
    arr.push(input[0])
    for(var i=1;i<k;i++){
        if(input[i]>arr[i-1])
            arr.push(input[i])
        else
            arr.unshift(input[i])
    }
    if(input.length == k)
        return arr
    for(var i=k;i<input.length;i++){
        if(input[i]>=arr[k-1]){
            // console.log(input[i])
        }
        else{
            var temp = input[i]
            console.log(arr, i, temp)
            for(var j=0;j<k-1;j++){
                if(arr[j]<temp && arr[j+1]>=temp){
                    arr.pop()
                    arr = arr.slice(0,j+1).concat([temp],arr.slice(j+1))
                    break;
                }
            }
        }
    }
    return arr;
    // write code here
}

console.log(GetLeastNumbers_Solution([4,5,1,6,2,7,3,8],8))

module.exports = {
    GetLeastNumbers_Solution : GetLeastNumbers_Solution
};