function parallax() {
  var paraBgImg = document.getElementById('paraBgImg');
  var parah1 = document.getElementById('parah1');
  paraBgImg.style.top = -(window.pageYOffset / 2.5)+'px';
  parah1.style.top = -(window.pageYOffset / 4)+'px';
} window.addEventListener("scroll", parallax, false);