// 영어가 싫어요
function solution(numbers) {
  const num = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let i = 0; i < num.length; i++) {
    numbers = numbers.split(num[i]).join(i);
  }

  return Number(numbers);
}

// 인덱스 바꾸기
function solution(my_string, num1, num2) {
  const newStr = my_string.split('');
  const temp1 = newStr[num1];
  const temp2 = newStr[num2];
  newStr[num1] = temp2;
  newStr[num2] = temp1;
  return newStr.join('');
}

// 한 번만 등장한 문자
function solution(s) {
  const obj = {};
  const answer = [];
  s.split('').map((item) => (obj[item] = ++obj[item] || 1));
  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) {
      answer.push(key);
    }
  }
  return answer.sort().join('');
}

// 약수 구하기
function solution(n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}
