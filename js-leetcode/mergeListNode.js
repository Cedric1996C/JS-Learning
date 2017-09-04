/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    var nHead = null;
    var current = null;
    if(pHead1===null){
        nHead = pHead2;
    } else if(pHead2===null){
        nHead = pHead1;
    } else {
        nHead = pHead1.val>=pHead2.val? pHead2 : pHead1;
        current = nHeadl
        while( pHead1!==null && pHead2!==null){
            if(pHead1.val>=pHead2.val){
                current.next = pHead2;
                current = current.next;
                pHead2 = pHead2.next;
            } else {
                current.next = pHead1;
                current = current.next;
                pHead1 = pHead1.next;
            }
        }
    }
    return nHead;
    // write code here
}
module.exports = {
    Merge : Merge
};