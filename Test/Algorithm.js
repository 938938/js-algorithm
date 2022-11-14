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

// 완전 탐색
// 모든 경우의 수 계산

// ex. 숫자 야구 게임
// 친구가 생각하는 수와 자릿수까지 일치하면 스트라이크, 숫자만 일치하면 볼
const input = [
  [123, 1, 1],
  [356, 1, 0],
  [327, 2, 0],
  [489, 0, 1]
]

const answer = [];

// 불필요한 수 제거
for (let i = 123; i<=987, i++){
  const temp = Strig(1)
  if(temp.includes('0') || temp[0] === temp[1] || temp[1] === temp[2] || temp[0] === temp[2]) continue;
  answer.push(temp)
}

input.forEach(data=>{
  const temp = Stirng(data[0]);
  for(let i = answer.length - 1 ; i >= 0; i--){
    let [strike, ball] = [0, 0]
    for(let j = 0; j<3; j++){
      if(answer[i][j] === temp[j]) strike++;
      if(answer[i][(j+1)%3] === temp[j] || answer[i][(j+2)%3] === temp[j]) ball++
    }
    if(strike !== data[1] || ball !== data[2]) answer.splice(i, 1)
  }
})

