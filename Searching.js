// 검색 알고리즘 (searching algorithms)
// 선형 검색(linear search)
// 분류된 배열에서의 이진 검색(binary search)
// 나이브(naive) 문자열 검색 알고리즘
// KMP 문자열 검색 알고리즘

// 선형검색
// 해당 값을 찾거나 맨 끝에 도착할 때까지 처음부터 확인해나가는 것. 세트 간격으로 이동하면서 한 번에 하나의 항목을 확인.
// ex) indexOf, includes, find, indIndex 등의 함수
// 시간복잡도 : O(n)

// Linear Search Exercise
// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.
// Don't use indexOf to implement this function.

function linearSearch(arr, a){
  for(let i = 0; i<arr.length; i++){
    if(arr[i]===a) return i; // 일치하는 수가 있을 경우 해당 수의 인덱스 반환
  }
  return -1; // 일치하는 수가 없을 경우 -1 반환.
}

// 이진 검색
// 확인을 할 때마다 남은 항목의 절반을 제거. 선형검색보다 빠르게 작업을 수행.
// 분류된 배열을 대상으로만 작동. 데이터가 분류되어있어야 함. 분류되지 않은 배열의 경우 선형검색이 최선일 수 있음.
// 분할 정복.
// 데이터를 두 부분으로 나눔. (보통) 중간에 있는 중간점을 선택, 찾는 값이 중간점을 기준으로 좌측 절반과 우측 절반 중 어느 쪽에 있을지 확인.

// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

function binarySearch(arr, a){
  let left = 0;
  let right = arr.length -1;
  let point = Math.floor((left + right) / 2); // 배열의 아이템이 홀수일 경우 소수점 자리가 나오기 때문에 Math.floor 사용.
  while(arr[point] !== a && left<=right){ // left<=right는 종료신호. 설정하지 않으면 배열 안에 a값이 존재하지 않을 경우 무한루프에 빠지게 됨.
    // if(a < arr[point]){
    //   right = point - 1;
    // } else {
    //   left = point + 1;
    // }
    if(a < arr[point]) right = point - 1;
    else left = point + 1; // 괄호를 사용하지 않을 수 있음
    point = Math.floor((left + right) / 2); // point값 재설정
  } // 해당 코드는 a값을 찾았을 때나, left가 right와 값이 같아지면 루프를 빠져나옴.
  // if(arr[point]===a){
  //   return point;
  // }
  // return -1;
  return arr[point]===a ? point : -1; // 위의 마지막 리턴 코드를 삼항연산자를 사용해서 표현
}

// 이진 검색 빅오
// 이진 검색의 시간 복잡도. 최악의&평균적인 경우 : O(log n) / 최선의 경우 : O(1) - 굉장히 효율적임.

// 나이브 문자열 검색(Naive String Search)
// 긴 문자열에서 부분 문자열(substring)을 검색하는 작업에서 사용되는 가장 기본적이고 흔한 방식.
// 긴 문자열에서 짧은 문자열이 등장하는 횟수 - 문자쌍을 하나씩 확인.

// 긴 문자열을 반복하는 루프 작성 - 문자열 두개를 사용하는 함수(문자열검색), 긴 문자열과 찾는 패턴을 인자로 전달받음 - 긴 문자의 각 문자를 반복, 짧은 문자열을 반복하는 루프 작성 - 확인. 문자가 일치하지 않으면 내부루프를 벗어남. - 문자가 일치하면 다음 문자로 넘어감. 

function naiveSearch(long, short){ // 긴 문자열과 짧은 문자열을 인자로 받음
  let count = 0; // 일치하는 문자열이 생겼을 때 증가.
  for(let i = 0; i<long.length; i++){
    for(let j =0; j<short.length; j++){
      if(short[j] !== long[i+j]){ // 짧은 문자열의 j가 긴 문자열의 i에 j를 더한 것과 일치하는지 확인. 일치하지 않으면 루프 벗어남.
        break; // 짧은 루프에서 빠져나와 j는 0부터 다시 시작, i는 +1.
      };
      if(j===short.length-1){ // j가 short 문자열의 끝까지 도착했을 경우(=long에서 short와 모두 일치하는 문자열을 발견했을 경우) count증가.
        count++;
      };
    };
  };
  return count;
}

naiveSearch("lorie loled", "lol");