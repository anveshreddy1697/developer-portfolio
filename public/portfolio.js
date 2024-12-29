let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['FrontendDeveloper','BackendDeveloper'],
    typeSpeed: 70,
    Backspeed:70,
    BackDelay:1200,
    loop:true,
  });
