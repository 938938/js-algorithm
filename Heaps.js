// 힙 - 트리의 일종

// 이진 힙
// 최대 이진 힙 : 부모 노드가 항상 자식 노드보다 큰 값을 가짐(오른쪽 왼쪽 상관없이)
// = 모든 자식 노드가 부모보다 작음
// 최소 이진 힙 : 최대 이진 힙의 반대. 부모 노드가 언제나 양쪽의 자식보다 작음(최대 이진 힙의 부등호를 반대로 바꿔주면 됨)
// 각 노드는 언제나 최대 두개의 자식을 가짐
// 왼쪽과 오른쪽에 순서는 존재하지 않음

// 각각의 부모는 최대 두개의 자식을 가짐(이진)
// 최대 이진 힙에서 부모 노드의 값이 언제나 더 큼
// 형제 노드 사이에서는 대소 규칙이 없음
// 이진 힙은 언제나 최적의 용량을 가짐. 다음 레벨로 내려가기 전에 모든 left와 right가 채워짐.
// 한 줄에서는 왼쪽 자식이 언제나 먼저 채워짐
// root의 바로 다음 자식이 전체 힙에서 두번째로 큰 숫자는 아닐 수도 있음
// ex)
//     100 
//   19  36
// 17 3  25 1
// 우선순위 큐를 코딩할 때 자주 사용됨
// 요소들을 추가, 제거, 무언가의 순서를 추적해 우선순위 부여.
// 각 요소에 대해 중요한 정도를 부여해 그 정도에 따라 큐 안의 적절한 장소에 배치
// 그래프 순회에 자주 쓰임

// 이진 탐색 트리 : 끝없이 요소를 추가할 수 있음. 한쪽으로 치우친 모양도 가능

// 힙 정렬
// 부모 위치를 기반으로 자식 찾기 - 배열 안에 있는 모든 인덱스에 대해 그 왼쪽 자식은 2n+1에, 오른쪽 자식은 2n+2에 위치
// 자식 위치를 기반으로 부모 찾기 - 자식의 위치 인덱스 n에 1을 빼고 2로 나눈 다음 내림
// 자식 : n, 부모 : (n-1)/2 를 한 후 내림(0.5 인덱스는 없기 때문에)

// insert
// 삽입 후 버블업으로 자리를 교체함
// bubble up : 새로 추가한 노드를 부모 노드와 비교, 교체
// 추가하는 순서는 왼쪽에서 오른쪽으로.

// extracMax
// 최대값 제거
// 삭제 후 보통 가장 뒤에 있는 값을 대신해서 넣은 후 조정(sink down - 다른 용어들도 많이 있음)
// sink down - bubbleUp과 반대 역할


class MaxBinaryHeap{
  constructor(){
    this.values = [];
  } // 기본적인 요소
  insert(element){ // 새로운 요소 추가
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp(){ // 새로 추가한 노드를 부모 노드와 비교, 교체
    let idx = this.values.length - 1; // 새로 삽입된 요소가 어디있는지 추적
    const element = this.values[idx]; // 새로 삽입된 요소
    while(idx > 0){
      let parentIdx = Math.floor((idx-1)/2); // 새로운 요소의 부모 노드 위치를 찾음
      let parent = this.values(parentIdx);
      // if(element > parent){ // 추가된 요소가 부모 노드보다 클 경우
      //   this.values[parentIdx] = element;
      //   this.values[idx] = parent; // 두 요소의 위치를 교환
      //   idx = parentIdx;
      // }
      if(element <= parent) break; // 새 요소가 부모보다 작거나 같을 경우 루프 정지
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx; // 두 요소의 위치를 교환
    }
  }
  extractMax(){ // 최대값 제거
    const max = this.values[0]; // 최대값
    const end = this.values.pop; // 가장 뒤에 있는 요소 추출
    if(this.values.length > 0){ // 해당 조건을 설정하지 않으면 값이 하나만 남았을 때 해당 남은 값이 추출되지 않음
      this.values[0] = end; // 가장 뒤에 있는 값을 최대값 자리에 넣음
      // sink down
      this.sinkDown();
    }
    return max;
  }
  sinkDown(){ // 두 자식 중 더 큰 곳과 자리를 바꿔야 함
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0]; // 값 저장
    while(true){
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild; // 범위를 벗어났을 때(ex.오른쪽 자식이 존재하지 않을 때) 오류 발생하지 않도록 먼저 빈 상태로 선언
      let swap = null; // 교체를 했는지 여부 추적

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if(leftChild > element){
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if(
          (swap === null && rightChild > element) ||
          // 위 왼쪽 자식과의 교체가 일어나지 않았으면서 + 오른쪽 자식이 기존 값보다 더 클 때 혹은
          (swap !== null && rightChild > leftChild)
          // 왼쪽 자식과 교체가 일어났으면서 + 오른쪽 자식이 왼쪽 자식보다 더 클 때
          ) {
          swap = rightChildIdx;
        }
      }

      if(swap === null) break; // 교체가 이루어지지 않게 되었을 때 루프 정지

      this.values(idx) = this.values[swap] // 자리 바꾸기
      this.values[swap] = element;
      idx = swap;
    }
  }
}

// 우선순위 큐
// 각 요소가 그에 해당하는 우선순위를 가지는 데이터 구조
// 더 높은 우선순위를 가진 요소가 더 낮은 우선순위를 가진 요소보다 먼저 처리됨
// ex 유닉스

class PriorityQueue{ // 위 이진 힙을 수정
  constructor(){
    this.values = [];
  } // 기본적인 요소
  enqueue(val, priority){ // 새로운 요소 추가
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp(){ // 새로 추가한 노드를 부모 노드와 비교, 교체
    let idx = this.values.length - 1; // 새로 삽입된 요소가 어디있는지 추적
    const element = this.values[idx]; // 새로 삽입된 요소
    while(idx > 0){
      let parentIdx = Math.floor((idx-1)/2); // 새로운 요소의 부모 노드 위치를 찾음
      let parent = this.values(parentIdx);
      if(element.priority <= parent.priority) break; // 새 요소의 중요도가 부모보다 작거나 같을 경우 루프 정지
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx; // 두 요소의 위치를 교환
    }
  }
  dequeue(){ // 최대값 제거
    const max = this.values[0]; // 최대값
    const end = this.values.pop; // 가장 뒤에 있는 요소 추출
    if(this.values.length > 0){ // 해당 조건을 설정하지 않으면 값이 하나만 남았을 때 해당 남은 값이 추출되지 않음
      this.values[0] = end; // 가장 뒤에 있는 값을 최대값 자리에 넣음
      // sink down
      this.sinkDown();
    }
    return max;
  }
  sinkDown(){ // 두 자식 중 더 큰 곳과 자리를 바꿔야 함
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0]; // 값 저장
    while(true){
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild; // 범위를 벗어났을 때(ex.오른쪽 자식이 존재하지 않을 때) 오류 발생하지 않도록 먼저 빈 상태로 선언
      let swap = null; // 교체를 했는지 여부 추적

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if(leftChild.priority > element.priority){
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if(
          (swap === null && rightChild.priority > element.priority) ||
          // 위 왼쪽 자식과의 교체가 일어나지 않았으면서 + 오른쪽 자식이 기존 값보다 더 클 때 혹은
          (swap !== null && rightChild.priority > leftChild.priority)
          // 왼쪽 자식과 교체가 일어났으면서 + 오른쪽 자식이 왼쪽 자식보다 더 클 때
          ) {
          swap = rightChildIdx;
        }
      }

      if(swap === null) break; // 교체가 이루어지지 않게 되었을 때 루프 정지

      this.values(idx) = this.values[swap] // 자리 바꾸기
      this.values[swap] = element;
      idx = swap;
    }
  }
}
class Node{
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
    this.insertTime = Date.now(); // 우선순위가 같을 경우 
  }
}

// 이진 힙의 BigO
// 시간 복잡도 : Insertion - O(log N), Removal - O(log N), Search = O(n)