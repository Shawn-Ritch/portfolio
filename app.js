function parallax() {
  var paraBgImg = document.getElementById('paraBgImg');
  var parah1 = document.getElementById('parah1');
  paraBgImg.style.top = -(window.pageYOffset / 3)+'px';
  parah1.style.top = -(window.pageYOffset / 6)+'px';
} window.addEventListener("scroll", parallax, false);

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
    for (var d = 0; d < item .length; d++) {
      var openItem = item[d]; if (openItem.classList.contains ('show')) {
        openItem.classList.remove('show');
      }
    }
  }
}