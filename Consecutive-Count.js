function getConsectiveItems(items, key) {
  items = String(items);
  key = String(key);
  const countsArr = [];
  let count = 0;
  for (let index = 0; index < items.length; index++) {
    if (items[index] === key) {
      count++;
    } else if (items[index] !== key && items[index - 1] === key) {
      countsArr.push(count);
      count = 0;
    }
  }
  countsArr.push(count);
  return Math.max(...countsArr);
}
console.log(
  getConsectiveItems(
    "ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii",
    "z"
  )
);
