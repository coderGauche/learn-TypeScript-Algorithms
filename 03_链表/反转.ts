/*
 * @Author: Gauche楽
 * @Date: 2023-03-07 18:03:56
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-09 15:07:46
 * @FilePath: /数据结构算法/03_链表/反转.ts
 */
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
    //迭代反转四部曲
    // 1.让current节点指向下一个节点
    //  目的：保留下一个节点的引用，可以拿到并且不会销毁
    // 2.改变head当前的指向的节点 指向newHead
    //  目的：对于第一个节点来说指向newHead就是指向的null
    // 3.让newHead指向下一个节点
    //  目的：下一次遍历时第二步操作可以让下一个节点指向第一个节点
    // 4.让head移向下一个节点指向current

    let list: T[] = [];
    let current = this.head;
    let newHead: ListNode<T> | null = null;
    while (current) {
      const newCurrent = current.next;
      current.next = newHead;
      newHead = current;
      current = newCurrent;
    }
    // console.log(newHead);

    while (newHead) {
      list.push(newHead.val);
      newHead = newHead.next;
    }
    console.log(list.join("->"));
  }
  traverseDIGUI() {
    let head = this.head;
    function traverse(head) {
      //递归反转
      if (head === null || head.next === null) return this.head;
      const newHead = traverse(head?.next ?? null);
      //第一次来到这里的时候，是倒数第二个节点
      head.next.next = head;
      head.next = null;
      return newHead;
    }
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

export {};
