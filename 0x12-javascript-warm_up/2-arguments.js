#!/usr/bin/node
const argsNum = process.argv.length;
if (argsNum <= 2) {
  console.log('No argument');
} else if (argsNum === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
