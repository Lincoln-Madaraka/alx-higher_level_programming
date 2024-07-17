#!/usr/bin/node
const num = Number(process.argv[2]);
if (num || num === 0) {
  let square = '';
  for (let i = 0; i < Math.floor(num); i++) {
    for (let j = 0; j < Math.floor(num); j++) {
      square += 'X';
    }
    if (i !== Math.floor(num) - 1) {
      square += '\n';
    }
  }
  if (square) {
    console.log(square);
  }
} else {
  console.log('Missing size');
}
