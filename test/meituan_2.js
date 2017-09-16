var num = 5
var str = "5 5 1 1 3"

function minSort(str){
	var tmp = str.split(' ')
	var max = str.split(' ').sort(function(a,b){
		return a-b;
	})
	for(var i=0;i<num;i++){
		if(tmp[i]>max[i]){
			for(var j=num-1;j>i;j--){
				if(tmp[j]==max[i]){
					var temp = tmp[j]
					tmp[j] = tmp[i];
					tmp[i] = temp;
					return tmp.join(' ');
				}
			}
		}
	}
    var temp = tmp[num-1]
    tmp[num-2] = tmp[num-1];
    tmp[num-1] = temp;
    return tmp.join(' ')
}

console.log(minSort(str));