// 편지
function solution(message) {
  return message.length * 2;
}

// 가장 큰 수의 인덱스 찾기
function solution(array) {
  const max = Math.max(...array);
  return [max, array.indexOf(max)];
}

// 문자열 계산하기
function solution(my_string) {
  return eval(my_string);
}

// 배열 비교하기
// 유사한지 확인
function solution(s1, s2) {
  return s1.filter((arr) => s2.includes(arr)).length;
}
