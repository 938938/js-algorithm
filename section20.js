// 이중 연결 리스트 Doubly Linked Lists

// 단일 연결 리스트에서 앞의 노드로 갈 수 있는 포인터를 하나 더 추가한 리스트(각각의 노드에 방향지시가 앞뒤로 양방향에 존재)
// 단일 연결 리스트보다 융통성이 좋지만 많은 메모리를 사용.
// More memory === More Flexibility

// Node - val, next, prev
// DoublyLinkedList - head, tail, length

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){ // 노드나 값을 리스트에 추가
    let newNode = new Node(val); // 값에 입력하는 새로운 노드 생성
    if(!this.head){ // 리스트 확인. 이미 노드가 있는지 없는지. !this.head : this.head가 거짓일 경우(비어있을 경우) 실행
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){ // 마지막 노드 제거
    if(!this.head) return undefined; // 리스트에 이미 노드가 있는지 확인
    let poppedNode = this.tail; // 현재 테일을 변수에 저장, 내보내는 요소
    if(this.length === 1){ // 노드가 하나일 경우 그냥 삭제와 같음
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev; // tail을 마지막 노드의 앞 노드로 다시 지정
      this.tail.next = null; // 삭제하고자 하는 노드와 연결 끊기
      poppedNode.prev = null; // 삭제하는 노드와 앞 노드의 연결 끊기
    }
    this.length--;
    return poppedNode;
  }
  shift(){ // 가장 앞의 노드 제거
    if(this.length === 0) return undefined;
    let oldHead = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    this.head = oldHead.next; // 삭제할 다음 노드로 head 변경
    this.head.prev = null; // 연결 끊기
    oldHead.next = null;
    this.length--;
    return oldHead;
  }
  unshift(val){ // 리스트 시작 부분에 노드 추가
    let newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode; // head에 새로운 노트로 가는 prev 추가
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(idx){
    // 숫자인 인덱스 입력, 인덱스 위치에 있는 노드 출력.
    // 이중 연결 리스트의 경우 뒤에서부터 prev로 찾을 수도 있음. 노드 길이와 인덱스 값에 따라 작동하도록 하는 것이 최적.
    if(idx < 0 || idx >= this.lenght) return null;
    let count, current;
    if(idx <= this.length/2){
      count = 0;
      current = this.head;
      while(count !== idx){
        current = current.next; // 리스트 순회
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while(count !== idx){
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(idx, val){ // 노드 값 변경
    let foudnNode = this.get(idx);
    if(!foudnNode){
      foudnNode.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val){ // 해당 인덱스에 해당 값을 가진 노드 삽입
    if(idx < 0 || idx > this.length) return false;
    if(idx === 0) return !!this.unshift(val);
    if(idx === this.length) return !!this.push(val); // return 값을 true/false로 표현하기 위해 !! 추가

    let newNode = new Node(val);
    let beforeNode = this.get(idx-1); // 노드를 삽입할 위치 찾기,
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(idx){
    if(idx < 0 || idx >= this.length) return undefined;
    if(idx === 0) return !!this.shift(val); // 가장 앞에 있는 노드를 지우는 경우
    if(idx === this.length-1) return !!this.pop();
    let removedNode = this.get(idx);

    // let beforeNode = removedNode.prev;
    // let afterNode = removedNode.next;
    // beforeNode.next = afterNode;
    // afterNode.prev = beforeNode;
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;

    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

// 시간 복잡도 : insert - O(1), Removal = O(1), Searching - O(n), Access - O(n)(O(n/2)라고 할 수 있지만 상수는 생략하므로 O(n))