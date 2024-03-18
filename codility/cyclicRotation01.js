// CyclicRotation : 순회

function solution(A, K) {
  // Implement your solution here
  const obj = {};
  const rest = K % A.length;

  A.forEach((element, index) => {
    index = index + rest;
    if (index >= A.length) {
      index = index - A.length;
    }
    obj[index] = element;
  });

  return Object.values(obj);
}

console.log(solution([1, 2, 3, 4], 2));
console.log(solution([3, 8, 9, 7, 6], 1));
