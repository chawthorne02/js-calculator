  class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement;
      this.currentOperandTextElement = currentOperandTextElement;
      this.allClear()
    }

    allClear() {
      this.currentOperand = " ";
      this.previousOperand = " ";
      this.operation = undefined; 
    }

    pushNumber(number) {
      this.currentOperand = number
    }

    pushOperator(operation) {

    }

    calculate() {

    }

    updateScreen () {
      this.currentOperandTextElement.innerText = this.currentOperand
    }


  }
 


 





const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')



const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.pushNumber(button.innerText)
    calculator.updateScreen()
  })
})