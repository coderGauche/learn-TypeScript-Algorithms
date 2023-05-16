/*
 * @Author: Gauche楽
 * @Date: 2023-02-09 16:08:21
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-02-09 16:13:41
 * @FilePath: /数据结构算法/01_栈结构stack测试/十进制转二进制.ts
 */
import StackContainer from "./stack";

/**
 * 除法取余数 依次计算 从后往上取就是二进制
 */
function binaryConversion(num: number) {
  //获取栈实例
  const result = new StackContainer();
  //循环依次去除取余数
  while (num > 0) {
    result.push(num % 2);
    num = Math.floor(num / 2);
  }
  //循环取值
  let str = "";
  while (!result.isEmpty()) {
    str += result.pop();
  }
  return str;
}

console.log(binaryConversion(35));
console.log(binaryConversion(100));
