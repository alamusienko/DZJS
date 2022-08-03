const index = document.getElementById ("sq");
var width = prompt ("enter width");
var height = prompt ("enter height");
var color = prompt ("enter borderColor");
index.style.width = width;
index.style.height = height;
index.style.borderColor = color;

var number1 = prompt ("first number");
var number2 = prompt ("second number");
var result = parseFloat (number1) + parseFloat (number2);
alert ("result: " + result);