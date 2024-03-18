function solution(arr) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res += Number(arr[i]);
  }
  return res / arr.length;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([5, 5]));
console.log(solution([1, 2, 3, 4, 5, 6, 7]));
console.log(solution([-10000, 10000]));

// NOTE: array.reduce
// * 다른사람의 풀이
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

function solution(arr) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res += Number(arr[i]);
  }
  return res / arr.length;
}


/* **********************************************
  ************* JAVA ****************************
*************************************************/ 

import java.util.Arrays;

public class GetMean {
    public int getMean(int[] array) {
      return (int) Arrays.stream(array).average().orElse(0);
    }

    public static void main(String[] args) {
        int x[] = {5, 4, 3};
        GetMean getMean = new GetMean();
        // 아래는 테스트로 출력해 보기 위한 코드입니다.
        System.out.println("평균값 : " + getMean.getMean(x));
    }
}