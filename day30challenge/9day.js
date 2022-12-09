// 개미군단
function solution(hp) {
  const ant = [5, 3, 1];
  let answer = hp;
  let cnt = 0;
  for (let i = 0; i < ant.length; i++) {
    cnt += Math.floor(answer / ant[i]);
    answer = answer % ant[i];
  }

  return cnt;
}

// 모스부호
function solution(letter) {
  morse = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
  };

  return letter
    .split(' ')
    .map((item) => morse[item])
    .join('');
}

// 가위바위 보
function solution(rsp) {
  const win = {
    2: '0',
    0: '5',
    5: '2',
  };

  return rsp
    .split('')
    .map((item) => win[item])
    .join('');
}

// 구슬을 나누는 경우의 수
// 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
// balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
// balls 구슬 개수
// share 나누어 줄 구슬 개수
// balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수?
const 팩토리얼 = (num) => (num === 0 ? 1 : num * 팩토리얼(num - 1));

function solution(balls, share) {
  return Math.round(
    팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share),
  );
}
