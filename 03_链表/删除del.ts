/*
 * @Author: Gauche楽
 * @Date: 2023-02-24 00:03:51
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-02-25 00:45:58
 * @FilePath: /数据结构算法/03_链表/删除del.ts
 */
/*
 * @Author: Gauche楽
 * @Date: 2023-02-22 23:58:33
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-02-24 00:22:31
 * @FilePath: /数据结构算法/03_链表/删除del.ts
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
  insert(value: T, position: number): boolean {
    // if (position < 0 || position > this.size) {
    //   throw new Error(`传入的${position}越界，请检查`);
    // }
    if (position < 0 || position > this.size) return false;
    //根据value拿到新节点
    const newNode = new Node(value);
    //判断是否需要插入头部
    if (position === 0) {
      //头部   过程是这样的  创建的新节点的next先指向头部的节点  然后头部节点指向新的节点达到链接状态
      newNode.next = this.head;
      this.head = newNode;
    } else {
      //需要找到前一个和当前的节点 进行链接  新的节点先指向当前节点  然后前一个节点指向新的节点
      //先拿到第一个
      let current = this.head; //去哪当下一个点
      //这是先拿到为空的 为了拿到前一个节点
      let previous: Node<T> | null = null;
      //用来找到我需要的前一个
      let index = 0;
      //判断index在是否在position内  并且保证current（防止报错）
      while (index++ < position && current) {
        //这一步做的是拿到根据positio找到前一个节点  这里就说明了去拿positio的前一个节点
        previous = current;
        //这一步为了继续循环下一个节点
        current = current.next;
      }
      //停止循环是找到当前节点   新的节点先指向当前节点
      newNode.next = current;
      //停止循环是找到前一个节点previous   前一个节点指向新的节点
      previous!.next = newNode;
    }
    this.size++;
    return true;
  }
  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size) return null;
    let current = this.head;
    if (position === 0) {
      // this.head = this.head?.next ?? null;
      this.head = current!.next;
    } else {
      //   let current = this.head; //去哪当前节点
      let index = 0;
      let previous: Node<T> | null = null;
      while (index++ < position && current) {
        //这一步做的是拿到根据positio找到前一个节点  这里就说明了去拿positio的前一个节点
        previous = current; //前一个节点
        //这一步为了继续循环下一个节点
        current = current.next; //下一个节点
      }
      previous!.next = current!.next;
    }
    this.size--;
    return current!.value;
  }
}

const linkeList = new linkedList<string>();
linkeList.append("aaa");
linkeList.append("bbb");
linkeList.append("ccc");
linkeList.append("ddd");

linkeList.insert("dddcc", 0);
linkeList.traverse();
linkeList.insert("dddcc1", 2);
linkeList.insert("dddcc2", 6);

linkeList.traverse();
linkeList.removeAt(0);
linkeList.removeAt(0);
linkeList.traverse();

console.log(linkeList.removeAt(2));
linkeList.traverse();
console.log(linkeList.removeAt(3));

linkeList.traverse();

export {};
