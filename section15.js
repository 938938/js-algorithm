// 정렬 알고리즘2 (더 어렵지만 더 빠름)

function swap2(arr, idx1, idx2){
  [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
}

// 합병 정렬(Merge sort)
// 배열을 더 작은 배열로 나눔. 분할 정복 알고리즘. 0이나 1요소가 될 때까지 반복. 분할한 다음 다시 병합.
// 시간 복잡도 : O(n log n)

// 배열 합병
// 배열이 정렬되어 있다고 가정하고 정렬된 배열 두 개의 조합을 반환

// 정렬된 두 배열 합병을 담당할 함수 구현 - 정렬된 두 배열이 주어지면 헬퍼 함수는 정렬된 새 배열을 반환 / O(n+m)시간과 O(n+m)공간으로 실행 /
// 입력 두 개를 취하는 함수를 정의, 마지막에 반환할 빈 배열을 작성 - 각 입력 배열에서 가장 작은 값부터 시작. while 방식 추천. 두 배열은 같은 방식으로 정렬되어 있어야 함(오름차순과 내림차순이면 안됨)
// i와 j가 각각의 배열 끝에 도달하지 않았다면, 첫 번째 배열의 값으로 첫 번째 항목을 취하고 두 번째 배열의 첫 번째 항목 값과 비교. 

function merge(arr1, arr2){ // 합병 함수 (정렬된 배열이 두개 준비되어야 함)
  let results = []; // 빈배열
  let i = 0; // 각각의 배열을 돌아다닐 포인터
  let j = 0; 
  while(i < arr1.length && j < arr2.length){
    if(arr2[j] >= arr1[i]){
      results.push(i); // arr2[j]보다 arr1[i]가 더 크면 arr[i]를 앞에 둠
      i++; // 다음 비교를 위해 i값 이동
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while(i<arr1.length){
    results.push(arr1[i]);
    i++;
  }
  while(j<arr2.length){
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr){ // 합병 정렬
  if(arr.length<=1) return arr;
  let mid = Math.floor(arr.length/2); // 나누게 될 배열의 중간 지점
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid)); // 배열의 요소가 0이나 1이 될 때까지 반복하는 재귀
  return merge(left, right); // 나눈 배열을 다시 합병
}

// 시간 복잡도 : 가장 좋을 때, 평균, 가장 나쁠 때 - O(n log n), 공간 복잡도 - O(n)


// 퀵 정렬
// 배열에 0개 또는 1개의 항목이 남을 때까지 데이터를 분할하여 개별적으로 정렬.(합병과 같은 시작)
// 피벗 포인트라는 단일 요소를 선택하여 수행.
// ex) 중간 포인트를 설정. 해당 숫자보다 작은 숫자를 왼쪽으로, 큰 숫자를 오른쪽으로 이동. 해당 숫자는 정위치가 됨. 이를 재귀적으로 반복.

// 피봇 헬퍼 함수 - 인덱스를 반환. 배열을 반환하지 않음.
// 배열, 시작 인덱스(기본값 0), 끝 인덱스라(기본값 arr.length-1)는 세개의 인수를 받음
function pivot(arr, start=0, end=arr.length-1){
  let pivot = arr[start];
  let swapIdx = start; // pivot값을 마지막에 어디로 옮길지 추적
  for(let i = start+1; i<arr.length;i++){ // 본인과 비교할 필요는 없으므로 start+1
    if(pivot > arr[i]){
      swapIdx++; // pivot 보다 작은 수가 있을 경우 swapIdx++
      swap2(arr, swapIdx, i) // swapIdx와 i를 교환, pivot보다 작은 수를 pivot보다 왼쪽에 두기 위한 작업
    }
  }
  swap2(arr, start, swapIdx); // 루프가 끝난 후 최종적으로 처음 지정한 값을 제자리(찾은 자리)로 이동.
  return swapIdx;
}

// 퀵 정렬 구현 - 업데이트된 피벗 인덱스를 헬퍼가 반환하면 피벗 헬퍼를 재귀적으로 왼쪽과 오른쪽에 호출(새로운 배열 작성x)
function quickSort(arr, left=0, right=arr.length-1){
  if(left<right){
    let pivotIndex = pivot(arr,left,right); // arr, 0, 6 // 3
    // left
    quickSort(arr, left, pivotIndex-1);
    //right
    quickSort(arr, pivotIndex+1, right);
  };
  return arr;
}

quickSort([4,6,9,1,2,5,3]);

// 시간 복잡도 : best&average - O(n log n) , worst - O(n²) (데이터가 정렬되어있는 경우. 중간 혹은 무작위 값을 고르는게 그나마 좋음) / 공간 복잡도 : O(log n)

// 기수 정렬 (Radix sort)
// 비교를 수행하지 않음. 숫자로 작동. 이진수 이용.
// 숫자 크기에 대한 정보를 자릿수로 인코딩한다는 사실을 이용. 자릿수가 더 큰 수가 더 작은 수보다 큼. 네 자리 수는 두 자리 수보다 더 큼.

// 헬퍼 함수 - 자릿수 알아내기
function getDigit(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10,i))%10;
  // Math.abs : 절댓값 계산. 음수일 때 작동. / Math.pow : 제곱계산. 10의 2승은 100.
  // 7323 % 100 > 내림(floor) : 73 > 73을 10으로 나눌 때의 나머지 : 3
};
//ex)
getDigit(7323,2);

// 가장 큰 수에 따라 반복횟수가 바뀜. 네자리 수가 가장 크다면 네번 반복. 
// 가장 큰 수를 찾는 함수
function digitCount(num){
  if(num===0) return 1;
  // 
  return Math.floor(Math.log10(Math.abs(num))) + 1;
  // 수의 절댓값을 계산한 후 > log10 계산(ex.423일 경우 2.626...) > floor을 이용해 내림. 2 + 1을 이용해 자릿수 반환.
}

// 최대 자릿수
// 수 목록을 가져와 가장 자릿수가 많은 수가 무엇인지 반환
function mostDigits(nums){
  let maxDigits = 0;
  for(let i = 0; i<nums.length; i++){
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// 기수 정렬
function radixSort(nums){
  let maxDigitsCount = mostDigits(nums);
  for(let k = 0; k<maxDigitsCount; k++){
    let digitBuckets = Array.from({length:10}, () => []);
    for(let i = 0; i<nums.length; i++){
      let digit = getDigit(nums[i],k);
      digitBuckets[digit].push(nums[i]);
    } // 자릿수 구하는 부분
    nums = [].concat(...digitBuckets);
  }
}

// 시간 복잡도 : O(nk) / 공간 복잡도 : O(n+k);