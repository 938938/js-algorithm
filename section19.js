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
}

list = new SinglyLinkedList(); // 새로운 단방향 연결 리스트 생성.
list.push("hello");
list.push("goodbye");