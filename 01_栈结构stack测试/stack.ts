/**
 * 我要做什么呢？
 * 要实现个栈。
 * 什么是栈呢？
 * 后进先出原理   进来可以弹出去 但是卡在里面无法弹出
 * 所以我们要做几个功能去实现
 * 数组 stack
 * 弹进数组 push
 * 获取弹出的值 pop
 * 查看最顶部的元素 peek
 * 查看栈里的有没有值 isEmpty
 * 查看栈的有多少元素 size
 */

import Istack from "../01_栈结构stack/IStack";

class stackContainer<T> implements Istack<T> {
  private stack: T[] = [];
  push(element: T): void {
    this.stack.push(element);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  size() {
    return this.stack.length;
  }
}

export default stackContainer;
