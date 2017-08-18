require(['tree'], function(tree){
　　　　// some code here
	var buttons = document.getElementsByTagName('input');
	var nodes = [];
	var treeRoot = init();
	var hasChosen = false;

	function changeColor(e){
		if(hasChosen){
			for(var i=0;i<nodes.length;i++){
				nodes[i].data.removeAttribute('class');
			}
			hasChosen = false;
		} 
		if(!this.hasAttribute('class')){
			this.setAttribute('class','chosen');
			hasChosen = true;
		}
		e.stopPropagation();		
	}

	function initTree(temp){
		var dom = temp.data;
		if(dom !== undefined && dom.hasChildNodes()){
			dom.onclick = changeColor;
			for(var children = dom.children,i=0;i<children.length;i++){
				var node = new tree.Node(children[i]);
				nodes.push(node);
				node.parent = temp;
				temp.children.push(node);
				initTree(node);
			}
		} 
	}

	function init(){
		nodes = [];
		var rootNode = document.getElementsByTagName('div')[1];
		var localTree = new tree.Tree(rootNode);
		nodes.push(localTree.root);	
		initTree(localTree.root);
		return localTree;
	}

	buttons[0].onclick = function(){
		var dom = nodes.filter(function(node){
			return node.data.hasAttribute('class')
		})
		if(dom.length>0){
			dom[0].removeNode(function(){
				dom[0].data.remove();
				treeRoot = init()
			});
		}
	}

	buttons[2].onclick = function(){
		var dom = nodes.filter(function(node){
			return node.data.hasAttribute('class')
		})
		var newWord = buttons[1].value;
		if(dom.length>0 && newWord!=''){
			dom[0].addNode(function(newNode){
				//在DOM树种创建新的节点
				var newElement = document.createElement('div');
				newElement.innerHTML = newWord;
				newElement.onclick = changeColor;

				//将新创建的节点绑定到 Tree 中
				newNode.data = newElement;
				nodes.push(newNode);
				dom[0].data.appendChild(newElement);
			})
		}
	}

});
