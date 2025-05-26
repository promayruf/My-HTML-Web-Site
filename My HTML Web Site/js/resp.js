// Loader
window.addEventListener("load", function () {
    document.querySelector(".loader-wrapper").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.body.style.overflow = "auto";
    });






// Scroll to top button
// burger menu
// burger menu


burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');




burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})

