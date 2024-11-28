//write a function to calculate the factorial of a given number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

//create a function to check if a number is a prime number or  not
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(10));

//write a function to generate the fibonacci sequence up to a given number of terms
function fibonacci(n) {
  fibSequence = [0, 1];
  while (fibSequence.length < n) {
    fibSequence.push(
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]
    );
  }
  return fibSequence;
}
console.log(fibonacci(10));
