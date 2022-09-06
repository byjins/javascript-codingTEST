/**
 * 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
 * numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
 */

//  입출력 예 설명
//  입출력 예 #1
// [1,2,3,4,6,7,8,0]	14
//  5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.

// numbers 배열을 순회하며
// numbers[i]요소값에 i값이 있는지 조회하고
// 만약 해당 값이 없다면 answer에 더한다.
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i <= 9; i++) {
    if (numbers.indexOf(i) === -1) {
      answer += i;
    }
  }
  return answer;
}
