#!/usr/bin/node
function factorial (num) {
  if (num <= 1 || isNaN(num)) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
}
const arg = Number(process.argv[2]);
console.log(factorial(Math.floor(arg)));

