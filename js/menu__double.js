let body = document.querySelector("body");
let bHeight = body.getBoundingClientRect().height;
let screenY = 150;
let btn = document.querySelector("#menu__double");

window.onscroll = function() {
  if (pageYOffset > screenY) {
    btn.classList.add("fixed");
  } else {
    btn.classList.remove("fixed");
  }
}

btn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}