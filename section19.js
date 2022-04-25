// 단방향 연결 리스트 Singly Linked Lists

// 문자열, 숫자 등 무엇이든 원하는 데이터를 저장하는 자료 구조. 순서에 따라 다수의 데이터 저장.
// 데이터 엘리먼트를 가리키는 인덱스X. 다수의 데이터 엘리먼트로 구성. 그렇지만 특정 위치에 노드 삽입은 가능(처음부터 시작해서 원하는 위치까지 이동)
// 노드(node) : 각각의 엘리먼트. 연결 리스트는 다수의 노드로 구성.
// val 혹은 value로 불리는 단일 데이터 항목을 저장. 이어서 호출될 다음 노드에 대한 참조정보인 next를 저장
// 각각의 노드는 문자열 혹은 숫자와 같은 하나의 데이터 엘리먼트를 저장. 다음 노드를 가리키는 정보도 저장하고 있으며 다음 노드가 없을 경우에는 null 저장.
// 헤드(head) : 연결 리스트의 첫 노드(반드시 필요함) / 테일(tail) : 연결 리스트의 마지막 노드(반드시 필요하진 않음)
// 새로운 항목을 추가하거나 기존 항목을 제거할 경우 연결 리스트가 효율적(인덱스가 없기 때문에)

// 코드 스타터와 push 메소드

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

class Node{
  constructor(val){
    this.val = val;
    this.next = null; // 처음에는 아직 다음 노드가 없기 때문에 null로 초기화
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){ // 노드의 마지막에 새로운 노드를 추가
    // 1. 새로운 인자를 받아들임
    let newNode = new Node(val);
    // 2. 받아들인 인자를 사용하여 새로운 노드 생성
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.enxt = newNode;
      this.tail = newNode;
    }
    // 3. 리스트에 헤드가 채워져 있는지 확인
    // 만약 리스트가 비어있다면 헤드와 테일 모두 새롭게 생성된 노드를 가리킴
    // 비어있지 않다면 테일이 가리키고 있는 마지막 노드의 next가 새로운 노드를 가리키고 리스트의 테일이 새로운 노드를 가리킴.
    this.length++;
    return this;
    // 4. 변경된 연결 리스트 반환
  }
  // traverse(){ // 리스트를 따라가는 방법 중 하나
  //   let current = this.head; // 처음부터 시작
  //   while(current){ // current가 존재하는 한 반복해서 수행
  //     current = current.next;
  //   }
  // }
  // pop은 마지막에서 두번째 노드만 찾으면 되기에 모두 따라갈 필요는 없음
  // 노드의 끝까지 따라가는 변수와 한 노드 이전 것을 가리키는 변수 사용
  pop(){
    if(!this.head) return undefined;
    let current = this.head; // 끝까지 따라가는 변수
    let newTail = current; // 한 노드 이전 것을 가리키는 변수
    while(current.next){// 리스트에 무엇인가 남겨져 있는 동안 계속 반복
      newTail = current;
      current = current.next; // current가 마지막 노드에 도착할 때까지 반복(newTail은 그 직전 노드에 위치하게 됨)
    };
    this.tail = newTail;
    this.tail.next = null; // 가장 마지막 노드와의 연결을 끊음
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // 노드가 하나밖에 남지 않은 경우에서 실행하게 되면 newTail과 current가 동일한 것을 가리키게 됨.
  // 길이가 0이 되는 경우 리스트가 비었다고 설정하는 방법
}

list = new SinglyLinkedList(); // 새로운 단방향 연결 리스트 생성.
list.push("hello");
list.push("goodbye");

// pop 메소드
// 연결 리스트의 마지막에서 노드 제거
