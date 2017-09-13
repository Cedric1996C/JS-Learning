 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

function Convert(pRootOfTree)
{
	var arr = midRangeNoRecursion(pRootOfTree);
	for(var i=0;i<arr.length-1;i++){
		arr[i].right = arr[i+1]
		arr[i+1].left = arr[i]
	}
	return arr[0];
    // write code here
}

function midRange(root){
	var arr = []
	if(!root)
		return arr;
	arr.push(root);
	if(root.left){
		arr = midRange(root.left).concat(arr);
	}
	if(root.right){
		arr = arr.concat(midRange(root.right));
	}
	return arr;	
}

function midRangeNoRecursion(root){
	var arr = []
	var stack = []
	if(!root)
		return arr;
	stack.push(root)
	while(stack[0]){
		if(stack[0].left){
			stack.push(stack[0].left)
			continue;
		} 
		arr.push(stack[0]);
		if(stack[0].right){
			stack.shift();
			stack.unshift(stack[0].right)
		}
	}
	return arr
}

module.exports = {
    Convert : Convert
};