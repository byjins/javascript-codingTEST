//옷가게 할인 받기
// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
function solution(price) {
  let result = 0;
  if (price <= 100000) result = price;
  if (price >= 100000 && price < 300000) result = price * 0.95;
  if (price >= 300000 && price < 500000) result = price * 0.9;
  if (price >= 500000) result = price * 0.8;

  return Math.floor(result);
}

//아이스 아메리카노
// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다.
// 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때,
// 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(money) {
  const americano = 5500;
  let myMoney = money;
  let count = 0;

  while (myMoney >= americano) {
    myMoney -= americano;
    count += 1;
  }

  return [count, myMoney];

  // 좋은풀이
  //return [Math.floor(money / 5500), money % 5500];
}

// 나이출력
// 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다.
// 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.
function solution(age) {
  return 2022 - age + 1;
}

// 배열 뒤집기
// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다.
// num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
function solution(num_list) {
  return num_list.reverse();
}
