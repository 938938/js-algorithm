// 동적 프로그래밍
// 복잡한 문제를 더 간단한 하위 문제의 모음으로 쪼개서 각 하위 문제들을 풀어 그 답을 저장하는 방식.
// 동적 : 문제가 시간에 따라 달라지는 양상을 묘사

// 동적 프로그래밍을 주어진 문제에 사용할 수 있다는 두 가지 신호.
// 반복되는 하위 문제
// 최적 부분 구조

// 중복되는/반복되는 문제
// 동적 프로그래밍을 사용하기 위해서는 중첩되는 하위 문제가 있어야 함.
// = 한 문제를 작은 문제들로 나눌 수 있고 그 조각 중 일부가 재활용이 가능해야 함

// 최적 부분 구조
// 하위 문제의 최적 해답을 통해 더 큰 범주의 문제의 최적 해답을 구성할 수 있는 경우

// 피보나치 수열
// 재귀적 솔루션
function fib(n){
  if(n<=2) return 1;
  return fib(n-1) + fib(n-2);
}

// 시간 복잡도 : O(2^n)
// 해당 방식으로는 작업을 반복하게 되어서 비효율적임

// Memo에 값을 저장하는 방법
// 배열이나 객체인 데이터를 저장할 구조를 만든 다음, 시간이 오래 걸리는 함수를 실행, 해당 값을 저장.

function fib_dynamic(n, memo=[]){ // memo : 하위 문제들에 대해 이미 찾은 답을 저장하는 장소. 한번이라도 풀었다면 그 답을 저장.
  if(memo[n] !== undefined) return memo[n];
  if(n <= 2) return 1;
  let res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
}

// 시간 복잡도 : O(n)

// 타뷸레이션 Tabulation : 상향적 접근
// 공간에 제약을 덜 받는 편

function fib_tabulation(n){
  if(n<=2) return 1;
  let fibNums = [0,1,1];
  for(let i = 3; i<=n; i++){
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }
  return fibNums[n];
}