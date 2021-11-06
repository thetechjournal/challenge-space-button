const btn1 = document.getElementById('exercise1')
const btn2 = document.getElementById('exercise2')
const btn3 = document.getElementById('exercise3')
const btn4 = document.getElementById('exercise4')
const btn5 = document.getElementById('exercise5')
const btn6 = document.getElementById('exercise6')

btn1.addEventListener('click', () => {
  btn1.textContent = ""
  btn1.classList.add('explore1')
  btn1.style.backgroundColor = "rgb(181, 201, 245)"
})

btn2.addEventListener('click', () => {
  btn2.textContent = ""
  btn2.classList.add('explore2')
  btn2.style.backgroundColor = "rgb(227, 198, 227)"
})

btn3.addEventListener('click', () => {
  btn3.textContent = ""
  btn3.classList.add('explore3')
  btn3.style.backgroundColor = "rgb(238, 242, 195)"
})

btn4.addEventListener('click', () => {
  btn4.textContent = ""
  btn4.classList.add('explore4')
  btn4.style.backgroundColor = "rgb(187, 236, 243)"
})

btn5.addEventListener('click', () => {
  btn5.textContent = ""
  btn5.classList.add('explore5')
  btn5.style.backgroundColor = "rgb(175, 230, 192)"
})

btn6.addEventListener('click', () => {
  btn6.textContent = ""
  btn6.classList.add('explore6')
  btn6.style.backgroundColor = "rgb(243, 174, 174)"
})






