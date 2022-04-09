function addUpTo1(n){
  let total = 0;
  for (let i = 1; i <= n; i++){
      total += i;
  }
  return total;
}
// console.log(addUpTo1(6))

function addUpTo2(n){
  return n * (n+1) / 2;
}
// console.log(addUpTo2(6));

let t1 = performance.now();
addUpTo1(1000000000);//실행함수
let t2 = performance.now();
console.log(`${(t2-t1) / 1000} second`);