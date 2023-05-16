/*
 * @Author: Gauche楽
 * @Date: 2023-02-09 16:04:24
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-02-09 16:06:36
 * @FilePath: /数据结构算法/01_栈结构stack测试/iStack.ts
 */
export default interface IStack {
  push(element): void;
  pop(): number;
  peek(): number;
  isEmpty(): boolean;
  size(): number;
}
