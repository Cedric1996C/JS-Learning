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

	Node.prototype.addNode = function(callback) {
		(function add(currentNode){
			var node = new Node(null);
			node.parent = currentNode;
			currentNode.children.push(node);
			node.children = [];
			callback(node);
		})(this)
	};

	Node.prototype.removeNode = function(callback) {
		(function remove(currentNode){
			var parentNode = currentNode.parent;
			for(var i=0,children=parentNode.children;i<children.length;i++){
				if(children[i].data.firstChild.data === currentNode.data.firstChild.data ){
					callback();
					break;
				}
			};
		})(this)
	}

	return {
		Node: Node,
		Tree: Tree
	};

});