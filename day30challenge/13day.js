// 컨트롤 제트
function solution(s) {
  let answer = 0;

  s.split(' ').map((str, idx, arr) => {
    if (str === 'Z') {
      answer -= arr[idx - 1];
      return;
    }

    answer += +str;
  });

  return answer;
}

// 배열의 원소 길이
function solution(strlist) {
  const answer = [];
  strlist.map((item) => answer.push(item.length));
  return answer;
}

function solution(strlist) {
  return strlist.map((el) => el.length);
}

// 중복된 문자 제거
function solution(my_string) {
  return [...new Set(my_string.split(''))].join('');
}

// 삼각형의 완성 조건
function solution(sides) {
  const sortedArr = sides.sort();
  return sortedArr[2] >= sortedArr[0] + sortedArr[1] ? 2 : 1;
}
