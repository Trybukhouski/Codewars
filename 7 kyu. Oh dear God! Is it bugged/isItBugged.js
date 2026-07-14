// www.codewars.com/kata/580e67ae22e42d797000015e/train/javascript

function isItBugged(code) {
  const regex = /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/;
  return regex.test(code);
}
