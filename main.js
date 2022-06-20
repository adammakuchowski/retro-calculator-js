console.log('test')

const currentNumber = document.querySelector('.current-number')
const previousNumber = document.querySelector('.previous-number p')
const mathOperator = document.querySelector('.math-operator')

const numbersButtons = document.querySelectorAll('.number')

const operatorsButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals')

const cleatButton = document.querySelector('.clear')

const caclulaotrHisotry = document.querySelector('.display-calculation-history')
const historyButton = document.querySelector('.clear-history-button')


let result = ''

function displayNumbers() {
    if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return
    if (this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '0.'

    currentNumber.innerHTML += this.textContent;
}

function operator() {
    if (currentNumber.innerHTML === '' && this.textContent === '-') return currentNumber.innerHTML = '-'
    else if (currentNumber.innerHTML === '') return

    if (mathOperator.innerHTML !== '') {
        calculate()
    }
    previousNumber.innerHTML = currentNumber.innerHTML
    mathOperator.innerHTML = this.textContent
    currentNumber.innerHTML = ''
}

function calculate() {
    if (previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return

    let previousNum = Number(previousNumber.innerHTML)
    let currentNum = Number(currentNumber.innerHTML)

    switch (mathOperator.innerHTML) {
        case '+':
            result = previousNum + currentNum
            break
        case '-':
            result = previousNum - currentNum
            break
        case '*':
            result = previousNum * currentNum
            break
        case ':':
            result = previousNum / currentNum
            break
        case '2^':
            result = previousNum ** currentNum
            break
    }

    currentNumber.innerHTML = result
    previousNumber.innerHTML = ''
    mathOperator.innerHTML = ''
}

function clearDisplay() {

}

function clearHistory() {

}

numbersButtons.forEach((button) => button.addEventListener('click', displayNumbers))
operatorsButtons.forEach((button) => button.addEventListener('click', operator))
equalsButton.addEventListener('click', calculate)
cleatButton.addEventListener('click', clearDisplay)
historyButton.addEventListener('click', clearHistory)
