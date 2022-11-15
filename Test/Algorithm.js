// 출처 : https://nohack.tistory.com/137

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

// 2. 완전 탐색
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
for (let i = 123; i<=987; i++){
  const temp = Strig(1)
  // 숫자 중복, 0 제거
  if(temp.includes('0') || temp[0] === temp[1] || temp[1] === temp[2] || temp[0] === temp[2]) continue;
  answer.push(temp)
}

// 경우의 수 확인
input.forEach(data=>{
  // 예측 숫자
  const temp = Stirng(data[0]);
  for(let i = answer.length - 1 ; i >= 0; i--){
    let [strike, ball] = [0, 0]
    for(let j = 0; j<3; j++){
      if(answer[i][j] === temp[j]) strike++;
      if(answer[i][(j+1)%3] === temp[j] || answer[i][(j+2)%3] === temp[j]) ball++
    }
    // 스트라이크와 볼의 개수가 맞지 않는 경우 모두 제거
    if(strike !== data[1] || ball !== data[2]) answer.splice(i, 1)
  }
})


// 3. 시뮬레이션
// 문제 유형의 한 종류. 출제자가 요구하는 사항에 따라 한 단계씩 단계별로 문제를 해결

// ex. 게임 개발

// 캐릭터의 위치, 바라보는 방향
let [position, direction] = [[1,1],0]
// 움직임 값
const mx = [-1, 0, 1, 0]
const my = [0, 1, 0, -1]
// 맵
const map = [
  [1,1,1,1],
  [1,0,0,1],
  [1,1,0,1],
  [1,1,1,1]
]
let visit = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
]

// 시작 시점 방문 처리
visit[position[0]][position[1]] = 1;
let count = 1
// 반시계 방향으로 회전
function turn(){
  direction = direction -1
  if(direction<0) direction = 3
}
// 회전 횟수
let turnCount = 0;
while (true) {
  // 반시계 방향 회전
  turn();
  turnCount++;
  // 회전 후 이동 계산 (Next X, Y)
  [nx, ny] = [position[0] + mx[direction], position[1] + my[direction]];
  // 이동할 방향이 벽이 아니면서, 방문하지 않은 경우
  if (map[nx][ny] === 0 && visit[nx][ny] === 0) {
    position = [nx, ny];
    visit[nx][ny] = 1;
    count++;
    turnCount = 0;
  }
  // 네 방향 모두 확인한 경우
  if (turnCount === 4) {
    // 돌아갈 위치 계산 (Next X, Y)
    [nx, ny] = [position[0] - mx[direction], position[1] - my[direction]];
    // 돌아갈 곳이 벽인 경우
    if (map[nx][ny] === 1) break;
    else {
      position = [nx, ny];
      turnCount = 0;
    }
  }
}
