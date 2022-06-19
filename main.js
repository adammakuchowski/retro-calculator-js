console.log('test')

const currentNumber = document.querySelector('.current-number')
const previousNumber = document.querySelector('.previous-number p')
const mathOperator = document.querySelector('.math-operator')

const numbersButtons = document.querySelectorAll('.number')

numbersButtons.forEach(btn => console.log(btn))
const operatorsButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals')

const cleatButton = document.querySelector('.clear')

const caclulaotrHisotry = document.querySelector('.display-calculation-history')
const historyButton = document.querySelector('.clear-history-button')


let result = ''

function displayNumbers () {
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '0.'

    currentNumber.innerHTML += this.textContent;
}

function operator () {
    
} 

function calculate () {

}

function clearDisplay () {

}

function clearHistory () {

}

numbersButtons.forEach((button) => button.addEventListener('click', displayNumbers))
operatorsButtons.forEach((button) => button.addEventListener('click', operator))
equalsButton.addEventListener('click', calculate)
cleatButton.addEventListener('click', clearDisplay)
historyButton.addEventListener('click', clearHistory)
