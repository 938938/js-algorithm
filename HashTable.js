// 해시 테이블
// 키 - 값 쌍을 저장하는데 사용됨
// 해시 테이블의 키는 순서를 가리지 않음
// 값의 탐색, 추가, 제거가 매우 빠름
// ex. Js - Object, Maps / Python - Dictionaries / Java, Go, Scala - Maps / Ruby - Hashes

// 해시 함수
// 보안이나 암호 기술에 많이 적용 됨
// 스트링으로 된 키를 배열에서 사용되는 유효한 인덱스(작은 숫자)로 바꾸는데 사용
// 대부분 반대로는 작용할 수 없음(단방향 함수)
// 인터넷과 개인 정보 보호, 저장, 사이트 로그인, 일반 계산 업무, 암호화폐 등에서 사용됨

// 좋은 해시 함수
// 1. 빨라야 함(즉 상수시간을 가져야 함)
// 2. 일관된 방식으로 분배, 다른 것들과 겹치지 않아야 함
// 3. 결정론적(특정 입력값을 입력할 때마다 같은 출력값이 나와야 함) - 불확실성이 있으면 안됨
// 4. 값을 고르게 분배해야 함

// 안좋은 예
function slowHash(key){
  for(let i = 0; i<10000; i++){
    console.log("every day i'm hashing");
  }
  return key[0].charCodeAt(0);
}

function sameHashedValue(key){
  return 0;
}

function randomHash(key){
  return Math.floor(Math.random() * 1000)
}

// 첫번째 해시 함수
hash("pink", 100); // 스트링과 배열의 길이 입력

// 각 글자에는 UTF16 글자 코드가 있음 "a".charCodeAt(0) // 해당 스트링에 있는 0번째 요소
// charCodeAt() 에 -96 을 하면 알파벳 순서값이 나옴
let total = 0;
total += "hello".charCodeAt(0) - 96; // 8
total += "hello".charCodeAt(1) - 96; // 13 … // 52

// 간단한 해시함수
function hash(key, arrayLen){
  let total = 0;
  for(let char of key){
    // map = "a" to 1, "b" to 2, etc
    let value = char.charCoddeAt(0) - 96;
    total = (total + value) % arrayLen; // total 값이 배열의 인덱스를 넘어가면 안되기 때문에 %를 사용해 범위 안에 집어넣어줌
  }
}
// 문제 : 오로지 스트링에만 반응함. 상수 시간이 아님. 무작위성이 떨어짐.

function hash(key, arrayLen){ // 위 함수를 수정
  let total = 0;
  let WEIRD_PRIME = 31;
  // 소수. 해시함수는 거의 대부분 소수를 이용.
  // 충돌이 줄어듦.
  for(let i = 0; i<Math.min(key.length,100); i++){ // key의 길이와 100 중 더 작은 쪽으로 루프를 돌림
    let char = key[i];
    let value = char.charCoddeAt(0)-96;
    total = (total + WEIRD_PRIME + value) % arrayLen;
  }
  return total;
  // for(let char of key){
  //   let value = char.charCoddeAt(0) - 96;
  //   total = (total + value) % arrayLen;
  // }
}

// 개선방법
// 개별 체이닝, 직선 탐색법

// 개별 체이닝(Separate Chaining)
// 같은 장소에 여러 데이터를 저장할 때 배열이나 연결 리스트 등을 사용해 이중 데이터 구조를 사용(공동저장)

// 직선 탐색법(Linear Probing)
// 한 위치에 하나만 저장. 충돌이 발생하면 다음 빈칸이 어디인지를 확인.

// set
// 값 하나와 키 하나를 입력.
// 먼저 키를 해시 처리. 개별 체이닝.

// get
// 키를 입력
// 키를 해시 처리, keyMap 배열의 인덱스에 해당하는 자리로 이동, 값을 확인(개별 체이닝 사용)

// keys : 배열(테이블)에 있는 모든 키를 포함한 목록 출력
// values : 한 배열에 있는 모든 값을 모아서 해당 배열을 출력

// 해시 테이블
class HashTable {
  constructor(size=53){ // 53의 자리에는 소수값을 넣어야함
    this.keyMap = new Array(size); // keyMap에 모든 데이터를 저장
  }
  _hash(key){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i=0; i<Math.min(key.length, 100); i++){
      let char = key[i];
      let value = char.charCoddeAt(0) -96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value){
    let index = this._hash(key); // 키를 해시 처리
    if(!this.keyMap[index]){ // 해당 자리에 값이 있는지 확인
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key,value]);
  }
  get(key){
    let index = this._hash(key); // 키를 해시 처리
    if(this.keyMap[index]){
      for(let i = 0; i<this.keyMap[index].length; i++){ // 해당 인덱스에 있는 여러 배열 중 원하는 요소 찾기
        if(this.keyMap[index][i][0] === key){
          return this.keyMap[index][i]; // 하위 배열 전체를 출력
          // return this.keyMap[index][i][1] // 하위 배열 중 값만 출력
        }
      }
    }
    return undefined; // 조건문이 해당되지 않으면 해당 인덱스에 아무것도 출력할 것이 없기 때문에
  }
  values(){
    let valuesArr = [];
    for(let i = 0; i<this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j<this.keyMap[i]; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){ // 중복된 값이 있는지 확인
            valuesArr.push(this.keyMap[i][j][1]); // 값만 추출해서 valuesArr에 넣음
          }
        }
        console.log(this.keyMap[i])
      }
    }
    return valuesArr;
  }
  keys(){ // 위 values를 그대로 가지고 와서 사용 가능
    let keysArr = [];
    for(let i = 0; i<this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j<this.keyMap[i]; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){ // 중복된 키가 있는지 확인
            keysArr.push(this.keyMap[i][j][0]); // 값만 추출해서 keysArr에 넣음
          }
        }
        console.log(this.keyMap[i])
      }
    }
    return valuesArr;
  }
}

// 시간 복잡도 : Insert - O(1), Deletion - O(1), Access - O(1);

// 해시 함수는 얼마나 빠른지도 중요하지만 얼마나 고르게 분배하는지도 중요함
// 직접 해시함수를 작성하는 것은 추천하지 않음 → 다른 사람이 만들어둔 것을 사용하는걸 추천함...?