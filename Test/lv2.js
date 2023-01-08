// 최댓값과 최솟값
// https://school.programmers.co.kr/learn/courses/30/lessons/12939

// s = "1 2 3 4"
// return = "1 4"

maximumAndMinimum('1 2 3 4'); // "1 4"

function maximumAndMinimum(s) {
  let sortArr = s.split(' ').sort((a, b) => a - b);
  // 문자열 s를 배열화 한 후 오름차순으로 정렬
  let answer = [sortArr[0], sortArr[sortArr.length - 1]].join(' ');
  // 정렬된 배열의 가장 처음과 마지막 요소를 문자열로 변환
  return answer;
}

// 최솟값 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12941

// A = [1, 4, 2] B = [5, 4, 4]
// answer = 29

makeMinimum([1, 4, 2], [5, 4, 4]); // 29

function makeMinimum(A, B) {
  let answer = 0;
  let sortA = A.sort((a, b) => a - b); // A 배열을 오름차순으로 정렬
  let sortB = B.sort((a, b) => b - a); // B 배열을 오름차순으로 정렬
  for (let i = 0; i < sortA.length; i++) {
    answer += sortA[i] * sortB[i]; // 각 배열에서 가장 낮은 요소끼리 곱하여 answer에 더하기
  }
  return answer;
}

// 올바른 괄호
// https://school.programmers.co.kr/learn/courses/30/lessons/12909

// s = "()()" / "(())()"
// answer = true
// s = ")()(" / "(()("
// answer = false

rightBracket('()()'); // true

function rightBracket(s) {
  let pair = 0; // 괄호의 쌍이 맞는지 확인하기 위한 변수
  if (s[0] === ')') return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      pair += 1;
    } else {
      pair -= 1;
      if (pair < 0) return false; // pair가 0 이하가 되면 쌍이 맞지 않는다는 뜻이므로 바로 return
    }
  }
  return pair === 0 ? true : false;
}

// JadenCase 문자열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12951

// s = "3people unFollowed me"
// return = "3people Unfollowed Me"

makeJadenCase('3people unFollowed me'); // "3people Unfollowed Me"

function makeJadenCase(s) {
  let jaden = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === ' ') {
      jaden += s[i].toUpperCase();
    } else {
      jaden += s[i].toLowerCase();
    }
  }
  return jaden;
}


// 이진 변환 반복하기
// https://school.programmers.co.kr/learn/courses/30/lessons/70129

// s = "110010101001"
// result = [3,8] ([이진변환을 반복한 횟수, 그 과정에서 제거된 0의 수])

binaryLoop('110010101001'); // [3, 8]

function binaryLoop(s) {
  let answer = [0, 0];
  while (s != 1) {
    // 이진 변환을 반복하는 반복문
    answer[0]++;
    let temp = 0;
    for (number of s) {
      if (number === '0') {
        answer[1]++;
      } else {
        temp++;
      }
      s = temp.toString(2); // 남은 1을 이진 변환해 s에 저장
    }
  }
  return answer;
}
