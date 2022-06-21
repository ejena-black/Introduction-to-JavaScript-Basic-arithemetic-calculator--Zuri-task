alert('This is a simple arithemitic calculator with javascript')
alert('What arihemetic calculation would you like to perform? from the following:')


function add(a, b){
    return a + b
}
function subtract(a, b){
    return a - b
}
function multiply(a, b){
    return a * b
}
function divide(a, b){
    return a / b
}

while(true){
    var choice = prompt('1. Addition  2. Subtraction  3. Multiplicaion  4. Division' + '        Input quit/q to close calculator')
    var options = ['1', '2', '3', '4']

    if(choice == 'quit' || choice == 'q'){
        alert('Closing Calculator')
        break
    }

    if(options.includes(choice)){
        var num1 = Number(prompt('Enter first number'))
        var num2 = Number(prompt('Enter second number'))

        if(choice == '1'){
            alert(num1 + ' + ' + num2 + ' = ' + add(num1, num2))
        }
        if(choice == '2'){
            alert(num1 + ' + ' + num2 + ' = ' + subtract(num1, num2))
        }
        if(choice == '3'){
            alert(num1 + ' + ' + num2 + ' = ' + multiply(num1, num2))
        }
        if(choice == '4'){
            alert(num1 + ' + ' + num2 + ' = ' + divide(num1, num2))
        }
        var next_calculation = prompt('Would you like to make another calculation (yes/no)?')
        if(next_calculation == 'no'){
            break
        }
    }
    else{
        alert('invalid input')
    }
}