// 약수의 합 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  // 약수가 저장될 answer
  let answer = 0;
  for(i=0; i<=n; i++){
    if(n%i === 0){ // i가 n의 약수일 때
    answer += i
  }
  }
  return answer;
}

// 과일장수
// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
  // 과일장수가 얻을 수 있는 최대 이익
  let answer = 0
  // 만약 과일의 수가 한상자를 채우지 못할 경우 0 리턴
  if(score.length/m<1) return 0
  // 점수가 높은 순으로 정렬
  let temp = score.sort((a,b) => b-a)
  // 나올 수 있는 과일상자의 총 수
  const max = Math.floor(score.length/m)
  for(let i = 1; i<=max; i++){
    // 한 상자를 포장할 때마다 해당 상자의 가격을 구해서 더하기
    answer += temp[i*m-1]*m
  }
  return answer
}