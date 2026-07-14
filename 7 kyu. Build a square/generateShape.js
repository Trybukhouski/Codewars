// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript

function generateShape(integer) {
  return ("+".repeat(integer) + "\n").repeat(integer).slice(0, -1);
}
