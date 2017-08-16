var buttons = document.getElementsByTagName('input');
var nodes = [];

function Node(dom,left,right){
	this.dom = dom
	this.left = left;
	this.right = right;
}

function changeColor(node){
	node.setAttribute('class','chosen');
	setTimeout(function(){
		node.removeAttribute('class');
	},1000);
}

function travel(){
	var i=0;
	var tra = setInterval(function(){
		if(i<nodes.length){
			changeColor(nodes[i++]);
		} else {
			clearInterval(tra);
		}
	},1000)
}

function forward_tra(node){

	nodes.push(node.dom);
	if(node.left != null){
		forward_tra(node.left);
	}
	if(node.right != null){
		forward_tra(node.right);
	}
}

function middle_tra(node){
	if(node.left != null){
		middle_tra(node.left);
	}
	nodes.push(node.dom);
	if(node.right != null){
		middle_tra(node.right);
	}
}

function back_tra(node){
	if(node.left != null){
		back_tra(node.left);
	} 
	if(node.right != null) {
		back_tra(node.right);
	} 
	nodes.push(node.dom);
}

function findKey(word) {

}

function insert(temp){
	var node;
	if(temp !== undefined && temp.hasChildNodes()){
		var children = temp.children;
		node = new Node(temp,insert(children[0]),insert(children[1]));
	} else {
		node = new Node(temp,null,null);
	}
	return node;
}

window.onload = function(){

	var rootNode = document.getElementsByTagName('div')[1];
	//二叉树的头结点
	var temp = insert(rootNode);

	buttons[0].onclick = function(){
		forward_tra(temp);
		travel();
	}

	buttons[1].onclick = function(){
		middle_tra(temp);
		travel();
	}

	buttons[2].onclick = function(){
		back_tra(temp);
		travel();
	}

}