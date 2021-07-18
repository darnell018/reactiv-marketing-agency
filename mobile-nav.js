
const menuBtn = document.querySelector('.mobile-menu-bttn');
const mobileNav = document.querySelector('.mobile-nav');
const mobileItem = document.querySelectorAll('.mobile-items');
const bttnText = document.getElementsByClassName('mobile-menu-bttn')[0]

menuBtn.addEventListener("click", () => {
  toggle();
  if (menuBtn.classList.contains('active')) {
    document.getElementById("mobile-menu-bttn").innerHTML = "close"
  }
});

mobileItem.forEach(item => {
  item.addEventListener('click', () => {
    if (menuBtn.classList.contains('mobile-menu-bttn active')) {
      toggle();
      // document.getElementById("mobile-menu-bttn").innerHTML = "close"
    }
    if (menuBtn.classList.contains('mobile-menu-bttn active')) {
      toggle();
      // document.getElementById("mobile-menu-bttn").innerHTML = "close"
    }
  });
});

menuBtn.addEventListener("click", () => {
  
    document.getElementById("mobile-menu-bttn").innerHTML = "close"
  
});


function toggle() {
  menuBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
}