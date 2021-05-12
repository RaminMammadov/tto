
AOS.init(); //for Animation On Scroll

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-desktop");



var dropBtn = document.getElementsByClassName('dropdown');
for (let i = 0;i<=dropBtn.length - 1;i++) {
   dropBtn[i].addEventListener('click',(e) => {
       e.target.parentElement.children[1].classList.toggle('show');
       console.log( e.target.parentElement.children[1])
       navMenu.classList.toggle("active");

       hamburger.classList.toggle("active");

   })
}

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    let j = document.getElementsByClassName('subMenu');
    for (let i = 0; i <= j.length - 1;i++) {
        j[i].classList.remove('show')
    }
}
