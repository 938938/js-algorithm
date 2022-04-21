// 정렬 알고리즘2 (더 어렵지만 더 빠름)

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