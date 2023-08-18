// Calculator Section

const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')
const resultButton = document.querySelector('.equal')
const displayResult = document.getElementById('input-text')

const oneButton = document.querySelector('.one').addEventListener('click', function(){
    calculate(1)
})

const twoButton = document.querySelector('.two').addEventListener('click', function(){
    calculate(2)
})

const threeButton = document.querySelector('.three').addEventListener('click', function(){
    calculate(3)
})

const fourButton = document.querySelector('.four').addEventListener('click', function(){
    calculate(4)
})

const fiveButton = document.querySelector('.five').addEventListener('click', function(){
    calculate(5)
})

const sixButton = document.querySelector('.six').addEventListener('click', function(){
    calculate(6)
})

const sevenButton = document.querySelector('.seven').addEventListener('click', function(){
    calculate(7)
})

const eightButton = document.querySelector('.eight').addEventListener('click', function(){
    calculate(8)
})

const nineButton = document.querySelector('.nine').addEventListener('click', function(){
    calculate(9)
})

const zeroButton = document.querySelector('.zero').addEventListener('click', function(){
    calculate(0)
})

const plusButton = document.querySelector('.plus').addEventListener('click', function(){
    calculate('+')
})

const decimal = document.querySelector('.dot').addEventListener('click', function(){
    calculate('.')
})

const minusButton = document.querySelector('.minus').addEventListener('click', function(){
    calculate('-')
})

const multiplyButton = document.querySelector('.multiply').addEventListener('click', function(){
    calculate('*')
})

const divisionButton = document.querySelector('.divide').addEventListener('click', function(){
    calculate('/')
})



function calculate(number){
    displayResult.value+=number
}


resultButton.addEventListener('click', function(){
    try{
        displayResult.value=eval(displayResult.value)
    } 
    catch(err){
        alert('Try to enter a valid input.')
    }
})
clearButton.addEventListener('click', function(){
    displayResult.value = ''
})
deleteButton.addEventListener('click', function(){
    displayResult.value = displayResult.value.slice(0, -1)
    
})
