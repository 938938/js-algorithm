// 정렬 알고리즘 : 컬렉션(collection)의 항목을 재배열하는 과정을 의미.
// 프로그래밍에 아주 자주 사용됨. 
// 기본적인 정렬 알고리즘(2차 정렬 알고리즘이라고도 함. 시간 복잡도가 평균 O(n^2)) : 버블 정렬, 선택 정렬, 삽입 정렬
// 공간 복잡도 - O(1)

// 기본 내장 자바스크립트 정렬 array.sort
function numberConmpare(num1, num2){
  return num1 - num2;
}
[6,4,15,10].sort(numberConmpare); // [4,5,10,15]

function comapreByLen(str1, str2){
  return str1.length - str2.length;
}
["Steele","Colt","Data Structures","Algorithms"].sort(comapreByLen);
// ["Colt","Steele","Algorithms","Data Structures"]

// 버블 정렬 BubbleSort (싱킹 정렬 - sinking sort)
// 배열을 가장 작은 숫자에서 가장 큰 숫자 순서로(오름차순으로) 정렬한다면 더 큰 숫자가 한 번에 하나씩 뒤로 이동.
// 루프를 돌면서 각 항목을 다음 항목(해당 항목의 오른쪽에 있는 항목)과 비교 - 더 크면 교환. 한바퀴를 돌면 가장 큰 숫자가 가장 오른쪽에 위치.
// 시간 복잡도 : O(n제곱). noSwap을 사용하는 경우(bubbleSort3) : O(n) 

function swap1(arr, idx1, idx2){
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
function swap2(arr, idx1, idx2){
  [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSort1(arr){
  for(let i = arr.length ; i>0; i--){
    // j의 비교값으로 두기 위해 변경
    for(let j = 0; j<i-1; j++){
      // 위와 아래 루프문에 let i = 0; i<arr.length 방식을 사용하면 비교값을 벗어나며,
      // 루프가 반복되어 이미 정렬이 끝난 부분도 다시 비교를 하게 됨.
      if(arr[j] > arr[j+1]){ // arr[j]가 arr[j+1]보다 크다면 교환 발생
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
};
function bubbleSort2(arr){
  const swap = (arr,idx1,idx2) =>{
    [arr[idx1], arr[idx2]] = [arr[idx2],arr[idx1]];
  };
  for(let i = arr.length; i>0; i--){
    for(let j=0; j<i-1; j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
};

// 데이터가 거의 정렬되어있는 경우, 루프가 마지막으로 실행되었을 때 교환을 했는지 여부를 확인.
// 교환이 이루어지지 않았다면 정렬이 끝난 것으로 판단.
function bubbleSort3(arr){
  let noSwaps;
  for(let i = arr.length ; i>0; i--){
    noSwaps = true;
    for(let j = 0; j<i-1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
        // 교환이 이루어질 때 noSwap이 false가 되면서 루프를 반복. 교환이 이루어지지 않으면 true가 되면서 루프를 종료.
      }
    }
    if(noSwaps) break;
  }
  return arr;
};

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

// 삽입 정렬
// 배열의 과반을 점차적으로 만들어 정렬을 구축, 과반은 항상 정렬.
// 하나씩 이동하거나 한 번에 가장 큰/작은 요소를 찾는 대신 각 요소를 취해 정렬되어 있는 절반 속 해당되는 위치에 배치
// 한 번에 하나의 요소를 취해 올바른 위치에 배치
// 처음부터 시작하기보다 배열의 끝이나 중간에서 진행하는 것이 더 쉬움. - 거꾸로 수행해야 할 작업이 없기 때문에

function insertionSort(arr){
  for(let i = 1; i<arr.length; i++){ // i=0으로 해도 실행은 되지만 추가 반복이 생김
    let currentVal = arr[i];
    for(let j = i-1; j>=0 && arr[j]> currentVal; j--){
      // i보다 한칸 앞의 요소와 비교. 인덱스가 0까지 있으니 0이 되어도 괜찮음. arr[j]값이 currentVal보다 클 때 실행
      arr[j+1] = arr[j]; // 
    }
    arr[j+1]=currentVal; // currentVal보다 작은 요소의 위치가 j이기 때문에, currentVal은 j+1에 위치.
  }
  return arr;
}

// 시간 복잡도 : 가장 좋지 않은 경우 - O(n^2), 데이터가 거의 정렬되어 있을 경우 - O(n)
// 온라인 알고리즘(데이터가 들어오는 대로 작동하는 알고리즘,
// 새로운 데이터를 수신하므로 전체 베열을 한번에 정렬할 필요가 없음)이라는 데이터가 있는 경우 삽입 정렬이 효과적임.

// 규모가 커지면 잘 사용하지 않음