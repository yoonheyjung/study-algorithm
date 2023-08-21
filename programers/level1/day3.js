/**
 * 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
 */
function sol120810(num1, num2) {
  return num1 % num2;
}

console.log(sol120810(3, 2)); // 1
console.log(sol120810(10, 5)); // 0

console.log('***********');
/**
 * [ 중앙값 ]
 * 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다.
 * 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.
 */
const sol120811 = (arr) => {
  arr = arr.sort();
  console.log(arr, arr.reverse());
  // console.log(arr, typeof arr[1]);
  // console.log(arr[arr.length / 2]);
  return 1;
};
console.log(sol120811([1, 2, 7, 10, 11])); // 7
console.log(sol120811([9, -1, 0])); // 0


@Controller
  public class HelloController {
    @GetMapping("hello-string")
    @ResponseBody
    public String helloString(@RequestParam("name") String name) {
      return "hello " + name;
  }
}