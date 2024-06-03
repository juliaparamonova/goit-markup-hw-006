const menuBtnsq = document.querySelectorAll('.js-menu-btn')
const menuElq = document.querySelector('.menu-container')

menuBtnsq.forEach((btn) => {
    btn.addEventListener('click', () => {
        menuElq.classList.toggle('is-open')
    })
})