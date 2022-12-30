// 문자열안에 문자열
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// 제곱수 판별하기
function solution(n) {
  return Math.sqrt(n) % 1 == 0 ? 1 : 2;
}

// 세균 증식
function solution(n, t) {
  return n * 2 ** t;
}

// 문자열 정렬하기
function solution(my_string) {
  return my_string.toLowerCase().split('').sort().join('');
}
