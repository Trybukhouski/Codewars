// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

function upArray(arr) {
  if (arr.length === 0) return null;
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 9 || arr[i] < 0) return null;
    result += arr[i];
  }
  return Array.from(
    String(BigInt(result) + 1n).padStart(arr.length, "0"),
    Number
  );
}

console.log(
  upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
);

// .padStart(arr.length, "0")
