// 선택 정렬
// 작은 값을 한 번에 하나씩 위치에 배열. 한번 루프를 돌 때 최솟값을 찾아 마지막에 최솟값을 맨 앞에(루프 시작 위치에) 배치.
// 최솟값을 저장할 변수 필요.

function selectionSort(arr){
  for(let i = 0; i <arr.lnegth; i++){
    let lowest = i; // 최솟값을 저장하는 변수
    for(let j = i+1; j<arr.length; j++){ // 바로 뒤의 값과 비교하기 때문에 0가 아니라 i+1
      if(arr[j] < arr[lowest]){ // 첫번째로 진행할 경우 i = 0, 최솟값 = 0, j = 1.
        lowest = j;
      } 
    }; // 최솟값 인덱스를 찾아내는 코드. 
    if(i !== lowest){ // i가 lowest랑 다를 경우(=최솟값을 새롭게 발견했을 경우)에만 교환 실행
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
};

// 시간 복잡도 : O(n^2)
// 스왑(교환) 수를 최소화해야 하는 경우 버블 정렬보다 더 효율적임.(드문 경우)