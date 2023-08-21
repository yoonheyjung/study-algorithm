function solution(arr) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res += Number(arr[i]);
  }
  return res / arr.length;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([5, 5]));
console.log(solution([1, 2, 3, 4, 5, 6, 7]));
console.log(solution([-10000, 10000]));

// NOTE: array.reduce
// * 다른사람의 풀이
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
