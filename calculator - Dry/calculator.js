// Calculator Program
// 4 Operations addition, subtraction,
// multiplication, and division
// You will need a function for each one
// You need a menu so user can select an
// operation

// input
// var choice = prompt("What Operation?", "addition");
var handleClick = function(event){
	console.log(window.event);
	var choice = window.event.target.id;
	var number1 = document.getElementById("firstNum").value;
	var number2 = document.getElementById("secondNum").value;
	var parsedNumber1 = parseFloat(number1);
	var parsedNumber2 = parseFloat(number2);
	var answer;
		if(choice == "addition"){
		answer = parsedNumber1 + parsedNumber2;
	} else if(choice == "subtraction"){
		answer = parsedNumber1 - parsedNumber2;
	} else if(choice == "multiplication"){
		answer = parsedNumber1 * parsedNumber2;
	} else if(choice == "division"){
		answer = parsedNumber1 / parsedNumber2;}	
		document.write("The answer is " + answer);}