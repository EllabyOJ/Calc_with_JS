function calculator(){
    let calculate = prompt("What action would you like to perform (Addition, subtraction, multiplication, or division?)")

    let num1 = prompt ("Enter first number:");  
    let num2 = prompt ("Enter second number:");

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    if (calculate = "addition"){
        alert(num1+num2)
    }

    else if (calculate = "subtraction"){
        alert(num1-num2)
    }

    else if (calculate = "division"){
        alert(num1/num2)
    }    
    
    else if (calculate = "multiplication"){
        alert(num1*num2)
    }    
    
    else{
        alert("Invalid selection")
    }

    let anotherOperation = prompt("Would you like to perform another operation?(yes/no)")

    if (anotherOperation = "yes"){
        calculator()
    }

    else{
        alert("Operation ended, have a nice day")
    }
}



calculator()