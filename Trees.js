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
  insert(value){ // 값을 입력, 트리의 적당한 위치에 추가
    let newNode = new Node(value);
    if(!this.root){ // 트리가 비어있을 경우 루트로 추가함
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true){
        if(value===current.value) return undefined;
        // 기존에 있던 값과 같은 값을 추가하는 경우 : 무시하거나(undefined/null) 혹은 count 변수를 증가시켜 횟수를 새는 방법 등이 있음
        if(value<current.value){
          if(!current.left){ // 왼쪽 노드에 값이 존재하지 않을 경우
            current.left = newNode;
            return this;
          }
          current = current.left; // 존재할 경우 한칸 더 내려와서 다시 실행
        } else { // value > current.value일 때
          if(!current.right){
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  contains(value){ // 해당 값이 트리에 있는지를 탐색
    if(!this.root) return false;
    let current = this.root,
        found = false; // 해당 요소를 찾았는지 추적
    while(current && !found){ // 안에 값이 없는 경우, 반복을 끝내기 위해 current 조건 추가
      if(value<current.value){
        current = current.left;
      } else if (value>current.value){
        current = current.right;
      } else { // 값을 찾았을 경우(값이 같은 경우)
        found = true;
      }
    }
    return false; // 값을 찾지 못한 경우
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(5);

// 시간 복잡도 : Insertion - O(log n), Searching - O(log n)