/*
 * @Author: Gauche楽
 * @Date: 2023-02-09 00:05:41
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-02-09 00:33:01
 * @FilePath: /数据结构算法/01_栈结构stack/04_十进制转二进制_栈.ts
 */
import ArrayStack from "./02_实现栈结构stack(重构)";

function conversion(num: number): string {
  //创建栈实例
  const stack = new ArrayStack();
  //为了计算是依次往下继续计算所以需要循环 但循环怎么去使用呢 不知道循环多少次就用while 知道循环次数用for
  while (num > 0) {
    //计算取余数
    const result = num % 2;
    //存到栈中
    stack.push(result);
    //要想再继续计算改变传值  以便在上方判断 到最后不大于0的时候结束停止循环
    num = Math.floor(num / 2);
  }
  let numArry = "";
  //这里为啥循环呢  为了出栈 也需要循环直到栈中没有值结束
  while (!stack.isEmpty()) {
    numArry += stack.pop();
  }
  return numArry;
}

console.log(conversion(35));
console.log(conversion(100));
