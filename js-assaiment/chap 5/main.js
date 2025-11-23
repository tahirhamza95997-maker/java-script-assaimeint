var num1 = 10;
var num2 = 5;

var sum = num1 + num2;
document.write("Sum: " + sum + "<br>");

var diff = num1 - num2;
document.write("Subtraction: " + diff + "<br>");

var product = num1 * num2;
document.write("Multiplication: " + product + "<br>");

var division = num1 / num2;
document.write("Division: " + division + "<br>");

var remainder = num1 % num2;
document.write("Modulus: " + remainder + "<br>");




document.write("<h1> Three start from here</h1>");


var number;
document.write("Value after variable declaration is: " + number + "<br>");


number = 5;
document.write("Initial value: " + number + "<br>");

number++;
document.write("Value after increment is: " + number + "<br>");

number = number + 7;
document.write("Value after addition is: " + number + "<br>");

number--;
document.write("Value after decrement is: " + number + "<br>");

var remainder = number % 3;
document.write("The remainder is: " + remainder + "<br>");





var ticketPrice = 700; 
var numberOfTickets = 4; 
var totalCost = ticketPrice * numberOfTickets; 

document.write("The cost of buying " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR." + "<br>" + "<br>");







var number = 7; 

for(var i = 1; i <= 10; i++){
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}