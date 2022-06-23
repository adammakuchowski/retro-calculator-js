console.log('test')

const currentNumber = document.querySelector('.current-number')
const previousNumber = document.querySelector('.previous-number p')
const mathOperator = document.querySelector('.math-operator')

const numbersButtons = document.querySelectorAll('.number')

const operatorsButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals')

const clearButton = document.querySelector('.clear')

const caclulaotrHisotry = document.querySelector('.display-calculation-history')
const historyButton = document.querySelector('.clear-history-button')


let result = ''

let history = []

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
    history.push(previousNum, mathOperator.innerHTML, currentNum, result)
    previousNumber.innerHTML = ''
    mathOperator.innerHTML = ''
}

function clearDisplay() {
    if (history.length > 3) {
        addtoHistory()
    }
    currentNumber.innerHTML = ''
    previousNumber.innerHTML = ''
    mathOperator.innerHTML = ''
    history = []
}

function addtoHistory() {
    historyButton.classList.add('active')
    const valueToHistory = document.createElement('li')
    let prepareValueToHistory = history.reverse()
    valueToHistory.innerHTML = `${prepareValueToHistory[3]} ${prepareValueToHistory[2]} ${prepareValueToHistory[1]} = ${prepareValueToHistory[0]}`
    prepareValueToHistory = null
    valueToHistory.classList.add('value-to-history')
    caclulaotrHisotry.appendChild(valueToHistory)

}

function clearHistory() {
    caclulaotrHisotry.textContent = ''
    historyButton.classList.remove('active')

}

numbersButtons.forEach((button) => button.addEventListener('click', displayNumbers))
operatorsButtons.forEach((button) => button.addEventListener('click', operator))
equalsButton.addEventListener('click', calculate)
clearButton.addEventListener('click', clearDisplay)
historyButton.addEventListener('click', clearHistory)
