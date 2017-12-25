function MoreThanHalfNum_Solution(numbers)
{
    var count = 0;
    if(numbers.length==1)
        return numbers[0]
    var temp = numbers[0];
    count++;
    for(var i=1;i<numbers.length;i++){
        (numbers[i]==temp)? count++ : count--;
        if(count<0){
            temp = numbers[i];
            count=0;
        }
    }
    if(count>0){
        count=0;
        for(var i=0;i<numbers.length;i++){
            if(numbers[i]==temp)
                count++;
        }
        if(2*count>=numbers.length)
            return temp;
        else 
            return 0;
    }
    return 0;
    // write code here
}

var test = [1,2,3,2,2,2,5,4,2]
console.log(MoreThanHalfNum_Solution(test))

module.exports = {
    MoreThanHalfNum_Solution : MoreThanHalfNum_Solution
};