// !문제 설명
// 두 정수 left와 right가 매개변수로 주어집니다.
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

/**
 * !left ~ right 모든 수들 중에서
 * ?약수의 개수가 짝수인 수는 더하고,
 * ?약수의 개수하 홀수인 수는 뺀 수를 return
 */

function solution(left, right) {
  var answer = 0;
  let count = 0;

  //left 부터 right까지 순회하는 for문
  for (let i = left; i <= right; i++) {
    // left = 13, right 17
    // 1부터 left~right의 값을 순회하는 for문
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count += 1;
      }
    }
    // count: 약수의 개수
    if (count % 2 === 0) {
      answer += i;
      count = 0;
    } else {
      answer -= i;
      count = 0;
    }
  }
  return answer;
}

//! 더 나은 정답
function solution(left, right) {
  var answer = 0;

  for (left; left <= right; left++) {
    // left의 제곱근이 정수면 약수의 개수는 홀수
    // 13
    if (Number.isInteger(Math.sqrt(left))) {
      answer -= left;
    } else {
      answer += left;
    }
  }
  return answer;
}

//! 더 나은 정답
function getDivisorCount(i) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) count++;
  }
  return count;
}

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let count = getDivisorCount(i);
    if (count % 2 === 0) answer += i;
    else answer -= i;
  }
  return answer;
}
