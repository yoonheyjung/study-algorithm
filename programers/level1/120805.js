/** 몫 구하기 **/
function solution(num1, num2){
  return Number.parseInt(num1/num2)
}

console.log(solution(10, 5)) // return 2
console.log(solution(7, 2)) // return 3

// 다른 사람의 풀이
const solution = (num1, num2) => Math.floor(num1 / num2)