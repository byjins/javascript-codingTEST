// 가까운 수
const solution = (array, n) =>
  +array
    .filter(
      (a) => Math.abs(a - n) === Math.min(...array.map((a) => Math.abs(a - n))),
    )
    .sort((a, b) => a - b)[0];

// 369 게임
function solution(order) {
  return String(order)
    .split('')
    .filter((item) => {
      if (item === '0') return;
      return item % 3 === 0;
    }).length;
}

// 암호해독
function solution(cipher, code) {
  const arr = cipher.split('');
  const answer = [];
  for (let i = code; i <= arr.length; i += code) {
    answer.push(arr[i - 1]);
  }
  return answer.join('');
}

// 대문자와 소문자
function solution(my_string) {
  const isUpperCase = (string) => /^[A-Z]*$/.test(string);

  const newArr = my_string.split('').map((item, index, array) => {
    if (isUpperCase(item)) {
      return (array[index] = item.toLowerCase());
    } else {
      return (array[index] = item.toUpperCase());
    }
  });
  return newArr.join('');
}
