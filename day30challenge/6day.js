// 문자열 뒤집기
function solution(my_string) {
  return my_string.split('').reverse().join('');
}

// 직각삼각형 출력
// "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다.
// 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  //! 실행부분
  for (let i = 1; i <= Number(input[0]); i++) {
    console.log('*'.repeat(i));
  }
});

// 짝수 홀수 개수
function solution(num_list) {
  let even = 0;
  let odd = 0;
  num_list.map((num) => (num % 2 === 0 ? ++even : ++odd));
  return [even, odd];
}

// 문자 반복 출력하기
// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
function solution(my_string, n) {
  let answer = [];
  for (let i = 0; i < my_string.length; i++) {
    answer.push(my_string[i].repeat(n));
  }

  return answer.join('');
}
