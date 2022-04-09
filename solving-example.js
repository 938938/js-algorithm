// Write a function which takes in a string and returns counts of each character in the string

chartCount("aaaa"); // {a:4} 배열이나 다른 데이터 구조가 아닌 객체가 반환되어야 함을 알 수 있음
chartCount("hello") // {h:1, e:1, l:2, o:1} 입력된 문자만 반환해야 하는지 아니면 b:0 등의 제로값도 넣어야하는지.
//공백을 고려해야하는지, 다른 문자들과 달러 기호, 밑줄, 숫자 등은 어떻게 해야 할지. 대소문자를 구분해야할지.
chartCount() // 아무것도 전달하지 않거나 빈 문자열을 전달하는 경우

//몇가지 예시를 작성하며 함수의 구조를 잡아나가기

function chartCount(str){
    // 무엇을 하는 함수인지 주석 달기
    // 출력값은 어떤 값을 반환하는지 주석 달기

    let result = {};
    // 반환할 객체 만들기
    for (let i = 0; i<str.length; i++){
        let char = str[i].toLowerCase(); // char은 str의 i번째 숫자/문자 + 소문자로 반환
        // 문자열에 루프를 적용하고 세부적인 부분 작성
        if(result[char]>0){
            result[char]++;
        } else {
            result[char] = 1;
        };
        // 만약 문자가 숫자/문자이며 객체에 있다면(key존재) 1을 더해 개수, 없다면 추가하고 값을 1로 설정한다고 작성
    };
    // 만약 문자가 공백, 마침표 등과 같이 숫자/문자가 아니라면 아무것도 하지 않음
    return result;
    // 객체 반환(returns)   
};

function chartCount2(str){
  let obj = {};
  for (let i=0; i<str.length; i++){
    let char = str[i].toLowerCase();
    if(/[a-z0-9]/.test(char)){
      //chartCount 함수에서 문자가 영숫자인지 여부를 검사하는 정규식 추가
      if(obj[char]>0){
        obj[char]++;
      } else {
        obj[char] = 1;
      };
    }
  }
  return obj;
};
//고칠 점
//for 루프보다 for-of 루프를 사용하면 각 문자가 즉시 출력.

function chartCount3(str){
  let obj = {};
  for (let char of str){
    // for 루프에서 해당 문자열에 대해 let char을 적용하면 char을 다시 정의할 필요가 없으며 str(i)를 입력할 필요도 없음.
    char = char.toLowerCase();
    if(/[a-z0-9]/.test(char)){
      //chartCount 함수에서 문자가 영숫자인지 여부를 검사하는 정규식 추가

      // if(obj[char]>0){
      //   obj[char]++;
      // } else {
      //   obj[char] = 1;
      // };
      // 해당 if문은 아래 코드로 대체할 수 있음.
      //obj[char]이 truthy라면 1 추가, 아니라면 1 설정
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
};
// /[a-z0-9]/ 해당 정규식 대신 charCodeAt을 사용할 수도 있음. 
// let code = str.charCodeAt(i);
// code가 47 부터 58 사이에 있으면 숫자 문자 코드, 64부터 91 사이라면 대문자 알파벳. 96에서 123 사이에 있으면 소문자 알파벳.

function chartCount4(str){
  let obj = {};
  for (let char of str){
    if(isAlphaNumberic(char)){
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
};

function isAlphaNumberic(char){
  let code = char.charCodeAt(0);
  if (!(code>47 && code<58) && // numeric
      !(code>64 && code<91) && // upper alpha
      !(code>96 && code<123)) {// lower alpha
    return false;
  };
  return true;
};

// 분리된 함수를 사용하여 가독성을 높일 수 있음.