// 그래프

// 유한하고 변할 수 있는 꼭지점이나 노드나 점들의 집합으로 구성된 데이터 구조
// 해당 꼭지점들의 집합에 순서가 없는 경우 : 무방향 그래프, 순서가 있는 경우 : 유방향 그래프

// 노드나 노드들의 연결을 모은 것
// 유한한 집합, 꼭지점 : 노드
// 노드와 각 꼭지점의 연결쌍의 집합

// 노드와 연결이 있으면 유효한 그래프

// 사용자 추천 엔진 등을 만들 때 사용
// SNS, 지도, 방향 안내, 위치, 길 찾기, 라우팅 등 많은 고셍 사용됨

// vertex - 정점. 노드
// edge - 간선. 노드 사이의 연결. 한 노드에서 다른 노드로 가는 경로가 딱 하나만 존재해야 함
// 가중/비가중
// 방향/무방향
// 무방향 : 방향이나 양극, 음극이 없음. 양방향 연결만 존재.
// 방향 : 방향을 의미하는 화살표로 표현. 간선의 극성. 간선에 부여되는 방향이 있음.
// 비가중 : 노드 또는 정점 사이에 존재하는 연결인 간선에 부여된 값이 없음
// 가중 : 간선에 값을 부여, 연결 그 자체에 정보가 생김.

// 인접 행렬
// 이차원 구조. 보통 중첩 행렬로 표현(항상x)
// 행과 열에 맞춰서 정보를 저장. 0과 1을 사용하는 것이 흔한 방식(참과 거짓, 예와 아니오를 사용할 수도 있ㅇ,ㅁ)
// 새로운 노드를 추가할 때마다 새로운 줄을 추가
// 모든 간선을 순환해야하기 때문에 느림, 그러나 특정 간선을 확인할 때는 빠름

// 인접 리스트
// 정점과 정점 간의 관게를 리스트(객체)로 나타낸 것.
// 객체의 속성 값을 중요한 순서로 나열할 수도 있고, 그냥 나열할 수도 있음.
// 인접 행렬에 비해 메모리가 적게 사용됨.
// 모든 간선을 순환하는 것은 빠르지만 특정 간선이 있는지 여부를 확인하는 것은 느림

// 정점의 개수는 많지만 그게 다 연결되어있지는 않은 경우가 많기 때문에 인접 리스트가 더 유용함
// 데이터가 집약적이어서 행렬이 거의 꽉 차있는 경우에는 행렬을 사용하는 것이 더 좋음

// Big(O) - V : 정점의 수, E : 간선의 수
// 인접 리스트 : add Vertex - O(1), Add Edge - O(1), remove vertex - O(V+E), remove edge - O(e),
// 인접 행렬 : add Vertext - O(V^2), Add Edge - O(1), remove vertex - O(V^2), remove edge - O(1),
// 인접 리스트 : Query - O(V+E), Storage - O(V+E)
// 인접 행렬 : Query - O(1), Storage - O(V^2)

// 인접 리스트
class Graph { // 무방향 그래프
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex){ // 정점 추가
    if(!this.adjacencyList) this.adjacencyList[vertex] = []; // 해당하는 값이 없다면 빈배열 생성
  }
  addEdge(v1, v2){ // 간선 추가. vertex1과 vertex2 두개의 인수를 입력받음
    // adjacencyList에서 vertex1의 키를 찾아 vertex2를 해당 배열에 추가, vertex2에도 반복
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2){ // 간선 제거.
    // 연결은 두군데에 저장되어 있기 때문에 두 개의 다른 데이터를 제거 해야 함.
    // 정점 1에서 정점2를 제거한 배열을 다시 부여, 정점 2에도 반복.
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v=> v !== vertex2) // vertex2가 없는 배열로 다시 생성
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v=> v !== vertex1)
  } // 존재하지 않는 간선을 제거하려고 하면 오류 발생
  removeVertex(vertex){ // 정점 제거.
    // 정점 하나만 제거하는걸로 끝이 아니라 리스트 전체에서 정점 제거, 해당 정점과 이어져있던 간선도 제거
    while(this.adjacencyList[vertex].length){ // vertex의 길이가 0이 되면 루프 종료
      const adjacencyVertex = this.adjacencyList[vertex].pop(); // 첫번째 요소 pop 해서 
      this.removeEdge(veretx, this.adjacencyVertex); // removeEdge 호출. 제거하려는 정점과 pop한 요소 사이의 간선 제거
    }
    delete this.adjacencyList[vertex]; // 빈 배열로 남은 키 전체 삭제
  }
}