//abrir e fechar menu: hamburguer e x
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

//fechar menu quando clicar em um item para
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

//colocar sombra quando der scroll
function changeHeaderWhenScroll () {
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;

  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

//testimonials carousel slider swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,

  //pagination
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// scrollreveal: mostrar elementos quando der scroll na página

const scrollReveal = ScrollReveal ({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .image, #about .image, #about .text, #services .card, #testimonials .testimonials, #contact .links, footer .brand, footer .social
    `, { interval: 100 })

//back to top
function backToTop() {
const backToTopButton = document.querySelector('.back-to-top')

  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//when scroll
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll ()
  backToTop()
});

//DOM - document object model