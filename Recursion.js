// 재귀 (Recursion)
// 자기자신을 호출하는 함수.
// 다양한 곳에 사용됨
// ex)
// JSON.parse / JSON.stringify
// document.getElementById and DOM traversal algorithms(순회 알고리즘)
// Object traversal (객체순회)
// ...
// 재귀를 사용해서 더 깔끔하고 간단하게 작성, 이해할 수 있음
// (때때로 반복 대신 재귀를 사용하는게 더 나을 때도 있음)

// 스택 호출하기
// 함수를 호출하면 함수가 스택의 꼭대기에 추가되며, 꼭대기에서 한 번에 하나씩 제거됨(개발자 도구의 Call Stack으로 살펴볼 수 있음)

function takeShower(){
  return "Showering!"
}
function eatBreakfast(){
  let meal = cookFood();
  return `Eating ${meal}`;
}
function cookFood(){
  let items = ["oatmeal", "egg", "protein shake"]
  return items[Math.floor(Math.random()*items.length)];
}
function wakeUp(){
  takeShower();
  eatBreakfast();
  console.log("OK");
}

wakeUp();
// wakeUp 호출. → takeShower 호출. → Showering 반환 → eatBreakfast 호출 → cookFood 호출 → cookFood에서 item 반환 → eatBreakfast에서 Eating 반환 → wakeUp의 console.log 실행

// 재귀함수
// - 동일한 함수를 계속 호출하며, 하나의 함수가 자기 자신을 재귀적으로 호출함
// - 종료 조건 : 재귀가 멈추는 시점 이 있어야 함

// 1. Base Case - 종료 조건
// 2. Different Input - 다른 입력값

// 첫번째 단순 재귀 함수
function countDown(num){
  if(num<=0){ // 종료 조건
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// 두번째 재귀 함수
function sumRange(num){
  if(num===1) return 1; // 종료 조건
  return num + sumRange(num-1);
  // ex) 3 + sumRange(2)
  // 2 + sumRange(1)
  // = 3 + 2 + 1 = 6
}

// 반복문으로 팩토리얼 구현하기
function factorial1(num){
  let total = 1;
  for(let i=num; i>1; i--){ // 1은 굳이 곱할 필요가 없기 때문에 제외
    totla *= i;
  }
  return total;
}

// 재귀 호출로 팩토리얼 구현하기

function factorial2(num){
  if(num===1) return 1;
  return num * factorial1(num-1);
}

// 재귀의 잠재적 위험
// - 종료 조건이 없거나 잘못되는 경우
// - 잘못된 값을 반환하거나, 반환하는 걸 잊는 경우
// - 최대 호출 스택 크기 초과(stack overflow)

// 헬퍼 메소드 재귀
function outer(input){ // 외부 함수
  let outerScopedVariable = [];
  function helper(helperInput){ // 재귀 함수
    helper(helperInput--)
  };
  helper(input)
  return outerScopedVariable;
}
// 메인 외부 함수를 개발자가 외부에서 호출. 외부 함수를 통해 내부로 데이터 전달. 내부 재귀 함수가 재귀적으로 자기자신을 호출.
// 배열이나 데이터 목록 등을 컴파일(compile)해야 할 때 주로 작업

function collectOddValues1(arr){
  let result = []; // result를 아래 함수 안에 넣으면 결과가 도출될 때마다 리셋되는 문제가 발생함. 때문에 함수 밖으로.
  function helper(helperInput){ // 실제로 기능하는 함수
    if(helperInput.length === 0){ // 종료 조건
      return;
    }
    if(helperInput[0] % 2 !== 1){
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr);
  return result;
}

// 헬퍼 메소드 재귀를 순수 재귀로 작성한 함수
function collectOddValues2(arr){
  let newArr = [];
  if(arr.length===0){
    return newArr;
  }
  if(arr[0] % 2 !== 0){
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues2(arr.slice(1)));
  return newArr;
}
// 배열을 복사하는 slice, spread 연산자(operator), concat 등의 메소드 사용 가능 (배열 변경 필요 없음)
// 문자열은 변경할 수 없음 → slice나 substring을 사용하여 사본을 만들어야 함
// 객체의 경우 Object.assign이나 spread 연산자를 사용하는게 유용함