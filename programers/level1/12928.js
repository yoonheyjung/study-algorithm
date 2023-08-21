function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (Number(n) % i == 0) answer += Number(i);
    console.log(`🚀 ~ solution ~ answer:`, i, answer);
  }
  return answer;
}

solution(12);
solution(5);

// NOTE :나머지 구하기는 %
