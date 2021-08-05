
const menuBtn = document.querySelector('.mobile-menu-bttn');
const menuBtnOpen = document.getElementById("mobile-menu-bttn");
const mobileNav = document.querySelector('.mobile-nav');
const mobileItem = document.querySelectorAll('.mobile-items');
const bttnText = document.getElementsByClassName('mobile-menu-bttn')[0]

menuBtn.addEventListener("click", () => {
  toggle();
  if (menuBtn.classList.contains('active')) {
    document.getElementById("mobile-menu-bttn").innerHTML = "close"
  }
  else {
    document.getElementById("mobile-menu-bttn").innerHTML = "menu"
  }
});



function toggle() {
  menuBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
}
