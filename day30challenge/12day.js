// 모음 제거
function solution(my_string) {
  return my_string.replace(/['a','e','i','o','u']/g, '');
}

// 문자열 정렬하기
function solution(my_string) {
  return my_string
    .replace(/[a-z]/g, '')
    .split('')
    .map(Number)
    .sort((a, b) => a - b);
}

// 숨어있는 숫자 덧셈
function solution(my_string) {
  return my_string
    .replace(/[a-zA-Z]/g, '')
    .split('')
    .map(Number)
    .reduce((acc, cur) => acc + cur);
}

// 소인수 분해
function solution(n) {
  let result = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor);
      n = n / divisor;
    } else divisor++;
  }

  return [...new Set(result)];
}
