function solution(A) {
  // Set of all possible domino tiles
  const allTiles = new Set();
  for (let i = 0; i <= 6; i++) {
    for (let j = i; j <= 6; j++) {
      allTiles.add(`${i}-${j}`);
      allTiles.add(`${j}-${i}`);
    }
  }

  // Iterate through the given array to find the missing tile
  for (let tile of A) {
    allTiles.delete(tile);
  }

  // Return any remaining tile from the set
  return allTiles.values().next().value;
}

// 예시
const exapmle01 = solution(['0-0', '0-1', '2-3', '2-0']);
console.log(exapmle01); // 결과: "0-3"

const ex02 = solution(['0-0', '1-1', '2-2', '3-3', '4-4', '5-5', '6-6']);
console.log(ex02); // 결과: "2-4"
