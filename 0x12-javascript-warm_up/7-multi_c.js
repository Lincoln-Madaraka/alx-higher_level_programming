#!/usr/bin/node
const num = Number(process.argv[2]);
if (num || num === 0) {
  for (let i = 0; i < Math.floor(num); i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
