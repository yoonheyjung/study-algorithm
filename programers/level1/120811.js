function solution(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  return arr[Math.floor(arr.length / 2)];
}

console.log(solution([1, 2, 7, 10, 11]));
console.log(solution([9, -1, 0]));
