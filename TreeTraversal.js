// 트리 순회

// 트리 순회 방식
// 너비 우선(Breadth first Search)
// 깊이 우선(Depth first Search)

// 너비 우선 탐색
// 같은 레벨에 있는 모든 노드를 거쳐가는 방식. 형제 노드를 모두 본 후 자식 노드로.
// 큐(선입선출 구조) 사용(리스트 혹은 배열을 사용)
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


  BFS(){ // 너비 우선 탐색
    let data = [], // 마지막에 출력할 값
        queue = [],
        node = this.root;
    queue.push(node);
    while(queue.length){ // 큐에 값이 있을 경우 실행( 0는 false 값을 가짐 )
      node = queue.shift(); // 큐의 가장 앞에서 제거
      data.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }
}