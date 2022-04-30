// 스택과 큐

// 스택 Stacks
// 후입선출 원칙을 따르는 데이터 모음. 좀 더 압축적인 데이터 구조.
// 함수 호출을 다루는 상황, 실행 취소/재실행, 인터넷 방문 기록, 알고리즘 등에 사용.
// 자바스크립트에 내장된 기능은 아님(but 코드는 쉽게 짤 수 있음)
// 배열로 대신할 수 있음
// 스택에서는 push와 pop이 상수값을 가져야 함. 단일 연결리스트의 pop은 상수값의 시간을 가지지 않음

// ex)
function factorial(x){
  if(x===0) return 1;
  return x * factorial(x-1);
}

// 배열로 스택 만들기
let stack1 = [];
stack1.push("google");
stack1.push("instagram");
stack1.push("youtube");
// stack = ["google", "instagram", "youtube"];
stack1.pop();
// stack = ["google", "instagram"];
// push,pop 방식. unshift, shift도 비슷한 방식이지만 비효율적임.
// 효율성만 따질 때 : 후입선출만 지키면 되는 경우 배열보다 연결리스트가 더 효율적임

// 스크래치로 스택 작성하기
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0; // 길이
  }
  push(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop(){
    if(!this.first) return null;
    let tmep = this.first;
    if(this.first === this.last){ // 리스트에 노드가 하나만 있는 경우
      this.last = null;
    }
    this.first = this.first.next; // 노드가 하나뿐인 경우 먼저 last를 null로 해주어야 first가 null이 됨
    this.size--;
    return temp.value;
  }
}

// 시간 복잡도 : insertion - O(1), Removal - O(1), Searching - O(n), Access = O(n);