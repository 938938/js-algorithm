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
  pop(){ // 연결 리스트의 마지막에서 노드 제거
    if(!this.head) return undefined; // 노드가 있는지 확인
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
    // 노드가 하나밖에 남지 않은 경우에서 실행하게 되면 newTail과 current가 동일한 것을 가리키게 됨.
    // 길이가 0이 되는 경우 리스트가 비었다고 설정.
    return current;
  }

  shift(){ // 연결 리스트의 앞에서 노드를 제거
    if(!this.head) return undefined;
    let currentHead = this.head; // 제거하려는 첫번째 노드를 변수에 저장
    this.head = currentHead.next; // head 이동
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val){ // 리스트의 가장 앞에 새로운 노드를 추가(val:추가하려는 노드)
    let newNode = new Node(val);
    if(!this.head){ // 아무것도 리스트에 없는 경우
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head; // newNode를 head의 앞에 위치
      this.head = newNode; // head를 newNode로 변경  
    }
    this.length++;
    return this;
  }

  get(index){ // 인덱스 혹은 위치를 의미하는 숫자를 인자로 받아 주어진 위치에 있는 노드를 반환
    if(index < 0 || index >= this.length) return null; // index가 유효한 값인지 판단
    let counter = 0;
    let current = this.head; // 리스트를 따라 이동할 때 현재의 위치 추적.(최종적으로 반환하는 변수)
    while(counter !== index){
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val){ // 주어진 인덱스에 위치하는 노드의 값을 업데이트. 위치 혹은 인덱스와, 해당 인덱스에 위치한 노드를 업데이트할 값 두개의 인자를 받아들임
    let foundNode = this.get(index);
    if(foundNode){ // foundNode가 참일 때(get함수가 유효한 값을 반환했을 때) 해당 값 업데이트
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val){ // 주어진 노드를 주어진 위치에 새롭게 삽입. set과 같이 위치,인덱스와 값을 받아들임.
    if(index<0 || index > this.length) return false; // 유효하지 않은 값의 인덱스일 경우 false 반환
    if(index === this.length){ // 인덱스값이 length와 같을 경우 - 가장 마지막에 추가하는 것이므로 push를 사용
      this.push(val);
      return true;
    }
    if(index === 0) return !!this.unshift(val); // return값으로 true 혹은 false를 반환하도록 변경. 바로 위 return true를 사용한 코드과 같음.
    let newNode = new Node(val);
    let prev = this.get(index-1);
    let temp = prev.next; // prev.next값 임시 저장(기존에 해당 인덱스에 위치했던 노드)
    prev.next = newNode; // 새롭게 추가하는 노드를 previous가 가리키도록 설정
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index){ // 인덱스를 인자로 받아 해당 인덱스에 있는 노드를 제거. 앞뒤를 연결.
    if(index < 0 || index >= this.length) return null;
    if(index === 0) return this.shift();
    if(index === this.length-1) return this.pop();
    let prevNode = this.get(index-1); // 제거하려는 노드의 이전 노드 찾기
    let removed = prevNode.next;
    prevNode.next = removed.next; // 제거하고자 하는 노드의 앞뒤 연결.
    this.length--;
    return removed;
  }
}

list = new SinglyLinkedList(); // 새로운 단방향 연결 리스트 생성.
list.push("hello");
list.push("goodbye");
list.push("!");