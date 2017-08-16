require(['tree'], function(tree){
　　　　// some code here
	var buttons = document.getElementsByTagName('input');
	var nodes = [];
	var treeRoot = init();

	function changeColor(node){
		node.setAttribute('class','chosen');
		setTimeout(function(){
			node.removeAttribute('class');
		},500);
	}

	function travel(){
		var i=0;
		var tra = setInterval(function(){
			if(i<nodes.length){
				changeColor(nodes[i++]);
			} else {
				clearInterval(tra);
			}
		},500)
	}

	function initTree(temp){
		var dom = temp.data;
		if(dom !== undefined && dom.hasChildNodes()){
			for(var children = dom.children,i=0;i<children.length;i++){
				var node = new tree.Node(children[i]);
				node.parent = temp;
				temp.children.push(node);
				initTree(node);
			}
		} 
	}

	function init(){
		var rootNode = document.getElementsByTagName('div')[1];
		var localTree = new tree.Tree(rootNode);	
		initTree(localTree.root);
		return localTree;
	}

	buttons[0].onclick = function(){
		nodes = [];
		treeRoot.travelDF(function(node) {
   			 nodes.push(node.data)
		});
		travel();
	}

	buttons[1].onclick = function(){
		// var treeRoot = init();
		nodes = [];
		treeRoot.travelBF(function(node) {
			 nodes.push(node.data)
		});
		travel();
	}

	buttons[3].onclick = function(){
		var keyword = buttons[2].value;
		console.log(keyword);
	}

});
