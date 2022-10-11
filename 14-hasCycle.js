
// 判断链表是否成环
function hasCycle(head) {
    if (head === null || head.next === null) return false;
    let fast = head.next;
    let slow = head;
    while (fast && fast.next) {
        if (fast === slow) return true;
        slow = slow.next;
        const next = fast.next;
        fast = next.next;
    }
    return false;
}