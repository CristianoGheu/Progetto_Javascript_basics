const buttonPlus = document.querySelector('#buttonPlus')
const buttonMinus = document.querySelector('#buttonMinus')
const input = document.querySelector('input')

buttonPlus.addEventListener('click', ()=>{
   input.value = parseInt(input.value) + 1
})

buttonMinus.addEventListener('click', ()=>{
    input.value = parseInt(input.value) - 1
})