function node(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

function tree(array){
	var nodes = []
	var base = 1;
	var treeRoot = null;
	if(array.length>0){
		treeRoot = new node(array[0]);
		nodes.push(treeRoot);
		array.shift();
	} else 
		return null;
	while(array.length>0){
		if(nodes.length === base){
			var len = base;
			base = 0;
			for(var i=0;i<len;i++){
				if(array[0]==='#'||array[0]===undefined){
					nodes[0].left = null
				} else {
					nodes[0].left = new node(array[0]);
					base++;
					nodes.push(nodes[0].left);
				}
				array.shift();
				if(array[0]==='#'||array[0]===undefined){
					nodes[0].right = null
				} else {
					nodes[0].right = new node(array[0]);
					base++;
					nodes.push(nodes[0].right);
				}
				array.shift();
				nodes.shift();
			}
			continue;
		}
		nodes.push(new node(array[0]))
		array.shift();
	}
	// console.log(treeRoot);
	return treeRoot;
}

module.exports = {
	tree:tree
}
