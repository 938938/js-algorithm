// 다익스트라 알고리즘 (다익스트라 최단 경로 알고리즘)

// 가장 유명하고 널리 사용되는 알고리즘 중 하나
// 그래프의 두 정점 사이에 존재하는 최단 경로 탐색

// 그래프에 대해 작동, 그래프를 가로지르며 탐색, 큐 사용
// GPS나 지도 관련 소프트웨어, 네트워크 라우팅, 항공 티켓 등에 사용됨

// 1. 새로운 노드에 방문.
// 2. 가장 작은 거리 값을 가진 노드를 골라 방문
// 3. 해당 노드로 이동한 다음, 그 인접점들을 보며 그 각각에 대한 A에서 해당 인접점까지의 거리의 합을 계산
// 4. 현재 알고 있는 것보다 더 작은 거리값이 나오면 파일을 최신화

class PriorityQueue{
  constructor(){
    this.values=[];
  }
  enqueue(val, priority){
    this.values.push({val, priority});
    this.sort();
  }
  dequeue(){
    return this.values.shift();
  }
  sort(){
    this.values.sort((a,b)=> a.priority - b.priority);
  }
}

// 가중치 그래프 작성

class WeightedGraph{
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; // vertex가 이미 있는지 확인. 없으면 빈배열로 추가.
  }
  addEdge(vertex1, vertex2, weight){
    this.adjacencyList[vertex1].push({node:vertex2, weight}); // 배열 안에 객체. 가중치를 포함해 추가.
    this.adjacencyList[vertex2].push({node:vertex1, weight});
  }
  Dijkstra(start, finish){ // 다익스트라 알고리즘
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {}; // 또 다른 객체로써 C에 대해서 가장 빨리 갈 수 있는 경로는 A를 통하는 것이고, E에 대해서 가장 빠른 경로는 F를 통한 것이라는 것을 저장
    let path = [];
    let smallest;

    // 처음 상태를 작성. 해당 키의 시작 정점을 제외하고 모두 무한으로 설정
    for(let vertex in this.adjacencyList){
      if(vertex === start){
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity]);
      }
      previous[vertex] = null;
    }
    // 방문할 곳이 남아있는 경우
    while(nodes.values.length){ // 큐 안에 무언가가 있는 동안 루프를 돌려 정점을 dequeue
      smallest = nodes.dequeue().val;
      if(smallest = finish){ //만약 smallest가 finish와 같다면 루프 끝
        // We are Done
        // Build up path to return at end
        while(previous[smallest]){
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if(smallest || distances[smallest] !== Infinity){
        for(let neighbor in this.adjacencyList[smallest]){
          let nextNode = this.adjacencyList[smallest][neighbor]; // 인접점 찾기
          let candidate = distances[smallest] + nextNode.weight; // 인접점에 대한 새로운 거리를 계산
          let nextNeighbor = nextNode.node;
          if(candidate < distances[nextNeighbor]){
            distances[nextNeighbor] = candidate; // neighbor으로 가는 새로운 최단 거리를 갱신
            previous[nextNeighbor] - smallest; // previous를 갱신. 어떻게 neighbor로 가는건지.
            nodes.enqueue(nextNeighbor, candidate); // 새로운 우선순위를 부여해 큐에 넣음
          }
        }
      }return path.concat(smallest).reverse();
    }
  }
  // removeEdge(vertex1, vertex2){
  //   this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
  //     v=> v !== vertex2
  //   )
  //   this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
  //     v=> v !== vertex1
  //   )
  // }
  // removeVertex(vertex){
  //   while(this.adjacencyList[vertex].length){
  //     const adjacencyVertex = this.adjacencyList[vertex].pop();
  //     this.removeEdge(vertex, adjacencyVertex);
  //   }
  //   delete this.adjacencyList[vertex]
  // }
  // DFS_R(start){
  //   const result = [];
  //   const visited = {};
  //   const adjacencyList = this.adjacencyList;
  //   (function dfs(vertex){
  //     if(!vertex) return null;
  //     visited[vertex] = true;
  //     result.push(vertex);
  //     adjacencyList[vertex].forEach(neighbor => {
  //       if(!visited[neighbor]){
  //         return dfs(neighbor);
  //       }
  //     })
  //   })(start);
  //   return result;
  // }
}