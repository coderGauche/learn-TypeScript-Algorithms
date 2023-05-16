//node类   节点信息
class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node<T> | null = null; //链表中的第一个节点
  size: number = 0;
  get length() {
    return this.size;
  }
  private getNode(position: number): Node<T> | null {
    let current = this.head;
    let index = 0;
    while (index++ < position && current) {
      current = current?.next;
    }
    return current;
  }
  //追加操作
  append(value: T) {
    const newNode = new Node(value); //要追加的节点
    // 两种情况
    // 第一种就是链表本身就是空的时候，要去加唯一的节点
    // 第二种就是链表本身不为空的时候，要去追加节点
    // 我们这里要做的就是判断没有头部节点看他链表为不为空
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      // 判断有没有新的节点为了找到尾部节点
      while (current.next) {
        // 继续循环
        current = current.next;
      }
      // 没有指向下个节点话就证明他是最后一个
      // 他的下一个指向新的节点
      current.next = newNode;
    }
    this.size++;
  }
  //遍历节点
  traverse() {
    let list: T[] = [];
    let current = this.head;
    while (current) {
      // console.log(current);
      list.push(current!.value);
      // 继续循环
      current = current!.next;
    }
    console.log(list.join("->"));
  }
  insert(value: T, position: number): boolean {
    //排除边界问题
    if (position < 0 || position > this.size) return false;
    //证明我要插入的是第一个
    const newNode = new Node(value); //要追加的节点
    let current = this.head;
    let previous: Node<T> | null = null;
    let index = 0;
    // console.log(current);
    if (position === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      previous = this.getNode(position - 1);
      newNode.next = previous!.next;
      previous!.next = newNode;
    }
    this.size++;
    return true;
  }
  removeAt(position: number): T | null {
    if (position < 0 || position > this.size) return null;
    let current = this.head;
    let previous: Node<T> | null = null;
    if (position === 0) {
      this.head = current!.next;
    } else {
      previous = this.getNode(position - 1);
      previous!.next = previous!.next!.next;
    }
    this.size--;
    return current!.value;
  }
  get(position: number): T | null {
    if (position < 0 || position >= this.size) return null;

    return this.getNode(position)!.value;
  }
  update(value: T, position: number) {
    const newNode = new Node(value); //要追加的节点
    let current = this.head;
    let index = 0;
    let previous: Node<T> | null = null;
    while (index++ < position && current) {
      previous = current;
      current = current!.next;
    }
    previous!.next = newNode;
    newNode.next = current!.next;
  }
  indexOf(value: T): number {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  remove(value: T) {
    this.removeAt(this.indexOf(value));
    this.size--;
  }
}

const newLinkedList = new LinkedList<string>();
newLinkedList.append("aaa");
newLinkedList.append("bbb");
newLinkedList.insert("ccc", 0);
newLinkedList.traverse();
newLinkedList.insert("ccc1", 2);
newLinkedList.traverse();

newLinkedList.removeAt(0);
newLinkedList.traverse();
newLinkedList.removeAt(2);
newLinkedList.traverse();
console.log(newLinkedList.get(0), "get");
newLinkedList.update("ccc", 1);
newLinkedList.traverse();
console.log(newLinkedList.indexOf("aaa"));
newLinkedList.remove("ccc");
newLinkedList.traverse();
export {};
