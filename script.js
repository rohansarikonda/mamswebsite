/*This is part of the responsive navbar coming from https://www.youtube.com/watch?v=m5ZfWFUdbAw&ab_channel=Codehal */

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});