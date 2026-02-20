// https://www.codewars.com/kata/555b1890a75b930e63000023

function combos(n) {
  const result = [];

  function find(target, min, path) {
    if (target === 0) return result.push(path);

    for (let i = min; i <= target; i++) {
      find(target - i, i, [...path, i]);
    }
  }

  find(n, 1, []);

  return result;
}

console.log(combos(10));
