// 1. 탐욕 알고리즘
// 현재 상황에서 문제 해결을 위해 가장 좋아보이는 것을 고르는 방법
// 문제 해결에 대한 창의적인 접근 필요
// 문제 유형을 파악하기 어렵다면 탐욕 알고리즘으로 먼저 시도, 이로 해결이 불가능할 경우 동적 프로그래밍을 포함 다른 알고리즘으로 해결 시도

//ex. 거스름돈으로 줘야하는 동전을 최소화하라
const coins = [500, 100, 50, 10]
let money = 2370;
let result = 0;

coins.forEach((coin)=>{
  result = result + Math.floor(money / coin);
  money = money % coin;
})

console.log(result);
