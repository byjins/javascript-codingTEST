// 주사위의 개수
function solution(box, n) {
  // 가로 사이즈에 맞춰 안에 들어갈수있는 최대 갯수저장
  let width = parseInt(box[0] / n);

  // 세로 사이즈에 맞춰 안에 들어갈수있는 최대 갯수저장
  let height = parseInt(box[1] / n);
  // 높이 사이즈에 맞춰 안에 들어갈수있는 최대 갯수저장
  let length = parseInt(box[2] / n);

  // 세 변수를 곱한 값을 리턴
  return width * height * length;
}

// 합성수의 개수
function solution(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        arr.push(i);
      }
    }
  }
  return [...new Set(arr)].length;
}

// 최대값구하기
// b-a 후 [0], [1]로 참조했으면더 쉬웠다!
function solution(numbers) {
  const answer = numbers.sort((a, b) => a - b);
  return answer[numbers.length - 1] * answer[numbers.length - 2];
}

//팩토리얼
function solution(n) {
  let result = 0;
  // 제한사항의 최대 값이 10의 팩토리얼이기 때문에 10번 반복
  for (let i = 1; i <= 10; i++) {
    // n이 i의 팩토리얼보다 크다면 진행하여 최대 i를 구함
    if (n >= getFacto(i)) {
      result = i;
      continue;
    } else {
      break;
    }
  }
  return result;
}
// 팩토리얼을 구하는 함수
function getFacto(num) {
  // 재귀를 통해 n*n-1... 을 구현함
  if (num > 1) return num * getFacto(num - 1);
  return num;
}
