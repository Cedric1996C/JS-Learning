function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}

function Clone(pHead)
{
    if(pHead === null)
		return null;
	if(pHead.next == null)
        return new RandomListNode(pHead.label);
	var temp = pHead;
    while(pHead.next!==null){
    	var nNode = new RandomListNode(pHead.label);
    	nNode.next= pHead.next;
    	pHead.next = nNode;
    	pHead = nNode.next;
    }
    pHead = temp;
    var nHead = pHead.next;
    temp = nHead;
    while(pHead !== null){
    	nHead.random = pHead.random;
    	pHead.next = null;
    	pHead = nHead.next;
    	if(nHead.next!==null){
	    	nHead.next = pHead.next;
	    }
    }
    return temp;
}

module.exports = {
    Clone : Clone
};