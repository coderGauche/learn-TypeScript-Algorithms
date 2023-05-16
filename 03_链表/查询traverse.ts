/*
 * @Author: Gauche楽
 * @Date: 2023-02-22 23:58:33
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-02-23 22:47:33
 * @FilePath: /数据结构算法/03_链表/traverse.ts
 */
class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class linkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;
  get length() {
    return this.size;
  }
  append(value: T) {
    const newNode = new Node(value);
    //判断头部有没有没有直接指向新的节点
    if (!this.head) {
      this.head = newNode;
    } else {
      //获取头部
      let current: any = this.head;
      //判断有没有节点没有的话就是最后一个节点
      while (current?.next) {
        // 头部直接指向next
        current = current.next;
      }
      //最后节点指向新的节点就可以了
      current.next = newNode;
    }
    this.size++;
  }
  traverse() {
    let list: T[] = [];
    let current = this.head;
    while (current) {
      list.push(current.value);
      current = current.next;
    }
    console.log(list.length > 0 ? list.join("-") : "没有值");
  }
}

const linkeList = new linkedList<string>();
linkeList.append("aaa");
linkeList.append("bbb");
linkeList.append("ccc");
linkeList.append("ddd");

linkeList.traverse();

export {};
