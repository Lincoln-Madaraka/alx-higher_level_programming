#!/usr/bin/node
function add (a, b) {
  console.log(a + b);
}
const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[3]);
add(arg1, arg2);
