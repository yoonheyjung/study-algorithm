function reverseString(str, odd) {
  const splitString = str.split('');
  // 홀수일 경우, 겹치는 부분 제거
  if (odd) splitString.pop();

  return splitString.reverse().join('');
}

function solution(n) {
  if (n < 0) return false;

  const isOdd = n % 2;
  const loopLine = [];
  const count = isOdd ? parseInt(n / 2) : parseInt(n / 2) - 1;

  for (let i = 0; i <= n; i++) {
    // 첫 라인과 마지막 라인
    if (i == 0 || i == n) {
      loopLine.push('X'.repeat(n));
      continue;
    }

    let loopStr = ['X'];

    for (let j = 1; j <= count; j++) {
      if (i == j) loopStr.push('X');
      else loopStr.push('O');
    }

    loopLine.push(loopStr.join('') + reverseString(loopStr.join(''), isOdd));

    // 반복 중간 지점이 되면 현재까지의 문장을 reverse 후 삽입
    if (i == count) {
      const result = [...loopLine];
      const reverseLoopLine = loopLine.reverse();

      // 홀수라면, 중복된 첫 번째 문장 제거
      if (isOdd) reverseLoopLine.shift();

      result.push(...reverseLoopLine);
      return result.join('\n');
    }
  }

  return false;
}

console.log(solution(5));
console.log('---------------------');
console.log(solution(8));
console.log('---------------------');
console.log(solution(15));
