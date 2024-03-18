function solution(n) {
  // Implement your solution here

  let binaryStr = n.toString(2);

  const regex = /(10+)/g;

  console.log(regex.exec(binaryStr));

  //
  if (!regex.exec(binaryStr)) return 0;

  let array = binaryStr.exec(regex);
  console.log(`🚀 ~ solution ~ array:`, array);
  let gap = 0;
  if (array && array.length > 1) {
    array = array.sort();
    gap = array[0].length - 1;
  }

  return gap;
}

console.log(solution(5)); //1000010001 1000010001
console.log(solution(1041)); //10000010001
console.log('Test 15 : ' + solution(15)); // 1111
console.log('Test 32 : ' + solution(32)); // 100000

// function longestBinaryGap(N) {
//   // N을 이진수로 변환
//   const binaryString = N.toString(2);

//   // 정규표현식을 사용하여 1로 둘러싸인 연속된 0의 패턴을 찾음
//   const matches = binaryString.match(/(?!1)(0+)(?=1)/g);

//   // 패턴이 존재하지 않으면 이진 간격이 없으므로 0 반환
//   if (!matches) {
//     return 0;
//   }

//   // 가장 긴 이진 간격의 길이를 찾아 반환
//   const longestGapLength = Math.max(...matches.map((match) => match.length));

//   return longestGapLength;
// }

// console.log(longestBinaryGap(529)); //1000010001 1000010001
// console.log(longestBinaryGap(1041)); //10000010001
// console.log('Test 15 : ' + longestBinaryGap(15)); // 1111
// console.log('Test 32 : ' + longestBinaryGap(32)); // 100000
