/*
 * @Author: Gauche楽
 * @Date: 2023-02-08 22:42:46
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-02-09 00:22:06
 * @FilePath: /数据结构算法/01_栈结构stack/03_实现栈结构stack(链表).ts
 */
import Istack from "./IStack";

class linkedStack<T> implements Istack<T> {
  //创建链表结构

  push(element: T): void {
    throw new Error("Method not implemented.");
  }
  pop(): T | undefined {
    throw new Error("Method not implemented.");
  }
  peek(): T | undefined {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
}
export {};
