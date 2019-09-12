function encryption(s) {
    
  let l = s.length;
  let c = Math.ceil(Math.sqrt(l));
  let r = Math.floor(Math.sqrt(l));

  if (r * Math.ceil(Math.sqrt(l) === l)) {
    c = r;
  }

  let array = [];
  let temp = "";
  let encrypted = "";
  let count = 0;

  for (let i = 0; i < l; i++) {
    temp += s[i];

    if (temp.length === c || i === l - 1) {
      array.push(temp.split(""));
      temp = "";
    }
  }

  for (let a = 0; a <= r; count++, a++) {
    if (a > 0) {
      encrypted += " ";
    }
    for (let b = 0; b < array.length; b++) {
      if (array[b][a] !== undefined) {
        encrypted += array[b][a];
      } else {
        encrypted += "", count++, b++;
      }
    }
  }
  return encrypted;
}

console.log(encryption("feedthedog"));
console.log(encryption('haveaniceday'));
console.log(encryption('chillout'));
