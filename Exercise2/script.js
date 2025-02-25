var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");
function add() {
  result.value = (parseInt(num1.value) + parseInt(num2.value)).toString();
}
function subtract() {
  result.value = (parseInt(num1.value) - parseInt(num2.value)).toString();
}
function multiply() {
  result.value = (parseInt(num1.value) * parseInt(num2.value)).toString();
}
function divide() {
  result.value = (parseInt(num1.value) / parseInt(num2.value)).toString();
}
