/**
 * A game of dominos consists of 28 domino tiles. Between 0 and 6 dots appear at each end of every tile. Tiles can be reversed during the game, so the tile showing "2−3" can be played as "3−2".

You are given a list of N unique domino tiles. Your task is to find any domino tile not on the list and return it in the format "X−Y", where X and Y are digits representing the number of dots on each end of the tile. Note that because domino tiles can be reversed, tiles "2−3" and "3−2" are treated as the same tile.

Write a function:

function solution(A);

that, given an array A of N strings representing unique domino tiles, returns a string representing any tile which is not in the array A. Tiles in A are given in the format described above. You can assume that there will always exist a tile not listed in A.

Examples:

1. Given A = ["0−0", "0−1", "2−3", "2−0"], one of the possible outputs is "0−3". Note that "1−0" is not a valid answer, as "0−1" represents the same tile.

2. Given A = ["0−0", "1−1", "2−2", "3−3", "4−4", "5−5", "6−6"], one of the possible outputs is "2−4".

Assume that:

N is an integer within the range [1..27];
A consists of unique domino tiles;
each element of A is a string in the format "X−Y".
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
 */

function solution(givenA) {
  const impossible = {};

  for (let i = 0; i < givenA.length; i++) {
    const arr = givenA[i].split('−').sort();
    uptObj(impossible, arr[0], arr[1]);
  }

  const numX = getRandomNumber(0, 27);
  let numY = getRandomNumber(0, 27);
  if (impossible[numX]) {
    while (impossible[numX].includes(numY)) {
      numY = getRandomNumber(0, 27);
      if (!impossible[numX].includes(numY)) break;
    }
  }

  return `${numX}-${numY}`;
}

// 키가 존재한다면 배열에 값을 추가 / 존재x -> 키 생성 + 배열에 값 추가
function uptObj(obj, key, value) {
  if (key in obj) {
    obj[key].push(value);
  } else {
    obj[key] = [value];
  }

  if (value in obj) {
    obj[value].push(key);
  } else {
    obj[value] = [key];
  }
  return obj;
}

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

console.log(solution(['0−0', '0−1', '2−3', '2−0'])); // possible 0-3
console.log(solution(['0−0', '1−1', '2−2', '3−3', '4−4', '5−5', '6−6'])); // one of 2-4
