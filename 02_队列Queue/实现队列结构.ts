import IQueue from "./IQueue";

/*
 * @Author: Gauche楽
 * @Date: 2023-02-13 23:08:03
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-02-13 23:20:11
 * @FilePath: /数据结构算法/02_队列Queue/实现队列结构.ts
 */
class Queue<T> implements IQueue<T> {
  private state: T[] = [];
  enqueue(element: T): void {
    this.state.push(element);
  }
  dequeue(): T | undefined {
    return this.state.shift();
  }
  deep(): T | undefined {
    return this.state[0];
  }
  isEmpty(): boolean {
    return this.state.length === 0;
  }
  get size(): number {
    return this.state.length;
  }
}

export default Queue;
