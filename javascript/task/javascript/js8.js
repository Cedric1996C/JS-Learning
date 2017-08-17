require(['tree'], function(tree){
　　　　// some code here
	var buttons = document.getElementsByTagName('input');
	var nodes = [];
	var treeRoot = init();

	function changeColor(node,time){
		node.setAttribute('class','chosen');
		setTimeout(function(){
			node.removeAttribute('class');
		},time);
	}

	function travel(time){
		var i=0;
		var tra = setInterval(function(){
			if(i<nodes.length){
				changeColor(nodes[i++],time);
			} else {
				clearInterval(tra);
			}
		},time)
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

	var keywordSearch = function(callback,keyword,time){
		nodes = [];
		var results = [];
		treeRoot.travelDF(function(node) {
   			 nodes.push(node.data)
		});
		var i=0;
		var count=0;
		var word = new RegExp(keyword);
		var tra = setInterval(function(){
			if(i<nodes.length){
				if(nodes[i].firstChild.data.match(word)){
					results.push(nodes[i]);
				}
				changeColor(nodes[i++],time);
			} else {
				clearInterval(tra);
				callback(results);
			}
		},time)
	}

	buttons[0].onclick = function(){
		nodes = [];
		treeRoot.travelDF(function(node) {
   			 nodes.push(node.data)
		});
		travel(500);
	}

	buttons[1].onclick = function(){
		nodes = [];
		treeRoot.travelBF(function(node) {
			 nodes.push(node.data)
		});
		travel(500);
	}

	buttons[3].onclick = function(){
		var keyword = buttons[2].value;
		if (keyword && keyword!='') {
			keywordSearch(function(result){
				if(result.length > 0){
					result.forEach(function(node){
						node.setAttribute('class','chosen');
					})
				} else {
					alert('没有匹配到符合的结果！');
				}
			},keyword,300);
		}
	}

});
