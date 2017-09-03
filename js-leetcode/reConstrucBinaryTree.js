function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

function reConstructBinaryTree(pre, vin){
    var num = vin.length;
    var node = new TreeNode(pre[0]);
    console.log(pre);
    if(num>2){
        for(var i=0;i<num;i++){
            if(node.val === vin[i]){
                node.left = reConstructBinaryTree( pre.slice(1,i),vin.slice(0,i) );
                node.right = reConstructBinaryTree( pre.slice(i+1,num-i-1),vin.slice(i+1,num-i-1));
                return node;
            }
        }
    } else if ( num === 2)
    {
        if(node.val === vin[0]){
            node.right = vin[1] } else { node.left = vin[0];}
    }
    return node;
}

module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};