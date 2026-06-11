// Problem 1
let num = Number(prompt("Enter a positive integer:"));

document.writeln(`number: ${num}<br>`);
document.writeln(`round off value: ${Math.round(num)}<br>`);
document.writeln(`floor value: ${Math.floor(num)}<br>`);
document.writeln(`ceil value: ${Math.ceil(num)}<br>`);

// // Problem 2
let floatNum = Number(prompt("Enter a negative floating point number:"));

document.writeln(`number: ${floatNum}<br>`);
document.writeln(`round off value: ${Math.round(floatNum)}<br>`);
document.writeln(`floor value: ${Math.floor(floatNum)}<br>`);
document.writeln(`ceil value: ${Math.ceil(floatNum)}<br>`);

// Problem 3
let absNum = Number(prompt("Enter a number"));
document.writeln(`absolute value is: ${Math.abs(absNum)}`);

// Problem 4
let diceValue = Math.floor(Math.random()*6)+1;
document.writeln(`random dice value: ${diceValue}`);

// Problem 5
let toss = Math.floor(Math.random()*2)+1;
let coinvalue = (toss === 2) ? "Heads" : "Tails";
document.writeln(`random coin value: ${coinvalue}`);

// Problem 6
let randNum = Math.floor(Math.random()*100)+1;
document.writeln(`random umber between 1 and 100 is: ${randNum}`);

// Problem 7
let weightInput = prompt("Enter your weight in kilograms: ");
let parsedWeight = parseFloat(weightInput);
document.writeln(`The weight of user is ${parsedWeight} kilograms <br>`);

// Problem 8
let secretNum = Math.floor(Math.random()*10)+1;
let userGuess = Number(prompt("Enter a number between 1 and 10:"));
if(userGuess === secretNum){
    alert("Congratualations")
}else{
    alert("Try again!");
}