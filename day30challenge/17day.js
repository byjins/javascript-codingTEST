// 숫자찾기
function solution(num, k) {
  const answer = String(num).indexOf(k) + 1;
  return answer ? answer : -1;
}

// n의 배수 고르기
function solution(n, numlist) {
  var answer = [];
  for (const item of numlist) {
    if (item % n === 0) {
      answer.push(item);
    }
  }
  return answer;
}

// 자릿수 더하기
function solution(n) {
  return String(n)
    .split('')
    .reduce((acc, cur) => Number(acc) + Number(cur), 0);
}

// OX퀴즈
function solution(quiz) {
  return quiz
    .map((el) => el.split(' = '))
    .map((el) => {
      return eval(el[0]) == el[1] ? 'O' : 'X';
    });
}
