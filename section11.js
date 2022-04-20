// 버블 정렬

// 정렬 알고리즘 : 컬렉션(collection)의 항목을 재배열하는 과정을 의미.
// 프로그래밍에 아주 자주 사용됨. 
// 기본적인 정렬 알고리즘 : 버블 정렬, 삽입 정렬, 선택 정렬

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
  for(let i = arr.length ; i>0; i--){ // j의 비교값으로 두기 위해 변경
    for(let j = 0; j<i-1; j++){ // 위와 아래 루프문에 let i = 0; i<arr.length 방식을 사용하면 비교값을 벗어나며, 루프가 반복되어 이미 정렬이 끝난 부분도 다시 비교를 하게 됨.
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

// 데이터가 거의 정렬되어있는 경우, 루프가 마지막으로 실행되었을 때 교환을 했는지 여부를 확인. 교환이 이루어지지 않았다면 정렬이 끝난 것으로 판단.
function bubbleSort3(arr){
  let noSwaps;
  for(let i = arr.length ; i>0; i--){
    noSwaps = true;
    for(let j = 0; j<i-1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false; // 교환이 이루어질 때 noSwap이 false가 되면서 루프를 반복. 교환이 이루어지지 않으면 true가 되면서 루프를 종료.
      }
    }
    if(noSwaps) break;
  }
  return arr;
};
