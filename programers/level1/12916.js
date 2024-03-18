function solution(s) {
  let answerP = 0;
  let answerY = 0;

  for (let i = 0; i < String(s).length; i++) {
    let value = s[i];
    if (value == 'p' || value == 'P') answerP++;
    if (value == 'y' || value == 'Y') answerY++;
  }

  return answerP == answerY ? true : false;
}

console.log(`🚀 return :`, solution('pPoooyY'));
console.log(`🚀 return :`, solution('Pyy'));
