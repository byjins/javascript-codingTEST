// 7의 개수
function solution(array) {
  return array.map((item) => String(item).split(''));
}

// 잘라서 배열로 저장하기
function solution(my_str, n) {
  let strArr = my_str.split('');

  const ans = [];

  while (strArr.length > 0) {
    ans.push(strArr.splice(0, n).join(''));
  }

  return ans;
}

// 중복된 숫자 개수
function solution(array, n) {
  return array.filter((item) => item === n).length;
}

// 머쓱이보다 키 큰사람
function solution(array, height) {
  return array.filter((item) => item > height).length;
}
