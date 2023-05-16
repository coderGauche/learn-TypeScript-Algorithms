/*
 * @Author: Gauche楽
 * @Date: 2023-02-09 01:00:02
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-02-09 09:15:42
 * @FilePath: /数据结构算法/01_栈结构stack/05_有效括号_栈.ts
 */
import ArrayStack from "./02_实现栈结构stack(重构)";

function isValid(str: string): boolean {
  const stack = new ArrayStack();
  for (var i = 0; i < str.length; i++) {
    const result = str[i];
    if (result === "(") {
      stack.push(")");
    } else if (result === "{") {
      stack.push("}");
    } else if (result === "[") {
      stack.push("]");
    } else {
      if (result !== stack.pop()) return false;
    }
  }
  return stack.isEmpty();
}

console.log(isValid("()"));

console.log(isValid("[()]{}[]"));

console.log(isValid("(]"));
