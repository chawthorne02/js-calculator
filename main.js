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
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
     }

    pushOperator(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.calculate()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }

    calculate() {
      let calculate 
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch(this.operation) {
        case '+':
          calculate = prev + current
          break
        case '-':
          calculate = prev - current
          break
        case '*':
            calculate = prev * current
            break
        case '/':
            calculate = prev / current
            break
        default:
          return
      }
      this.currentOperand = calculate
      this.operation = undefined
      this.previousOperand = ''
    }

    updateScreen () {
      this.currentOperandTextElement.innerText = this.currentOperand
      this.previousOperandTextElement.innerText = this.previousOperand
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

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.pushOperator(button.innerText)
    calculator.updateScreen()
  })
})

equalsButton.addEventListener('click', button  => {
  calculator.calculate()
  calculator.updateScreen()
})

allClearButton.addEventListener('click', button  => {
  calculator.allClear()
  calculator.updateScreen()
})