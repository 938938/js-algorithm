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
}