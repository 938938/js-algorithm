// Trees
// 부모-자식 관계를 가진 노드로 이루어진 데이터 구조. 고전적인 데이터 구조.
// 비선형구조(리스트:선형구조)
// 단일 연결 리스트는 아주 특별한 트리의 종류라고 볼 수 있음
// 부모 → 자식 방향으로만 가리킬 수 있음.(자식→부모 X , 자식→자식(형제)X)
// 루트 : 트리 꼭대기에 있는 노드.
// 자식 : 같은 부모를 가지는 노드
// 리프 : 자식이 없는 노드
// 간선(edge) : 한 노드에서 다른 노드로 향하는 화살표
// html과 DOM, 네트워크 라우팅, 추상 구문 트리, 인공지능, 운영체제에서 폴더가 설계된 방식, JSON 등에서 사용 됨

// 이진 트리(Binary trees)
// 노드당 최대 두 개의 자식을 가짐.
// 이진 탐색 트리 : 부모 노드보다 작은 자식 노드는 왼쪽, 큰 자식 노드는 오른쪽에 위치.
// 탐색에 효율적임. 정렬된 데이터를 특정한 방식으로 저장.

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(){
    this.root = null;
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(5);