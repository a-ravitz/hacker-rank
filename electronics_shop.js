//Monica wants to buy a keyboard and a USB drive from her favorite electronics store.
//The store has several models of each. Monica wants to spend as much as possible for the 2 items, given her budget.

//Given the price lists for the store's keyboards and USB drives, and Monica's budget, find and print the amount of money Monica will spend.
//If she doesn't have enough money to both a keyboard and a USB drive, print -1 instead.
//She will buy only the two required items.

//For example, suppose she has b=60 to spend. Three types of keyboards cost keyboards = [40, 50, 60 ].
//Two USB drives cost drives = [5, 8, 12] . She could purchase a 40 keyboards + 12 USB drive = 52, or a 50 keyboards + 8 USB drive = 58.
//She chooses the latter. She can't buy more than 2 items so she can't spend exactly 60.

function getMoneySpent(keyboards, drives, b) {
  let max = 0;
  let x1, y1, x, y, c;

  keyboards.length > drives.length
    ? (x = keyboards.length)
    : (x = drives.length);
  x === keyboards.length ? (y = drives.length) : (y = keyboards.length);

  if (x === keyboards.length) {
    x1 = keyboards;
    y1 = drives;
  } else {
    x1 = drives;
    y1 = keyboards;
  }

  for (let i = 0; i <= x; i++) {
    for (let a = 0; a <= y; a++) {
      c = x1[i] + y1[a];
      if (c <= b) {
        if (c > max) {
          max = c;
        }
      }
    }
  }

  return max > b || max === 0 ? -1 : max;
}

getMoneySpent([3, 1], [5, 2, 8], 10);
