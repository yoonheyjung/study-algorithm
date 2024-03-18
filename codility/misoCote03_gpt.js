function isInteresting(time) {
  const digits = new Set(time.split(':').join(''));
  return digits.size <= 2;
}

function solution(S, T) {
  let count = 0;
  const currentTime = S.split(':').map(Number);

  while (true) {
    const currentTimeString = currentTime
      .map((num) => num.toString().padStart(2, '0'))
      .join(':');

    if (currentTimeString > T) {
      break;
    }

    if (isInteresting(currentTimeString)) {
      count++;
    }

    currentTime[2]++; // Increment seconds

    if (currentTime[2] === 60) {
      currentTime[2] = 0;
      currentTime[1]++; // Increment minutes

      if (currentTime[1] === 60) {
        currentTime[1] = 0;
        currentTime[0]++; // Increment hours

        if (currentTime[0] === 24) {
          break; // End of the day
        }
      }
    }
  }

  return count;
}

// Examples
console.log(solution('15:15:00', '15:15:12')); // Output: 1
console.log(solution('22:22:21', '22:22:23')); // Output: 3
