function processData(input) {
  const IPv4 = '^([12]?[0-9]?[0-9]\\.){3}[12]?[0-9]?[0-9]$';
  const IPv6 = '^([0-9a-fA-F]{1,4}\\:){7}[0-9a-fA-F]{1,4}$';
  const inputArr = input.split('\n');

  for (let i = 1; i < inputArr.length; i++) {
    if (inputArr[i].match(IPv4)) {
      console.log('IPv4');
    } else if (inputArr[i].match(IPv6)) {
      console.log('IPv6');
    } else {
      console.log('Neither');
    }
  }
}

processData(
  `7\n1050:1000:1000:a000:5:600:300c:326b\n1050:1000:2000:ab00:5:600:300c:326a\n1050:1000:3000:abc0:5:600:300c:326c\n1051:1000:4000:abcd:5:600:300c:326b\n22.231.113.64\n22.231.113.164\n222.231.113.64`
);
