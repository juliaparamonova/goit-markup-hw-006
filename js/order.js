const menuBtns = document.querySelectorAll('.js-order-btn')
const menuEl = document.querySelector('.modal-overlay')

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        menuEl.classList.toggle('is-open')
    })
})