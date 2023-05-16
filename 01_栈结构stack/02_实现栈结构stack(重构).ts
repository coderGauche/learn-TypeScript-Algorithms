/*
 * @Author: Gauche楽
 * @Date: 2023-02-08 00:10:27
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-02-09 00:10:44
 * @FilePath: /数据结构算法/01_栈结构stack/02_实现栈结构stack(重构).ts
 */

import Istack from "./IStack";

//封装一个栈
class ArrayStack<T = any> implements Istack<T> {
  //定一个数组（链表），用于存放元素
  private data: T[] = []; //私有的

  push(element: T): void {
    this.data.push(element);
  }

  //将栈顶元素弹出栈（返回出去，并且从栈顶移除掉）
  pop(): T | undefined {
    return this.data.pop();
  }

  //keep方法：查看栈顶元素
  peek(): T {
    return this.data[this.data.length - 1];
  }

  //isEmpty 判断栈是否为空
  isEmpty() {
    return this.data.length === 0;
  }

  size() {
    return this.data.length;
  }
}

class LinkStack {}

//创建stack的示例
// const stack1 = new ArrayStack();
// stack1.push("aaa");
// stack1.push("bbb");
// stack1.push("ccc");

// console.log(stack1.peek());

// console.log(stack1.pop());
// console.log(stack1.pop());
// console.log(stack1.pop());

// console.log(stack1.isEmpty());
// console.log(stack1.size());

export default ArrayStack;
