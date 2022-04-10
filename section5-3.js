// 빈도수 세기 패턴

// ex) 2개의 배열을 허용하는 same이라는 함수를 작성하라
// 배열의 모든 값이 두번째 배열에 해당하는 값을 가지면 참을 반환
// 첫번째 배열에 여러 값이 있는데 두번째 배열의 값이 정확히 동일하지만 제곱되어있는지. 순서는 상관없기에 동일할 필요는 없고 제곱만 하면 됨. 값의 빈도는 동일해야 함.
// same([1,2,3], [4,1,9]) - true
// same([1,2,3], [1,9]) - false
// same([1,2,1], [4,4,1]) - false(must be same frequency)

// 순진한 접근법 O(n^2)
function same1(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  } // 먼저 두 배열의 길이가 다른지 여부 확인. 틀리면 바로 false
  for(let i=0; i<arr1.length; i++){
    let correnctIndex = arr2.indexOf(arr1[i]**2) // arr1[i]번째 있는 숫자의 제곱한 수가 arr2에 있는지 없는지 확인, 일치할 경우 해당 인덱스를 반환
    if(correnctIndex === -1){ // 없는 경우 fasle
      return false;
    }
    // arr2.splice(correnctIndex,1) // 해당 인덱스를 arr2에서 삭제함.
    // ? 예시 구문의 위 부분의 코드가 왜 있는지? 주석처리를 해도 결과값은 treu가 나옴.
  }
  return true;
}

const arr1 = [1,2,3,2];
const arr2 = [9,1,4,4];

console.log(same1(arr1, arr2));

// 빈도 카운터 패턴이 사용된 코드
function same2(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  };
  let frequencyCounter1 = {} // 두 객체를 사용하여 각 배열의 개별 값의 빈도를 개수 → {1:1, 2:2, 3:1}
  let frequencyCounter2 = {} // → {1:1, 4:2, 9:1}
  for( let val of arr1 ){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) +  1
  } // arr1의 각 val 마다 frequencyCounter에 1을 더하거나 이미 포함되어있다면 1로 초기화함.? ??
  // 이를 통해 각 요소가 해당 목록에서 몇 번 나타났는지 알 수 있음
  for( let val of arr2 ){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for( let key in frequencyCounter1 ){ // 첫번째 배열에 루프 적용, 각각의 키를 살펴 봄
    if(!(key ** 2 in frequencyCounter2 )){ // key의 제곱이 frequencyCounter2의 키인지 확인하는 코드
      return false
    }
    if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true;
}

console.log(same2(arr1,arr2));

// 첫번째 배열에 루프를 적용하여 두번째 배열의 하위 루프에서 각 값을 확인하는 대신 각 배열에 한번씩 개별적으로 루프를 적용.
// 두개의 루프가 두개의 중첩된 개별 루프보다 훨씬 나음 O(n)