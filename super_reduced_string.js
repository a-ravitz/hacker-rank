function superReducedString(s) {

  let str = s;

  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i - 1)) {
      str = str.substring(0, i - 1).concat(str.substring(i + 1));
      i = 0;
    }
  }

  if (str.length === 0) {
    return "Empty String"
  } else {
    return str
  }

}
console.log(superReducedString("aaabccddd"));
console.log(superReducedString("mwkommokwmxjivkkvijxshscbbcshsgwdyqqydwgzpnlzzlnpzvfeaiiaefvyeqjccjqeymhqhiihqhmhaomkkmoahhddymmyddh"));
console.log(superReducedString("baab"));
