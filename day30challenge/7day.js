// 특정문자제거
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다.
// my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string, letter) {
  return my_string
    .split('')
    .filter((str) => str !== letter)
    .join('');
}

// 각도
function solution(angle) {
  let answer;
  if (0 < angle && angle < 90) answer = 1;
  if (angle === 90) answer = 2;
  if (90 < angle && angle <= 180) answer = 3;
  if (angle === 180) answer = 4;

  return answer;
}

// 양꼬치
// 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다.
// 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
//! 문제는 먹은 음료수가 없다면?
function solution(n, k) {
  return n * 12000 + (k - Math.floor(n / 10)) * 2000;
}

// 짝수의 합
function solution(n) {
  let sum = 0;
  for (let i = 0; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}
