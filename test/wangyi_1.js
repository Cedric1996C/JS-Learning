// var n = parseInt(readline());

function getStr(n){
    var result = "";
    if(n===0)
        return result;
    else if(n%2===0){
        result = getStr((n-2)/2)+"2";
    } else {
        result = getStr((n-1)/2)+"1";
    }
    return result;        
}

console.log(getStr(10));