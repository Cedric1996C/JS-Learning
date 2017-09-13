function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}

function Clone(pHead)
{
    if(!pHead)
		return null;
	var current = pHead;
    while(current){
    	var nNode = new RandomListNode(current.label);
    	nNode.next= current.next;
    	current.next = nNode;
    	current = nNode.next;
    }
    current = pHead;
   	while(current){
   		var nNode = current.next;
   		if(current.random){
   			nNode.random = current.random.next
   		}
   		current=nNode.next;
   	}
 
   	var nHead = pHead.next;
    var current = nHead;
    while(current.next){
    	pHead.next = current.next;
        current.next = pHead.next.next;
        pHead = pHead.next;
        current = current.next;
    }
    return nHead;
}

module.exports = {
    Clone : Clone
};