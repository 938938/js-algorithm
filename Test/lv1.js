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
/**
* example:
const result = solution(12, 333, xxxx);
assert( result, 12);
**/
function solution(k, m, score) {
  // k = 과일의 최대 점수, m = 한 상자에 담기는 과일의 수, score = 사과의 점수
  // score = 배열, score의 길이 = 과일의 수
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

// 문자열 내 p와 y의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
  // 대소문자가 섞인 s를 소문자로 통일
  s = s.toLowerCase();

  let p = [...s].filter( elm => elm==="p" ); // s에 있는 p 모음
  let y=[...s].filter(elm=>elm==="y"); // s에 있는 y 모음
  return p.length === y.length; // s와 p의 수가 같은지 비교
}

// 음양 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/76501
function sumAllAbsloute(absolutes, signs) {

    if( score > 0 && score < 50 ){
        something....
    }

  let sum = 0;
  for(i=0; i<absolutes.length; i++){
    const sign = signs[i];
    const absoluteNumber = parseInt(absolutes[i]);

    if( sign ){
        sum += absoluteNumber;
    }else{
        sum -= absoluteNumber;
    }
  }
  return sum;
}

// 나머지가 1이 되는 수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
  let answer = 0;
  while(n%answer !== 1){
    // n을 answer로 나눴을 때 구하는 값(1)이 나오지 않을 경우 answer을 1씩 증가.
    answer++;
  }
  return answer;
}

// 행렬의 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  let answer = []; // 빈 배열 생성
  for(let i = 0; i<arr1.length; i++){
      answer[i] = []; // 배열 안에 배열 생성
      for(let j = 0; j<arr1[i].length; j++){
          answer[i].push(arr1[i][j] + arr2[i][j])
          // 빈 배열에 arr1과 arr2의 행렬을 더해서 반환
      }
  }
  return answer;
}

// 평균 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  let answer = (arr.reduce((a, b)=>a+b))/arr.length // 행렬의 값을 모두 더해서 길이로 나누기
  return answer;
}

// 같은 숫자는 싫어
// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr){
  return arr.filter((elm,i)=> elm !== arr[i+1]);
  // 배열 안의 다음 아이템과 같은지 확인 후 아닌 것만(중복되지 않은 것만) filter 처리
}

// 제일 작은 수 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  let answer = [];
  let m = Math.min(...arr); // 배열 arr 에서 가장 작은 수를 추출
  if(arr.length===1){ // 가장 작은 수를 추출한 결과가 빈배열일 경우 -1 리턴
      answer = [-1];
  } else {
      answer = arr.filter(n=>n !== m); // 아닐 경우, m값(가장 작은 값)을 제외한 배열을 리턴
  }
  return answer;
}

// 없는 숫자 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  let answer = 0;
  for(i=0;i<10;i++){ // 0부터 9까지 범위 지정
      if(numbers.indexOf(i) === -1){ // numbers에 해당하는 숫자가 없을 경우(-1)이 나올 경우
          answer+=i; // 해당 i 추가
      }
  }
  return answer;
}

