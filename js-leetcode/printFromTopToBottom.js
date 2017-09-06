var tree = require('./tree');

function PrintFromTopToBottom(root){
     var queue = [];
     if(root!==null)
        queue.push(root);
     else
        return;
     while(queue.length>0){
         var root = queue[0];
         if(root.left!==null)
             queue.push(root.left);
         if(root.right!==null)
             queue.push(root.right);
         console.log(root.val);
         queue.shift();
     }  
    // write code here
}

var nroot = tree.tree([10,6,14,4,8,12,16]);
PrintFromTopToBottom(nroot);