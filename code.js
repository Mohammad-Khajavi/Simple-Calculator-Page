function performOperation(operation){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if(isNaN(num1) || isNaN(num2)){
        document.getElementById('result').textContent = "Please enter valid numbers";
        return;
    }

    switch(operation){
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
        case 'divide':
            if(num2 === 0){
                document.getElementById('result').textContent = 'cannot divide by zero.';
                return
            }
            result = num1 / num2;
            break;
        default:
            return;
    }
    document.getElementById('result').textContent = 'Result: ${result}';
}