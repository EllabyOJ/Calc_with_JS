
// alert("Welcome to calculator")

// let calculator = true

// while (calculator = true){

// let calculate = prompt("What action would you like to perform (Addition, subtraction, multiplication, or division?)")

//     while(calculate !== Addition || subtraction || multiplication || division ){
//         alert("Invalid selection")
//     }
//     if(calculate == "addition"){
//         add()
//     }

//     else if(calculate== "subtraction"){
//         subtract()
//     }
//     else if(calculate == "multiplication"){
//         multiply()
//     }

//     else if(calculate == "division"){
//         divide()
//     }
// }

// Addition
function add(){
    let num1 = prompt ("Enter first number:");  
    let num2 = prompt ("Enter second number:");

    num1 = parseInt(num1)
    num2 = parseInt(num2)

    let addition = num1 + num2

    alert ("Result:" + " " + addition)
}

//Subtraction
function subtract(){
    let num1 = prompt ("Enter first number:");    
    let num2 = prompt ("Enter second number:");

    num1 = parseInt(num1)
    num2 = parseInt(num2)

    let subtraction = num1 - num2

    alert ("Result:" + " " + subtraction)
}

//Division
function divide(){
    let num1 = prompt ("Enter first number:");
    let num2 = prompt ("Enter second number:");

    num1 = parseInt(num1)
    num2 = parseInt(num2)

    let division = num1 / num2

    alert ("Result:" + " " + division)
}

//Multiplication
function multiply(){
    let num1 = prompt ("Enter first number:");
    let num2 = prompt ("Enter second number:");

    num1 = parseInt(num1)
    num2 = parseInt(num2)

    let multiplication = num1 * num2

    alert ("Result:" + " " + multiplication)
}

add()