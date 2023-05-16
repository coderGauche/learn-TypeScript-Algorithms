/*
 * @Author: Gauche楽
 * @Date: 2023-02-14 00:28:17
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-07 09:38:48
 * @FilePath: /数据结构算法/02_队列Queue/击鼓传花.ts
 */
import Queue from "./实现队列结构";

function hotPotato(list: string[], num: number) {
  const queue = new Queue<string>();
  for (var name of list) {
    queue.enqueue(name);
  }
  while (queue.size > 1) {
    for (var i = 1; i < num; i++) {
      const name = queue.dequeue()!;
      // console.log(name);

      queue.enqueue(name);
    }

    queue.dequeue();
    // console.log(queue.deep());
  }
  const lastName = queue.dequeue()!;

  const index = list.indexOf(lastName);
  return index;
}

hotPotato(["aa", "Blob", "cc", "dd", "ee"], 3);
// console.log(hotPotato(["aa", "Blob", "cc", "dd", "ee"], 3));
