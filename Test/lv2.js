// 최댓값과 최솟값
// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  let arr = s.split(" ").sort((a,b)=>a-b);
  // 문자열 s를 배열화 한 후 오름차순으로 정렬
  let answer = [arr[0], arr[arr.length-1]].join(" ")
  // 정렬된 배열의 가장 처음과 마지막 요소를 문자열로 변환
  return answer;
}