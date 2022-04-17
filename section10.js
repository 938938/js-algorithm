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

