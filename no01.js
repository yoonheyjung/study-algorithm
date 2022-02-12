/* 평소에 나라면?! */
function solution1(x) {
  const L = [1, 2, 5, 7, 11];
  const result = L.indexOf(x);

  return result;
}

console.log(solution1(7)); // result 3
console.log(solution1(10)); // result -1

/* 이진탐색 활용을 해보도록 하자 */
function solution2(x) {
  const L = [2, 5, 7, 9, 11];
  const middleNum = parseInt(L.length / 2);
  let result = -1;

  if (L[middleNum] < x) {
    for (let i = middleNum; i < L.length; i++) {
      if (x === L[i]) {
        result = i + middleNum;
        break;
      }
    }
  } else {
    for (let i = 0; i < L.length; i++) {
      if (x === L[i]) {
        result = i;
        break;
      }
    }
  }

  return result;
}

console.log("결과 => ", solution2(7)); // result 2
console.log("결과 => ", solution2(15)); // rsult -1
