const theme = "dark-mode"


const body = document.body
// const themeToggler = document.getElementById('theme-toggler')
const themeToggler = document.getElementById('theme-toggler')

themeToggler.addEventListener('click', ()=> {
    body.classList.toggle('light-mode')
})