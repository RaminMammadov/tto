
AOS.init(); //for Animation On Scroll

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-desktop");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

var dropBtn = document.getElementsByClassName('dropdown');
for (let i = 0;i<=dropBtn.length - 1;i++) {
   dropBtn[i].addEventListener('click',(e) => {
       e.target.parentElement.children[1].classList.toggle('show');
       navMenu.classList.toggle("active");

       hamburger.classList.toggle("active");

   })
}