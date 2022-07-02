function calculator(){
    let calc = prompt("What action would you like to perform (Addition, subtraction, multiplication, or division?)");
    let calculate = calc.toLowerCase();

    if (calculate == "addition"){
        let num1 = prompt ("Enter first number:");  
        let num2 = prompt ("Enter second number:");
    
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

        alert(num1+num2)
    }

    else if (calculate == "subtraction"){
        let num1 = prompt ("Enter first number:");  
        let num2 = prompt ("Enter second number:");
    
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

        alert(num1-num2)
    }

    else if (calculate == "division"){
        let num1 = prompt ("Enter first number:");  
        let num2 = prompt ("Enter second number:");
    
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

        alert(num1/num2)
    }    
    
    else if (calculate == "multiplication"){
        let num1 = prompt ("Enter first number:");  
        let num2 = prompt ("Enter second number:");
    
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

        alert(num1*num2)
    }    
    
    else{
        alert("Invalid operation selected")
    }

    let Operation = prompt("Would you like to perform another operation?(yes/no)");
    let anotherOperation = Operation.toLowerCase();

    if (anotherOperation == "yes"){
        calculator()
    } else{
        alert("Operation ended, bye.")
    }
}



calculator()