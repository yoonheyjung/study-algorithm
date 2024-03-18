function solution(arr) {
  const doubleArr = [];
  for (let i = 0; i < arr.length; i++) {
    doubleArr.push(Number(arr[i]) * 2);
  }
  return doubleArr;
}

// * 다른사람풀이
// NOTE: reduce , ...ARRAY | .map
function solution2(arr) {
  return arr.reduce((a, b) => [...a, b * 2], []);
}

function solution3(arr) {
  return arr.map((i) => i * 2);
}

console.log(solution2([1, 2, 3, 4, 5]));
console.log(solution2([1, 2, 100, -99, 1, 2, 3]));
