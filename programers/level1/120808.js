/**
 * 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
 * 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 */

// * 최대공약수
const getGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

// * 최대공약수로 최대로 나누기
const getG = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};
function solution(numer1, denom1, numer2, denom2) {
  const num1 = numer1 * denom2;
  const num2 = numer2 * denom1;
  const gcd = getGCD(denom1, denom2);
  console.log(`🚀 ~ solution ~ 최대공약수 : `, gcd);
  console.log(`🚀 ~ solution ~ 숫자 : `, num1, num2);
  const arr = [];
  arr.push(getG(numer1 + numer2, gcd));
  arr.push((denom1 * denom2) / gcd);

  return arr;
}

// * 다른사람의 풀이
// 최대 공약수 구하기
function cal_gcd(a, b) {
  return a % b === 0 ? b : cal_gcd(b, a % b);
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = cal_gcd(denum, num);

  // 최대 공약수를 분자 분모에 나누고 배열에 넣기
  return [denum / gcd, num / gcd];
}

console.log(solution(1, 2, 3, 4)); // [5,4]
console.log(solution(9, 2, 1, 3)); // [29,6]
console.log(solution(6, 5, 2, 3)); // [28,15]
