//피자 나눠먹기 1
// 7조각으로 나눠 먹는다.
function solution(n) {
  return Math.ceil(n / 7);
}

//피자 나눠먹기 2
// 6조각으로 나눠먹는다.
// 주문한 피자를 남기지않고 모든이가 똑같이 먹을려면?
function solution(n) {
  let box = 6;
  while (box % n !== 0) {
    box += 6;
  }

  return box / 6;
}

//피자 나눠먹기 3
// slice개로 나눠주는 피자를 n인원이 최소 한 조각 이상 먹으려면?
function solution(slice, n) {
  return Math.ceil(n / slice);
}

// 배열의 평균 값 구하기
function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}
