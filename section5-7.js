// 다중 포인터 패턴
// 인덱스나 위치에 해당하는 포인터나 값을 만든 다음, 특정 조건에 따라 중간 지점에서부터 시작 지점이나 끝 지점이나 양쪽 지점을 향해 이동.
// 배열이나 문자열과 같은 일종의 선형 구조나, 이중 연결 리스트, 단일 연결 리스트를 만들 때 사용.
// 한 쌍의 값이나 조건을 충족시키는 무언가를 찾음.

function sumZero1(arr){ //오름차순으로 정렬된 배열을 취해서 한 숫자를 가져와 다른 숫자에 더하면 0이 되는 쌍을 찾는 함수.
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i]+arr[j]===0){
        return [arr[i], arr[j]];
      }
    }
  }
};
sumZero1([-3,-2,-1,0,1,2,3]) // [-3, 3]
sumZero1([-2,0,1,3]) // undefined
sumZero1([1,2,3]) // undefined
// 시간 복잡도 : O(n^2), 공간 복잡도 : O(1)

// 다중 포인터 패턴을 사용하는 리팩토링
// 가장 작은 숫자(왼쪽)와 가장 큰 숫자(오른쪽)에서 포인터를 시작.
// 가장 작은 숫자와 가장 큰 숫자를 더했을 때 0보다 큰 숫자가 나오면 오른쪽 포인터를 왼쪽으로 한칸 이동해서 다시 비교.
// 0보다 작은 숫자가 나오면 왼쪽 포인터를 오른쪽으로 한칸 이동하여 비교.

function sumZero2(arr){
  let left = 0;
  let right = arr.length -1;
  while(left<right){ // 해당 조건이 없으면 자신에게서 자신을 빼서 0을 찾는 오류가 발생함.
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    } else if (sum>0){
      right--;
    } else {
      left++;
    }
  }
}
// 시간 복잡도 : O(n), 공간 복잡도 : O(1)

// 다중포인터 : 고유값을 세는 도전 과제
// ex) countUniqueValues([1,1,1,1,2]) : 2
// ex) countUniqueValues([]) : 0

function countUniqueValues(arr){
  let i = 0;
  let j = i+1;
  if(arr.length===0){ // 빈 배열 일 때는 0을 반환
    return 0;
  } else {
    //arr의 i번째 인덱스 값과 j번째 인덱스 값을 비교. 같으면 j++.
    //i값과 j값이 달라지면 i++를 하고, i값과 j값을 변경.
    //그리고 i값과 j값을 다시 비교, j값이 arr의 가장 끝에 도착할 때까지 이를 반복.
    //최종적으로 i가 위치하는 인덱스가 고유값의 수.
    while(j<arr.length){ 
      // if(arr[i]===arr[j]){
      //   j++;
      //   // console.log(`j : ${j}`);
      //   // console.log(`i : ${i}`);
      // } else if(arr[i]<arr[j]) {
      //   i++;
      //   [arr[i],arr[j]]=[arr[j],arr[i]];
      //   // console.log(arr);
      // } // 헤맸던 흔적. 이렇게 식을 짤 경우 i값과 j값을 교환했을 때 i보다 j값이 작아지는 문제를 해결하지 못함.
      if(arr[i]<arr[j]){
        i++;
        [arr[i], arr[j]]=[arr[j], arr[i]];
      } else {
        j++;
      }
    }
    return i+1;
  }
};

arr = [1,1,2,3,3,4,5,6,6,7];

// 강사님 답
function countUniqueValues_teach(arr){
  if(arr.length===0) return 0;
  let i = 0;
  for(let j = 1; j<arr.length; j++){ // j를 따로 설정하지 않고 for문 안에 넣어서 해결.
    if(arr[i] !== arr[j]){  
      i++;
      arr[i] = arr[j] // 값을 교환하는게 아니라 그냥 i값을 j값으로 올림으로서 arr[i]>arr[j]가 발생할 일이 없어짐.
    }
  }
  return i+1;
}
// 시간 복잡도 : O(n)

// 슬라이딩 윈도우
// 배열이나 문자열과 같은 일련의 데이터를 입력하거나 특정 방식으로 연속적인 해당 데이터의 하위 집합을 찾는 경우 유용함
// 창문 : 단일 변수, 하위 배열, 또는 다른 문자열. 조건에 따라 창문을 이동. 주로 가장 왼쪽에서 오른쪽으로 이동.

//ex) maxSubarraySum : 배열과 숫자 하나를 전달해서 서로 마주한 n개 숫자의 가장 큰 합계를 찾는 함수
// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

function maxSubarraySum1(arr, num){
  if(num>arr.length){
    return null;
  }
  let max = -Infinity; // 양수로만 작업을 하지 않을 경우에는 0이 아니라 -Infinity에서 시작. 
  for(let i = 0; i<arr.length-num+1; i++){ // 해당 식은 배열의 끝까지 도착하는게 아니라 num 수를 구할 수 있는데까지 가기 때문에 arr.length-num+1.
    temp = 0; // 각 루프의 합계 저장.
    for(let j=0; j<num; j++){
      temp += arr[i+j];
    }
    if(temp>max){
      max = temp;
    }
  }
  return max;
}
// 시간 복잡도 : O(n^2)

// 슬라이딩 윈도우 방식
// 첫 시작 위치에서 합계 구하기. 가장 첫 위치의 값을 빼고, 창문 바로 다음 위치의 값을 더함. 이를 반복.
function maxSubarraySum2(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length<num) return null;
  for(let i=0; i<num; i++){
    maxSum += arr[i];
  } // 첫 번째 합계를 구하여 maxSum 변수에 저장.
  tempSum = maxSum;
  for(let i = num; i<arr.length; i++){ // 첫 합계를 구한 바로 다음 인덱스부터 시작.
    tempSum = tempSum - arr[i-num] + arr[i]; // 0번째 인덱스 값을 빼고, 첫번째 창문 바로 다음 인덱스의 값을 추가.
    maxSum = Math.max(maxSum, tempSum); // 새롭게 구한 값과 기존에 있던 값을 비교하여 더 큰 값을 MaxSum 변수에 넣어줌.
  }
  return maxSum;
}
// 시간 복잡도 : O(n)

// 분할 정복
// 배열이나 문자열같은 큰 규모의 데이터셋을 처리. 큰 데이터 덩어리를 작은 조각으로 나누는 방식.
// 퀵 정렬, 병합 정렬은 분할 정복 알고리즘의 예시

// ex) 이진 탐색. 정렬된 숫자를 지닌 배열을 취함.
// search : 값을 취하고 해당 값이 있는 인덱스를 반환하는 함수
// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1

// 순진한 방식. 선형 탐색. O(n)
function search1(arr, val){
  for(let i=0; i<arr.length; i++){
    if(arr[i]===val){
      return i;
    }
  }
  return -1;
}

// 이진 탐색
// 정렬되어있는 중간 지점을 선택. 찾는 값이 중간 지점값보다 큰지 작은지를 확인. 찾는 값이 더 크다면 왼쪽 값은 무시, 오른쪽 값만 탐색. 이를 반복.
function search2(arr, val){
  let min = 0;
  let max = arr.length-1;
  while(min<=max){
    let middle = Math.floor((min+max)/2);
    let currentElement = arr[middle];
    if(arr[middle]<val){
      min = middle+1;
    } else if (arr[middle]>val){
      max = middle-1;
    } else {
      return middle;
    }
  }
  return -1;
}
// 시간 복잡도 : log(N)