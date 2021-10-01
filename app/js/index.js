const hbbtn = document.querySelector('#btnHamburger')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fades = document.querySelectorAll('.has-fade')

hbbtn.addEventListener('click', function() {
   
    if (header.classList.contains('open') ){
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fades.forEach(function (element) {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
    }else {
        header.classList.add('open')
        body.classList.add('noscroll')
        fades.forEach(function (element) {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
       
    }
   
});