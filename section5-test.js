// Test 1 : Frequency Counter - sameFrequency
// write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// solution must have the following complexities - Time:O(n)
// ex) sameFrequency(182,281) // true. sameFrequency(34,14) //false

function sameFrequency(a,b){
  let arr1 = numberToString(a);
  let arr2 = numberToString(b);
  if(arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0)+1
  }
  for (let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0)+1
  }
  for (let key in frequencyCounter1){
    if(!(key in frequencyCounter2)){
      return false;
    }
    if(frequencyCounter2[key] !== frequencyCounter1[key]){
      return false;
    }
  }
  return true;
} // 섹션 5-3 코드 참고

function sameFrequency(a,b){
  let arr1 = numberToString(a);
  let arr2 = numberToString(b);
  if(arr1.length !== arr2.length){
    return false;
  }
  const lookup = {};
  for(let i=0; i<arr1.length; i++){
    let letter = arr1[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  for(let i=0; i<arr2.length; i++){
    let letter = arr2[i];
    if(!lookup[letter]){
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
} // 아나그램 참고

// 숫자를 배열로 만드는 방법 do..while (split보다 속도가 빠르다고 함)
function numberToString(n) {
  let nums = [];
  do {
    nums.push(n % 10);  // 숫자를 맨 끝자리수 10으로 나눈 뒤 남는 값을 num에 push
    n = Math.floor(n / 10);  // n을 10 나눈 값을 버림한 값. 맨 마지막 자리수를 뺀 값을 다시 n에 할당하여 루프를 돌린다.
  } while (n > 0);
  return nums
}

// 강사님 답
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString(); // 굳이 새로 함수를 쓸 필요가 없었다! 너무 어렵게 생각한 바람에 빙 둘러감.
  if(strNum1.length !== strNum2.length) return false;
  let countNum1 = {};
  let countNum2 = {};
  for(let i=0; i<strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]]||0)+1
  }
  for(let j=0; j<strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]]||0)+1
  }
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
  return true;
}

// Test2 : Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern Or the multiple pointers pattern.
// ex) areThereDuplicates(1,2,3) // false , areThereDuplicates(1,2,2) //true, areThereDuplicates('a','b','c','a') // true
// 시간 복잡도 : O(n), 공간 복잡도 : O(n)

function areThereDuplicates(...args){
  args.sort((a,b)=>a>b);
  //배열을 크기순으로 재정렬
  let start = 0;
  let next = 1;
  while(next<args.length){
    if(args[start]===args[next]){
      return true;
    }; // 같은 값이 나오면 true.
    start++;
    next++;
    // 크기순으로 정렬했으므로 중복된 값이라면 나란히 있어야 함. 따라서 start와 next를 함께 움직임.
  }
  return false;
}

// 강사님의 OneLiner 답
function areThereDuplicates(){
  return new Set(arguments).size !== arguments.length;
  // Set은 중복된 값을 저장할 수 없으므로, Set의 size와 주어진값의 length를 비교!
  // 중복된 값이 있다면 Set의 값이 더 작을 것이기 때문에(더 커질 수는 없음!!) !== 라면 true!
}

// Test3 : Multiple Pointers = averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// ex) averagePair([1,2,3],2.5) // true , averagePair([1,3,3,5,6,7,10,12,19],8) // true
// ex) averagePair([-1,0,3,4,5,6],4.1) // false , averagePair([],4) // false
// 시간 복잡도 : O(n). 공간 복잡도 : O(1)