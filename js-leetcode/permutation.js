function Permutation(str)
{
	var arr = [];
	var perm = str.split('')
				  .sort(function(a,b){
				  	 return a-b;
				  })
				  .join('');
	if(perm.length>0)
		arr.push(perm);
	var len = perm.length-1;
	var i=0;
	while(i<len){
		if(perm[len-i]>perm[len-1-i]){
			var expoint = len-1-i;
			// console.log(expoint,perm)
			perm = exchange(expoint,perm.split(''));
			arr.push(perm);
			i = -1;
		}
		i++;
	}
	return arr;
    // write code here
}

function exchange(point,perm){
	var min = point+1;
	for(var i=point+2;i<perm.length;i++){
		if(perm[i]>perm[point]){
			min = perm[i]<perm[min]? i:min
		}
	}
	var temp = perm[point];
	perm[point] = perm[min];
	perm[min] = temp;
	var arr = perm.slice(point+1,perm.length).reverse();
	perm  = perm.slice(0,point+1).concat(arr).join('')
	return perm;
}

console.log(Permutation("1324"))

module.exports = {
    Permutation : Permutation
};