var navLinks = document.querySelectorAll("li a");
var currentURL = window.location.href;
for (var i = 0; i < navLinks.length; i++) {
  if (navLinks[i] == currentURL) {
    navLinks[i].classList.add("active");
  }
}

function toggleMenus() {
  document.getElementById ("mainMenu") .classList.toggle ("show");
}
window.onclick = function(e) {
  if (!e.target.matches ('.menubtn')) {
    var item = document .getElementsByClassName ("mainmenu");
    for (var m = 0; m < item .length; m++) {
      var openItem = item[m]; if (openItem.classList.contains ('show')) {
        openItem.classList.remove('show');
      }
    }
  }
}