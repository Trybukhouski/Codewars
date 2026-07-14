// www.codewars.com/kata/5672682212c8ecf83e000050

https: function dblLinear(n) {
  const u = [1];
  let pt2 = 0;
  let pt3 = 0;

  while (u.length <= n) {
    const next2 = 2 * u[pt2] + 1;
    const next3 = 3 * u[pt3] + 1;

    if (next2 < next3) {
      u.push(next2);
      pt2++;
    } else if (next3 < next2) {
      u.push(next3);
      pt3++;
    } else {
      u.push(next2);
      pt2++;
      pt3++;
    }
  }

  return u[n];
}

// Проверка:
console.log(dblLinear(10)); // Выведет 22
