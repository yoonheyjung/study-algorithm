function solution(num) {
  return num % 2 == 0 ? 'Even' : 'Odd';
}

console.log(solution(3));
console.log(solution(4));

// 다른사람의 문제풀이
// NOTE :0 = false, 1 = true
function evenOrOdd(num) {
  return num % 2 ? 'Odd' : 'Even';
}
