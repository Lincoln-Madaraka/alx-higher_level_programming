#!/usr/bin/node
let arg = process.argv.slice(2);
if (arg.length <= 1) {
  console.log(0);
} else {
  arg = arg.map((num) => Number(num));
  arg = arg.sort((a, b) => a - b);
  console.log(arg[arg.length - 2]);
}

