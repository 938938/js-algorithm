// Test 1 : power
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This functhion should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.
// ex) power(2,0) // 1, power(2,2) // 4, power(2,4) // 16

// a 를 b 번 곱하는 것.

function power(a,b){
  if(b===0) return 1; // 종료조건
  return a*power(a,b-1);
}

// Test 2 : factorial
// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24.
// factorial zero ( 0! ) is always 1

function factorial(num){
  if(num===0) return 1;
  return num*factorial(num-1);
}

// Test 3 : productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// ex) productOfArray([1,2,3]) // 6, productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
  if(arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// Test 4 : recursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
// ex) recursiveRange(6) // 21, recursiveRange(10) // 55

function recursiveRange(num){
  if(num===0) return 1;
  return num + recursiveRange(num-1);
}

// Test 5 : fib
// Write a recursive function called fib which accepts a number and returns the nth number in the fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
// ex) fib(4) // 3, fib(10) // 5, fib(28) // 317811, fib(35) // 9227465

function fib(num){
  if(n<=2) return 1;
  return fib(n-1) + fib(n-2);
}