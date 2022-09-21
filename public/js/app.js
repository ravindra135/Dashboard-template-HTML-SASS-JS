// Variables
const navSlider = document.getElementById('navSlider');
const navBar = document.getElementById('navbar');
const nsLeft = document.getElementById('ns-left');

const navItem = document.querySelectorAll('.nav-item');
const navDropItem = document.querySelectorAll('.drop-parent');

// Drop Items;
$(document).ready(function() {
    $('.drop-parent').click(function() {
        $(this).next('.drop-items').slideToggle();
        $(this).find('.arrow').toggleClass('rotate');
    });
});

// Squeezing Navbar;
navSlider.addEventListener('click', toggleNav);

function toggleNav() {
    if(navBar.classList.contains('pop-in')) {
        navBar.style.animation = 'popOut .2s ease-in'
        nsLeft.style.animation = 'arrowLeft .2s ease-in'
        navBar.classList.toggle('pop-in')
    } else {
        navBar.style.animation = 'popIn .5s ease-in'
        nsLeft.style.animation = 'arrowRight .5s ease-in'
        navBar.classList.toggle('pop-in')
    }
}