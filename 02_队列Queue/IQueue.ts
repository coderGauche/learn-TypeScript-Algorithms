/*
 * @Author: Gauche楽
 * @Date: 2023-02-13 23:13:13
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-02-13 23:20:14
 * @FilePath: /数据结构算法/02_队列Queue/IQueue.ts
 */
interface IQueue<T> {
  enqueue(element: T): void;
  dequeue(): T | undefined;
  deep(): T | undefined;
  isEmpty(): boolean;
  size: number;
}

export default IQueue;
