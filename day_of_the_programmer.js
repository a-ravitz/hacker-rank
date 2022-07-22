function dayOfProgrammer(year) {
  if (year === 1918) return '26.09.1918';

  let divisibleByFour = year % 4 === 0;
  let divisibleByFourHundred = year % 400 === 0;
  let divisibleByFourNotOneHundred = year % 4 === 0 && year % 100 !== 0;

  if (year < 1918) {
    return divisibleByFour ? `12.09.${year}` : `13.09.${year}`;
  }

  return divisibleByFourNotOneHundred || divisibleByFourHundred
    ? `12.09.${year}`
    : `13.09.${year}`;
}
