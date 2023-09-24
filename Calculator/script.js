let display = document.getElementById("inputText");

let inputValue = "";

const calBtn = document.querySelectorAll('.calBtn');

for(item of calBtn) {
    item.addEventListener('click', (event) =>{
        btnText = event.target.innerText;
        inputValue += btnText;
        display.value = inputValue;
    })
}

function showResults(){
    display.value = inputValue;
    acValue = eval(inputValue);
    display.value = acValue;
}

function allClear () {
    inputValue = "";
    display.value = inputValue;
}

function clearLeft () {
    let allValue = display.value;
    let newValue;

    if(allValue.length > 0) {
        newValue = allValue.slice(0, -1);
        display.value = newValue;
        inputValue = newValue;
    }
}

document.addEventListener("keydown", (e) =>{
    if (e.key == "(" ||
        e.key == ")" ||
        e.key == "+" ||
        e.key == "-" ||
        e.key == "*" ||
        e.key == "/" ||
        e.key == "%" ||
        e.key == "." ||
        e.key <=9
    )   {
            inputValue += e.key;
            display.value = inputValue;
        }
        else if (event.keyCode = 13) {
            display.value = eval(inputValue);
            inputValue = "";
            return;                                     // Unknown Error :'(
        } else if (event.keyCode >= 65 && event.keyCode <= 90) {
            alert("Wrong Keypress");
        }
        
    
})

function evaluateExpression() {
    const expressionInput = document.getElementById("inputText");
    
    const expression = expressionInput.value;

    try {
        // Evaluate the expression inside the brackets using eval
        const insideValue = eval(expression);

        // Check if the input is in the form (x) and can be evaluated
        if (!isNaN(insideValue)) {
            const outsideValue = parseFloat(document.getElementById('leftBracket').textContent) *
                parseFloat(document.getElementById('rightBracket').textContent);

            // Multiply the evaluated inside value by the outside value
            const finalResult = insideValue * outsideValue;
            resultDiv.innerHTML = `Result: ${finalResult}`;
        } else {
            resultDiv.innerHTML = 'Invalid input inside brackets';
        }
    } catch (error) {
        resultDiv.innerHTML = 'Error: Invalid expression';
    }
}

// function showResults() {
//     evaluateExpression();
// }
