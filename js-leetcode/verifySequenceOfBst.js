function VerifySquenceOfBST(sequence)
{
    var len = sequence.length;
    var root = sequence[len-1];
  	if(len===1)
        return true;
    var forward = 0;
    while(sequence[forward]<root){
        forward++;
    }
    for(var i=forward;i<len-1;i++){
        if(sequence[i]<=root)
            return false;
    }
    if(forward === 0){
        return VerifySquenceOfBST(sequence.slice(forward,len-1))
    } else if(forward === len-1){
        return VerifySquenceOfBST(sequence.slice(0,forward))
    } else {
        return VerifySquenceOfBST(sequence.slice(forward,len-1))&&VerifySquenceOfBST(sequence.slice(0,forward))
    }
    // write code here
}

VerifySquenceOfBST([4,6,7,5])
console.log(VerifySquenceOfBST([7,4,6,5]))

module.exports = {
    VerifySquenceOfBST : VerifySquenceOfBST
};