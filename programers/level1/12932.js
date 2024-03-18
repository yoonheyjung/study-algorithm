function solution(n) {
  let arr = [];

  for (let i = 0; i < String(n).length; i++) {
    let num = String(n).slice(i, i + 1);
    arr.push(Number(num));
  }

  return arr.reverse();
}

console.log(solution(12345));
