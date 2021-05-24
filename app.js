var menu = document.getElementById('toggle-menu');
var nav = document.getElementById('nav')
var button = document.querySelectorAll('i');

menu.addEventListener('click', () => {
    nav.classList.toggle('active')
    button.forEach(element => {
        element.classList.toggle('hide');
    });
});

window.addEventListener('scroll', () => {
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
})