// https://www.codewars.com/kata/5813d19765d81c592200001a
function dontGiveMeFive(start, end) {
  let counter = 0;
  for (let i = start; i <= end; i++) {
    if (!String(i).includes("5")) counter++;
  }
  return counter;
}

console.log(dontGiveMeFive(4, 17));
