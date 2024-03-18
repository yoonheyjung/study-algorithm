/**
 * 
There are N houses (numbered from 0 to N-1) along a street. In each of them, recyclable trash (plastic, glass, metal) is collected into separate bags.

There are three trucks that collect the trash. Each of them collects a separate type of trash (the first collects plastic, the second, glass and the third, metal). All the trucks begin and end their jobs at the starting end of the street. Passing from the starting point to house number 0 takes D[0] minutes. Passing between houses number K-1 and K (for K in the range 1 to N-1) takes D[K] minutes. Loading one bag onto the truck takes one minute.

For example, D = [2, 5] means that passing between the starting point and house number 0 takes 2 minutes and passing between houses number 0 and 1 takes 5 minutes.

Each of the houses has already collected some bags (or possibly no bags) of recyclable trash. The number of bags that house number K has collected is recorded in string T[K], composed of letters 'P' (plastic), 'G' (glass) and 'M' (metal). For example, T[1] = "GMG" means that house number 1 has collected two bags of glass and one bag of metal. Each house may collect more than one bag of each type.

All of the trucks start their jobs simultaneously. Each finishes its job after collecting all of the bags of the given type of trash and returning back to the starting point. What is the minimum number of minutes that will pass before all the trucks finish all the jobs?

Write a function:

function solution(D, T);

that, given array D of N integers and array T of N strings, returns the minimum number of minutes needed by the trucks to finish all the jobs.

Examples:

1. Given D = [2, 5], T = ["PGP", "M"], the function should return 15. The truck collecting plastic needs to go to house number 0, collect two bags and go back, which takes 2 + 1 + 1 + 2 = 6 minutes. The truck collecting glass needs 5 minutes: 2 minutes to go to house number 0, 1 minute to collect a bag and 2 minutes to return to the starting point. The truck collecting metal will go straight to house number 1, collect a bag and go back in 7 + 1 + 7 = 15 minutes. After 15 minutes all of the trash will have been collected and all trucks will have returned to the starting point.

Picture illustrating the first example.

2. Given D = [3, 2, 4], T = ["MPM", "", "G"], the function should return 19. The truck collecting glass needs the most time: 3 + 2 + 4 + 1 + 4 + 2 + 3 = 19.

Picture illustrating the second example.

3. Given D = [2, 1, 1, 1, 2], T = ["", "PP", "PP", "GM", ""], the function should return 12. The truck collecting plastic needs 12 minutes, whereas the trucks collecting glass and metal both need 11 minutes to finish their jobs.

Picture illustrating the third example.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array D is an integer within the range [1..100];
each element of array T is a string consisting of letters 'P', 'G' or 'M';
S, the total length of all strings, is an integer within the range [0..100,000].
 */

function solution(D, T) {
  const N = D.length;

  let maxTime = 0;

  for (let i = 0; i < N; i++) {
    const time = D[i];
    const bags = T[i];

    let plasticTime = 0;
    let glassTime = 0;
    let metalTime = 0;

    for (let j = 0; j < bags.length; j++) {
      if (bags[j] === 'P') {
        plasticTime += j + 1; // 적재 시간 + 이동 시간
      } else if (bags[j] === 'G') {
        glassTime += j + 1;
      } else if (bags[j] === 'M') {
        metalTime += j + 1;
      }
    }

    const totalTime = Math.max(plasticTime, glassTime, metalTime) + time;

    maxTime = Math.max(maxTime, totalTime);
  }

  return maxTime;
}

// 예제
console.log(solution([2, 5], ['PGP', 'M'])); // 출력: 15
console.log(solution([3, 2, 4], ['MPM', '', 'G'])); // 출력: 19
console.log(solution([2, 1, 1, 1, 2], ['', 'PP', 'PP', 'GM', ''])); // 출력: 12
