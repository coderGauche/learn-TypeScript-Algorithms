/**
 * 有一个单链表的 head，我们想删除它其中的一个节点 node。
   给你一个需要删除的节点 node 。你将 无法访问 第一个节点  head。
   链表的所有值都是 唯一的，并且保证给定的节点 node 不是链表中的最后一个节点。
   删除给定的节点。注意，删除节点并不是指从内存中删除它。这里的意思是：
   给定节点的值不应该存在于链表中。
   链表中的节点数应该减少 1。
   node 前面的所有值顺序相同。
   node 后面的所有值顺序相同。
   重点是： 给你一个值删掉他  但不能删 怎么实现
   思路：改变要删的值和下一个对换，在改变完之后链接下一个的下一个删除操作即可
 */

class ListNode<T> {
  val: T;
  next: ListNode<T> | null;
  constructor(val: T, next?: ListNode<T> | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null = null;
  size: number = 0;
  get length() {
    return this.size;
  }
  append(val: T) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  deleteNode(val: T): void {
    let current = this.head;
    let findNode: ListNode<T> | null = null;
    while (current) {
      if (current.val === val) {
        findNode = current;
      }
      current = current.next;
    }
    // console.log(findNode);
    findNode!.val = findNode!.next!.val;
    findNode!.next = findNode!.next!.next;
    this.size--;
  }
  traverse() {
    let list: T[] = [];
    let current = this.head;
    while (current) {
      list.push(current.val);
      current = current.next;
    }
    console.log(list.join("->"));
  }
}

const linkedList = new LinkedList();
linkedList.append(4);
linkedList.append(5);
linkedList.append(1);
linkedList.append(9);
linkedList.traverse();
// linkedList.deleteNode(1);
linkedList.traverse();
