function solution(num1, num2) {
  if(!-50000 <= num1 <= 50000) return;
  if(!-50000 <= num2 <= 50000) return;
  
  return Number(num1)-Number(num2);
}

console.log(solution(2,3))