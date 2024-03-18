// 나머지 1을 만드는 작은 자연수는 ?
function solution(n) {
  // n 은 짝수인가 홀수인가
  const str = n % 2 === 0 ? 1 : 0;
  for (let i = Number(str); i < n; ) {
    if (n % i === 1) return i;
    i = i + 2;
    console.log(`🚀 ~ solution ~ i:`, i);
  }
}

console.log(solution(10));
console.log(solution(12));
