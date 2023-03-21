/*
 * @param pHead ListNode类
 * @param x int整型
 * @return ListNode类
 */
function deNode(pHead, x) {
	// write code here
  const dummy = new ListNode(-1, pHead)
  for (let p = dummy; p.next !== null; p = p.next) {
    if (p.next.val === x) {
      p.next = p.next.next
      break
    }
  }
  return dummy.next
}
