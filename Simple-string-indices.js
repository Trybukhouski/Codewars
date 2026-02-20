function solve(str, idx) {
  if (str[idx] !== "(") return -1;
  let steps = 0;
  for (let i = idx + 1; i < str.length; i++) {
    if (str[i] === ")") {
      if (steps === 0) {
        return i;
      } else {
        steps--;
      }
    }
    if (str[i] === "(") steps++;
  }
}

console.log(solve("((1)23(45))(aB)", 0)); // 10  the opening brace at index 0 matches the closing brace at index 10
// console.log(solve("((1)23(45))(aB)", 1)); // 3
// console.log(solve("((1)23(45))(aB)", 2)); // -1 // there is no opening bracket at index 2, so return -1
// console.log(solve("((1)23(45))(aB)", 6)); //= 9
// console.log(solve("((1)23(45))(aB)", 11)); // = 14
// console.log(solve("((>)|?(*'))(yZ)", 11));
