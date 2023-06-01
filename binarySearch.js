/* 평소에 나라면?! */
function solution1(x) {
  const L = [1, 2, 5, 7, 11];
  const result = L.indexOf(x);

  return result;
}

// console.log(solution1(7)); // result 3
// console.log(solution1(10)); // result -1

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

// console.log("결과 => ", solution2(7)); // result 2
// console.log("결과 => ", solution2(15)); // rsult -1

/****** 한 ******/
function code(x) {
  lange = [2, 3, 4, 5, 6, 7, 8, 9, 13, 18];
  let first = 0,
    last = lange.length;

  let result = -1;

  let mid = parseInt((last + first) / 2);

  function abc() {
    console.log(mid);
    if (lange[mid] === x) {
      result = mid;
      return;
    } else if (mid === -1 || mid === -0 || mid > lange.length) {
      return;
    } else {
      if (lange[mid] < x) first = mid + 1;
      else last = mid - 1;
      mid = parseInt((last + first) / 2);
      abc();
    }
  }
  abc();
  return result;
}

console.log(code(13));
