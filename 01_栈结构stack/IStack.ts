/*
 * @Author: Gauche楽
 * @Date: 2023-02-08 22:47:15
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-02-09 00:20:32
 * @FilePath: /数据结构算法/01_栈结构stack/IStack.ts
 */
//定义栈的接口
interface Istack<T> {
  push(element: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number;
}

export default Istack;
