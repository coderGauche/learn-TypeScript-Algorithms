/*
 * @Author: Gauche楽
 * @Date: 2023-02-09 16:16:25
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-03-07 09:38:51
 * @FilePath: /数据结构算法/01_栈结构stack测试/有效括号.ts
 */
import StackContainer from "./stack";
function validBrackets(num: string): boolean {
  const stack = new StackContainer();
  for (var i = 0; i < num.length; i++) {
    const str = num[i];
    if (str === "(") {
      stack.push(")");
    } else if (str === "{") {
      stack.push("}");
    } else if (str === "[") {
      stack.push("]");
    } else {
      if (str !== stack.pop()) return false;
    }
  }
  return stack.isEmpty();
}

console.log(validBrackets("()"));

console.log(validBrackets("[()]{}[]"));

console.log(validBrackets("(]"));
