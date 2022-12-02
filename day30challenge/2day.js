// 두 수의 나눗셈
function solution(num1, num2) {
  return parseInt((num1 / num2) * 1000);
}

// 숫자 비교하기
function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

// 분수의 덧셈
function solution(denum1, num1, denum2, num2) {
  const topNum = num1 * denum2 + num2 * denum1;
  const botNum = num1 * num2;
  let maximum = 1;

  for (let i = 1; i <= topNum; i++) {
    if (topNum % i === 0 && botNum % i === 0) {
      maximum = i;
    }
  }

  return [topNum / maximum, botNum / maximum];
}

// 배열 두 배 만들기
function solution(numbers) {
  return numbers.map((item) => item * 2);
}
