// 최댓값과 최솟값
// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  let arr = s.split(" ").sort((a,b)=>a-b);
  // 문자열 s를 배열화 한 후 오름차순으로 정렬
  let answer = [arr[0], arr[arr.length-1]].join(" ")
  // 정렬된 배열의 가장 처음과 마지막 요소를 문자열로 변환
  return answer;
}

// 최솟값 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A,B){
  let answer = 0;
  let a = A.sort((a,b)=>a-b) // A 배열을 오름차순으로 정렬
  let b = B.sort((a,b)=>b-a) // B 배열을 오름차순으로 정렬
  for(let i=0; i<a.length; i++){
      answer += a[i]*b[i] // 각 배열에서 가장 낮은 요소끼리 곱하여 answer에 더하기
  }
  return answer;
}

// 숫자의 표현
// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let answer = 0;
  if(n === 1) return 1;
  for(let i=1; i<n; i++){
      let temp = n+1-i;
      if(temp%i === 0){
          answer++;
      }
      n = temp;
  }
  return answer;
}