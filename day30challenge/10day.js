// 점의 위치 구하기
function solution(dot) {
  return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
}

// 2차원으로 만들기
function solution(num_list, n) {
  let answer = [];
  const leng = num_list.length / n;
  for (let i = 0; i < leng; i++) {
    answer.push(num_list.splice(0, n));
  }
  return answer;
}

// 공던지기
function solution(numbers, k) {
  let idx = 0;
  let answer = 0;
  const leng = numbers.length;
  for (let i = 0; i < k; i++) {
    if (idx >= leng) idx = idx - leng;
    answer = numbers[idx];
    idx += 2;
  }
  return answer;
}

// 배열 회전 시키기
function solution(numbers, direction) {
  let tmp = 0;
  if (direction === 'right') {
    tmp = numbers.pop();
    numbers.unshift(tmp);
  } else {
    tmp = numbers.shift();
    numbers.push(tmp);
  }
  return numbers;
}
