function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

function reConstructBinaryTree(pre, vin){
    var num = vin.length;
    //判断是否为空节点
    if(num === 0) return null;
    var node = new TreeNode(pre[0]);
    if(num>2){
        console.log(pre);
        for(var i=0;i<num;i++){
            if(node.val === vin[i]){
                node.left = reConstructBinaryTree( pre.slice(1,1+i),vin.slice(0,i) );
                node.right = reConstructBinaryTree( pre.slice(i+1,num),vin.slice(i+1,num));
                return node;
            }
        }
    } else if ( num === 2) {
        if(node.val === vin[0]){
            node.right = new TreeNode(vin[1]) } else { node.left = new TreeNode(vin[0]);}
    } 
    return node;
}

reConstructBinaryTree([1,2,3,4],[4,3,2,1]);

module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};