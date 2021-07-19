var url = window.location.href.split("/");
var navLinks = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

var i = 0;
var currentPage = url[url.length - 1];
for (i; i < navLinks.length; i++) {
  var lb = navLinks[i].href.split("/");
  if (lb[lb.length - 1] == currentPage) {
    navLinks[i].className = "current";

  }
}
