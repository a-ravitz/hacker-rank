let res = document.getElementById("res");
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

function clear() {
  res.innerHTML = ""
  num2 = "";
  num1 = "";
  operator = "";
}

document.addEventListener("click", function(e) {
  if (e.target === document.getElementById("btn0") || e.target === document.getElementById("btn1")) {
    let value = e.target.innerHTML;
    if (!operator) {
      num1 += value;
      res.innerHTML = `${num1}`;
    } else {
      num2 += value;
      res.innerHTML = `${num1}${operator}${num2}`;
    }
  }
  if (e.target === document.getElementById("btnClr")) {
    clear();
  }
  if (num1 !== "") {
    switch (e.target) {
      case document.getElementById("btnSum"):
        operator = "+";
        res.innerHTML = `${num1}${operator}`;
        break;
      case document.getElementById("btnSub"):
        operator = "-";
        res.innerHTML = `${num1}${operator}`;
        break;
      case document.getElementById("btnDiv"):
        operator = "/";
        res.innerHTML = `${num1}${operator}`;
        break;
      case document.getElementById("btnMul"):
        operator = "*";
        res.innerHTML = `${num1}${operator}`;
        break;
    }
  }
});
function equal(num1, num2, operator) {
  console.log("number 1:", parseInt(num1, 2));
  console.log("number 2:", parseInt(num2, 2));
  switch (operator) {
    case "+":
      result = 
        parseInt(num1, 2) + parseInt(num2, 2)
      clear();
      break;
    case "-":
      result = 
        parseInt(num1, 2) - parseInt(num2, 2)
      clear();
      break;
    case "/":
      result = 
        parseInt(num1, 2) / parseInt(num2, 2)
      clear();
      break;
    case "*":
      result = 
        parseInt(num1, 2) * parseInt(num2, 2)
      clear();
      break;
  }
  res.innerHTML = Math.floor(result.toString(2))
  console.log('result:', result)
}