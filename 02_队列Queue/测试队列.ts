/*
 * @Author: Gauche楽
 * @Date: 2023-02-13 23:17:02
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-02-13 23:19:20
 * @FilePath: /数据结构算法/02_队列Queue/测试队列.ts
 */
import Queue from "./实现队列结构";

const queue = new Queue<string>();
queue.enqueue("abc");
queue.enqueue("cba");
queue.enqueue("nba");

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.deep());
console.log(queue.isEmpty());

console.log(queue.size);
