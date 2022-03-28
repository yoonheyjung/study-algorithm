/**
  💻 프로그래머스 | 스택/큐 > 기능개발
  
  ## 문제
  1. 기능의 진도가 100%일때 서비스에 반영할 수 있음.
  2. 먼저 개발이 될수잇지만, 앞에 기능이 배포될 때 배포됨.
  4. progress : 배포되어야하는 순서대로 작업의 진도가 적힌 정수 배열
    speeds : 각 작업의 개발 속도가 적힌 정수 배열
    return : 각 배포마다 몇 개의 기능이 배포되는지
    
  ### 제한사항
  - 작업의 개수는 100개 이하
  - 작업 진도는 100 **미만**의 자연수
  - 작업 속도는 100 **이하**의 자연수
  - 배포는 하루에 한 번.

  ## 풀이
  1. progress[i] + speeds[i] = distribution[i]
 */

function Deploy(array) {
  let count = 0;

  // 몇 개를 배포 할 수 있는지 count
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) break;
    count += array[i];
  }
  return count;
}

function solution(progresses, speeds) {
  let answer = [];
  let featureCompletion = new Array(progresses.length).fill(0); // 기능 진행도 저장 배열

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

      // 기능완성되면 버리기
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

console.log(solution([79, 90, 99, 79, 80, 99], [1, 1, 1, 1, 1, 1])); // 기대값 : [6]
console.log(solution([93, 30, 55], [1, 30, 5])); // 기대값 : [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // 기대값 : [1, 3, 2]

/*
  다른 사람들의 풀이 : https://programmers.co.kr/learn/courses/30/lessons/42586/solution_groups?language=javascript
*/
