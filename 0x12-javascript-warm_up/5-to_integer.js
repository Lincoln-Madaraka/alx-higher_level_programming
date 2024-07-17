#!/usr/bin/node
const arg = Number(process.argv[2]);
if (arg) {
  console.log('My number:', Math.floor(arg));
} else {
  console.log('Not a number');
}
