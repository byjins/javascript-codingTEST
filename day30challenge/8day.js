// 배열 자르기
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
// numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
// input => [1, 2, 3, 4, 5], 1, 2
// result => [2, 3, 4]
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

// 외계행성의 나이
function solution(age) {
  const programmer_962 = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j',
  };

  return String(age)
    .split('')
    .map((age) => programmer_962[age])
    .join('');
}

// 진료순서 정하기
// input => [3, 76, 24]
// result => [3, 1, 2]
// slice로 배열을 복사후 sort로 정렬
// 그 이후 원본배열 map을 돌리며 sorted와 index비교해서 넣기
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);

  return emergency.map((value) => sorted.indexOf(value) + 1);
}

// 순서쌍 구하기
// n이 20 이므로 곱이 20인 순서쌍은 (1, 20), (2, 10), (4, 5), (5, 4), (10, 2), (20, 1) 이므로 6을 return합니다.
// 결국, 약수의 개수와 같다.
function solution(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  return result.length;
}
