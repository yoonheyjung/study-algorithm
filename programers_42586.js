/**
  π» νλ‘κ·Έλλ¨Έμ€ | μ€ν/ν > κΈ°λ₯κ°λ°
  
  ## λ¬Έμ 
  1. κΈ°λ₯μ μ§λκ° 100%μΌλ μλΉμ€μ λ°μν  μ μμ.
  2. λ¨Όμ  κ°λ°μ΄ λ μμμ§λ§, μμ κΈ°λ₯μ΄ λ°°ν¬λ  λ λ°°ν¬λ¨.
  4. progress : λ°°ν¬λμ΄μΌνλ μμλλ‘ μμμ μ§λκ° μ ν μ μ λ°°μ΄
    speeds : κ° μμμ κ°λ° μλκ° μ ν μ μ λ°°μ΄
    return : κ° λ°°ν¬λ§λ€ λͺ κ°μ κΈ°λ₯μ΄ λ°°ν¬λλμ§
    
  ### μ νμ¬ν­
  - μμμ κ°μλ 100κ° μ΄ν
  - μμ μ§λλ 100 **λ―Έλ§**μ μμ°μ
  - μμ μλλ 100 **μ΄ν**μ μμ°μ
  - λ°°ν¬λ νλ£¨μ ν λ².

  ## νμ΄
  1. progress[i] + speeds[i] = distribution[i]
 */

function Deploy(array) {
  let count = 0;

  // λͺ κ°λ₯Ό λ°°ν¬ ν  μ μλμ§ count
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) break;
    count += array[i];
  }
  return count;
}

function solution(progresses, speeds) {
  let answer = [];
  let featureCompletion = new Array(progresses.length).fill(0); // κΈ°λ₯ μ§νλ μ μ₯ λ°°μ΄

  while (progresses) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] = progresses[i] + speeds[i];
      if (progresses[i] >= 100) {
        featureCompletion[i] = 1;
      }
    }

    let count = Deploy(featureCompletion);
    if (count !== 0) {
      answer.push(count);

      // κΈ°λ₯μμ±λλ©΄ λ²λ¦¬κΈ°
      progresses.splice(0, count);
      speeds.splice(0, count);
      featureCompletion.splice(0, count);
    }

    if (featureCompletion.length === 0) {
      break;
    }
  }
  return answer;
}

console.log(solution([79, 90, 99, 79, 80, 99], [1, 1, 1, 1, 1, 1])); // κΈ°λκ° : [6]
console.log(solution([93, 30, 55], [1, 30, 5])); // κΈ°λκ° : [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // κΈ°λκ° : [1, 3, 2]

/*
  λ€λ₯Έ μ¬λλ€μ νμ΄ : https://programmers.co.kr/learn/courses/30/lessons/42586/solution_groups?language=javascript
*/
