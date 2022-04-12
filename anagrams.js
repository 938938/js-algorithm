function validAnagram(first, second){
  if(first.length !== second.length){
    return false;
  } // 두 문자열의 길이 확인
  const lookup = {}; // 빈도 카운터 객체, obj
  for(let i=0; i<first.length; i++){
    let letter = first[i]; // 첫번째 문자열을 세분화한 객체
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    // letter이 a로 시작하므로 lookup 객체에 이미 a가 있는지 확인.
    // 만약 문자가 존재한다면 1을 추가하고, 아니라면 1을 설정함.
  }
  for(let i=0; i<second.length; i++){ // 두번째 문자열을 lookup과 비교해서 1씩 제거하는 방식으로 true값 찾음
    let letter = second[i];
    // 문자를 찾지 못하거나, 문자가 0일 경우 anagram이 아님
    if(!lookup[letter]){
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}