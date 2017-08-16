define(function (){

	function Node(data){
		this.data = data;
		this.parent = null;
		this.children = [];
	}

	function Tree(data){
		var node = new Node(data);
		this.root = node;
	}

	Tree.prototype.travelDF = function(callback) {
		(function recurse(currentNode){
			for(var i=0;i<currentNode.children.length;i++){
				recurse(currentNode.children[i]);
			}
			callback(currentNode);
		})(this.root);
	};

	Tree.prototype.travelBF = function(callback) {
		var queue = [];

		queue.push(this.root);
		currentTree = queue.shift();
		while(currentTree){
			for(var i=0;i<currentTree.children.length;i++){
				queue.push(currentTree.children[i]);
			}
			callback(currentTree);
			currentTree = queue.shift();
		}
	};

	return {
		Node: Node,
		Tree: Tree
	};

});