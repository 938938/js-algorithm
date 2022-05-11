// 그래프 순회
// 그래프에 있는 모든 정점을 모두 방문

// 모든 트리는 그래프지만, 그래프는 트리가 아닐 수 있음
// 루트가 없기 때문에 그래프를 순회하는 코드르 짤 때는 시작점을 정해줘야 함
// 한 사이트에 있는 모든 링크를 따라가서 내보내거나, 가까운 것/최단거리 등을 추천하는 기능, SNS의 친구 추천 기능 등을 수행

// DFS 깊이 우선 탐색
// 전위, 후위, 정위
// 형제 트리를 방무낳기 전에 자식 노드를 먼저 방문. 탐색의 범위를 옆으로 늘리기 전에 아래로 먼저 늘리는 방식.
// 그래프에서는 한 인접점을 찾고 이어서 인접점을 또 찾는 방식을 의미.

// BFS 넓이 우선 탐색
// 주어진 노드의 모든 인접점을 방문한 다음 아래로 내려가거나 인접점의 인접점을 확인


class Graph { // 무방향 그래프
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if(!this.adjacencyList) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v=> v !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v=> v !== vertex1)
  }
  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(veretx, this.adjacencyVertex);
    }
    delete this.adjacencyList[vertex];
  }
  DFS_R(start){ // 그래프 순환(재귀적 용법)
    // 루프가 정해져있지 않으므로 start지점을 정해줘야 함
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    // function dfs(){}
    // dfs(start);
    (function dfs(vertex){
      if(!vertex) return null; // 더이상 방문할 vertex가 없을 경우 리턴
      visited[vertex] = true; // 방문한 vertex는 true로 설정
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){ // 이웃 vertex를 방문하지 않았다면 순환 재귀 실행
          return dfs(neighbor);
        }
      })
    })(start);
    return result;
  }
  DFS_I(start){ // 그래프 순환(순환형)
    const stack = [start]; // 시작점인 정점을 스택에 넣고 방문 표시
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true; // 방문 표시
    while(stack.length){ // stack이 0이 될 때까지 반복
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){ // 아직 방문하지 않은 이웃이라면
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      })
    }
    return result;
  }
  BFS(start){ // 넓이 우선 순회
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true; // 시작점 방문 처리

    while(queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }
}