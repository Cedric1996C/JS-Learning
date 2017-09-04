/*
二进制中1的个数
*/

function NumberOf1(n)
{
 	var count = 0;
        while(n!= 0){
            count++;
            n = n & (n - 1);
         }
        return count;
    // write code here
}

console.log(NumberOf1(10));

module.exports = {
    NumberOf1 : NumberOf1
};