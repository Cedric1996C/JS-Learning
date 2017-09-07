var tree = require('./tree').tree;

function FindPath(root, expectNumber)
{
	var result = [];
    if(root === null)
        return []
    if(root.val === expectNumber && judge(root)){
        result.push([root.val]);
    } else if(root.val < expectNumber){
        expectNumber -= root.val;
        if(root.left!==null){
			var path = FindPath(root.left,expectNumber);
            for(var i=0;i<path.length;i++){               
                path[i].unshift(root.val);
            }
            for(var i=0;i<path.length;i++){
                result.push(path[i]);
            }
        }
        if(root.right!==null){
            var path = FindPath(root.right,expectNumber);
            for(var i=0;i<path.length;i++){
                 path[i].unshift(root.val);
                // path[i].unshift(root.val);
            }
            for(var i=0;i<path.length;i++){
                result.push(path[i]);
            }
        }
    }
    return result;   
    // write code here
}

function judge(root){
    return root.left===null&&root.right===null;
}

// console.log(new tree([10,5,12,4,7]))
console.log(FindPath(new tree([10,5,12,4,7]),22))

module.exports = {
    FindPath : FindPath
};