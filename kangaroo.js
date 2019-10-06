function kangaroo(x1, v1, x2, v2) {
  if (v1 > v2) {
    let remainder = (x1 - x2) % (v2 - v1);

    if (remainder == 0) {
      return "YES";
    }
  }
  return "NO";
}

console.log(kangaroo(0, 3, 4, 2))