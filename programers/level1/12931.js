function solution(n) {
  let answer = 0;

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  const arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    answer = Number(answer) + Number(arr[i]);
  }
  console.log(answer);
  return answer;
}

solution('123');
solution('987');

// NOTE :데이터타입 체크
